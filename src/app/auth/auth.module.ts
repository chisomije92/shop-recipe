import { AlertComponent } from './../shared/alert/alert.component';
import { AuthRouteModule } from './auth-routing.module';
import { AuthComponent } from './auth.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { LoadingSpinnerComponent } from '../shared/loading-spinner/loading-spinner.component';

@NgModule({
  declarations: [AuthComponent, LoadingSpinnerComponent, AlertComponent],
  imports: [CommonModule, ReactiveFormsModule, AuthRouteModule],
})
export class AuthModule {}
