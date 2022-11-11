import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, throwError } from 'rxjs';
import { environment } from 'src/environments/environment';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  ExpiresIn: string;
  localId: string;
  registered?: string;
}

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor(private http: HttpClient) {}

  signup(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${environment.api}`,
        {
          email,
          password,
          refreshToken: true,
        }
      )
      .pipe(catchError(this.handleError));
  }

  signIn(email: string, password: string) {
    return this.http
      .post<AuthResponseData>(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${environment.api}`,
        {
          email,
          password,
          refreshToken: true,
        }
      )
      .pipe(catchError(this.handleError));
  }

  private handleError(errorRes: HttpErrorResponse) {
    let errorMsg = 'An Unknown Error occurred!';
    if (!errorRes.error || !errorRes.error.error) {
      return throwError(() => errorMsg);
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
    return throwError(() => errorMsg);
  }
}
