import { AuthComponent } from './auth.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

@NgModule({
  imports: [
    RouterModule.forChild([{ path: 'auth', component: AuthComponent }]),
  ],
  exports: [RouterModule],
})
export class AuthRouteModule {}
