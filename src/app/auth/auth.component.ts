import { AppState } from './../store-root/index';
import { Store } from '@ngrx/store';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
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

  constructor(private store: Store<AppState>, private fb: FormBuilder) {}

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
      this.store.dispatch(AuthActions.loginStart({ email, password }));
    } else {
      this.isLoading = true;
      this.store.dispatch(AuthActions.signupStart({ email, password }));
    }

    this.authForm.reset();
  }

  onHandleError() {
    this.store.dispatch(AuthActions.clearError());
  }

  initForm() {
    this.authForm = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  ngOnDestroy(): void {
    this.storeSub?.unsubscribe();
  }
}
