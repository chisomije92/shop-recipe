import { HttpClient } from '@angular/common/http';
import { Actions, ofType, createEffect } from '@ngrx/effects';
import * as AuthActions from './auth.actions';
import { switchMap, catchError, map, of, Observable, tap } from 'rxjs';
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
@Injectable()
export class AuthEffects {
  authSignUp$ = createEffect(() => {
    return this.actions$.pipe();
  });
  authLogin$ = createEffect(() => {
    return this.actions$.pipe(
      ofType(AuthActions.LOGIN_START),
      switchMap((authData: AuthActions.LoginStart) => {
        return this.http
          .post<AuthResponseData>(
            `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.api}`,
            {
              email: authData.payload.email,
              password: authData.payload.password,
              returnSecureToken: true,
            }
          )
          .pipe(
            map((resData) => {
              const expirationDate = new Date(
                new Date().getTime() + +resData.expiresIn * 1000
              );
              return new AuthActions.AuthenticateSuccess({
                email: resData.email,
                userId: resData.localId,
                token: resData.idToken,
                expirationDate: expirationDate,
              });
            }),

            catchError((errorRes) => {
              let errorMsg = 'An Unknown Error occurred!';
              if (!errorRes.error || !errorRes.error.error) {
                return of(new AuthActions.AuthenticateFail(errorMsg));
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
              return of(new AuthActions.AuthenticateFail(errorMsg));
            })
          );
      })
    );
  });

  authSuccess$ = createEffect(
    (): any => {
      return this.actions$.pipe(
        ofType(AuthActions.AUTHENTICATE_SUCCESS),
        tap(() => {
          this.router.navigate(['/']);
        })
      );
    },
    { dispatch: false }
  );

  constructor(
    private actions$: Actions,
    private http: HttpClient,
    private router: Router
  ) {}
}
