import { AppState } from './../store-root/index';
import { Store } from '@ngrx/store';
import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import {
  ActivatedRouteSnapshot,
  CanActivate,
  Router,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable, take, map, tap, switchMap } from 'rxjs';
import * as AuthActions from './store/auth.actions';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  user: any;
  constructor(
    private router: Router,
    private store: Store<AppState>,
    @Inject(PLATFORM_ID) private platformId: any
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | boolean
    | UrlTree
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> {
    //return this.store.select(selectAuthUser).pipe(
    //  map((user) => {
    //    this.user = user;
    //    if (!this.user) {
    //      console.log('invalid');
    //      console.log(this.user);
    //      return this.router.createUrlTree(['/auth']);
    //    }
    //    console.log('valid');
    //    console.log(this.user);
    //    return true;
    //  })
    //);
    //if (!this.user) {
    //  console.log(this.user);
    //  console.log('invalid');
    //  return this.router.createUrlTree(['/auth']);
    //}
    //console.log('valid');
    //console.log(this.user);
    //console.log(selectAuthUser);
    //return true;

    //  return this.store.select('auth').pipe(
    //    take(1),
    //    map((authState) => authState.user),
    //    map((user) => {
    //      const isAuth = !!user;
    //      if (isAuth) {
    //        console.log('valid');
    //        console.log(user);
    //        return true;
    //      }
    //      console.log('invalid');
    //      console.log(user);
    //      return this.router.createUrlTree(['/auth']);
    //    })
    //  );

    return this.store.select('auth').pipe(
      tap(() => {
        if (isPlatformBrowser(this.platformId)) {
          //this.store.dispatch(new AuthActions.AutoLogin());
          this.store.dispatch(AuthActions.autoLogin());
        }
      }),
      map((authState) => {
        return authState.user;
      }),
      map((user) => {
        const isAuth = !!user;
        if (isAuth) {
          return true;
        }
        return this.router.createUrlTree(['/auth']);
      })
    );
  }
}
