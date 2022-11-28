import { AuthService } from './../auth.service';
import { User } from './../user.model';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import * as AuthActions from './auth.actions';
import { switchMap, catchError, map, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: string;
}

const handleAuthentication = (resData: AuthResponseData) => {
  const expirationDate = new Date(
    new Date().getTime() + +resData.expiresIn * 1000
  );
  const user = new User(
    resData.email,
    resData.localId,
    resData.idToken,
    expirationDate
  );
  localStorage.setItem('userData', JSON.stringify(user));
  return AuthActions.authenticationSuccess({
    email: resData.email,
    userId: resData.localId,
    token: resData.idToken,
    expirationDate: expirationDate,
    redirect: true,
  });
};

const handleError = (errorRes: HttpErrorResponse) => {
  let errorMsg = 'An Unknown Error occurred!';
  if (!errorRes.error || !errorRes.error.error) {
    return of(AuthActions.authenticationFail({ error: errorMsg }));
  }

  switch (errorRes.error.error.message) {
    case 'EMAIL_EXISTS':
      errorMsg = 'This email exists already!';
      break;
    case 'INVALID_PASSWORD':
      errorMsg = 'Credentials are incorrect!';
      break;
    case 'USER_DISABLED':
      errorMsg = 'Invalid account: account has been deleted!';
      break;
  }
  return of(AuthActions.authenticationFail({ error: errorMsg }));
};

@Injectable()
export class AuthEffects {
  authSignUp$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.signupStart),
      switchMap((signupAction) => {
        return this.http
          .post<AuthResponseData>(
            `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.api}`,
            {
              email: signupAction.email,
              password: signupAction.password,
              returnSecureToken: true,
            }
          )
          .pipe(
            tap((resData) => {
              this.authService.setLogoutTimer(+resData.expiresIn * 1000);
            }),
            map((resData) => {
              return handleAuthentication(resData);
            }),

            catchError((errorRes) => {
              return handleError(errorRes);
            })
          );
      })
    );
  });

  authLogin$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.loginStart),
      switchMap((authData) => {
        return this.http
          .post<AuthResponseData>(
            `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.api}`,
            {
              email: authData.email,
              password: authData.password,
              returnSecureToken: true,
            }
          )
          .pipe(
            tap((resData) => {
              this.authService.setLogoutTimer(+resData.expiresIn * 1000);
            }),
            map((resData) => {
              return handleAuthentication(resData);
            }),

            catchError((errorRes) => {
              return handleError(errorRes);
            })
          );
      })
    );
  });

  authRedirect$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(AuthActions.authenticationSuccess),
        tap((authSuccessAction) => {
          if (authSuccessAction.redirect) {
            this.router.navigate(['/']);
          }
        })
      );
    },
    { dispatch: false }
  );

  autoLogin$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.autoLogin),
      map(() => {
        const userStringData = localStorage.getItem('userData');
        if (!userStringData) {
          return { type: 'DUMMY' };
        }
        const userData: {
          email: string;
          id: string;
          _token: string;
          _tokenExpirationDate: string;
        } = JSON.parse(userStringData);

        const loadedUser = new User(
          userData.email,
          userData.id,
          userData._token,
          new Date(userData._tokenExpirationDate)
        );
        if (loadedUser.token) {
          const expirationDuration =
            new Date(userData._tokenExpirationDate).getTime() -
            new Date().getTime();

          this.authService.setLogoutTimer(expirationDuration);
          return AuthActions.authenticationSuccess({
            email: loadedUser.email,
            userId: loadedUser.id,
            token: loadedUser.token,
            expirationDate: new Date(userData._tokenExpirationDate),
            redirect: false,
          });
        }
        return { type: 'DUMMY' };
      })
    );
  });

  authLogout$ = createEffect(
    () => {
      return this.actions$.pipe(
        ofType(AuthActions.logout),
        tap(() => {
          localStorage.removeItem('userData');
          this.authService.clearLogoutTimer();
          this.router.navigate(['/auth']);
        })
      );
    },
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) {}
}
