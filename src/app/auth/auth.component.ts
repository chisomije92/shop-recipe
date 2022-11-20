import { AppState } from './../store-root/index';
import { Store } from '@ngrx/store';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import * as AuthActions from './store/auth.actions';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit, OnDestroy {
  isLoginMode: boolean = true;
  isLoading: boolean = false;
  error: string | null = null;
  authForm!: FormGroup;
  storeSub?: Subscription;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.initForm();
    this.storeSub = this.store.select('auth').subscribe((authState) => {
      (this.isLoading = authState.loading), (this.error = authState.authError);
    });
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit() {
    if (!this.authForm.valid) return;
    const { email, password } = this.authForm.value;
    if (this.isLoginMode) {
      this.isLoading = true;
      this.store.dispatch(new AuthActions.LoginStart({ email, password }));
    } else {
      this.isLoading = true;
      this.store.dispatch(new AuthActions.SignupStart({ email, password }));
    }

    this.authForm.reset();
  }

  onHandleError() {
    this.store.dispatch(new AuthActions.ClearError());
  }

  initForm() {
    this.authForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
    });
  }

  ngOnDestroy(): void {
    this.storeSub?.unsubscribe();
  }
}
