import { AppState } from './../store-root/index';
import { Store } from '@ngrx/store';
import { Router } from '@angular/router';
import { AuthService, AuthResponseData } from './auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
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

  constructor(
    private authService: AuthService,
    private router: Router,
    private store: Store<AppState>
  ) {}

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

    //authObs!.subscribe({
    //  next: (res) => {
    //    console.log(res);
    //    this.isLoading = false;
    //    this.router.navigate(['/recipes']);
    //  },

    //  error: (errorResponse) => {
    //    console.log(errorResponse);
    //    this.error = errorResponse;
    //    this.isLoading = false;
    //  },
    //});

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
