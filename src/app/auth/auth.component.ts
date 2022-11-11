import { AuthService, AuthResponseData } from './auth.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
})
export class AuthComponent implements OnInit {
  isLoginMode: boolean = true;
  isLoading: boolean = false;
  error: string | null = null;
  authForm!: FormGroup;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.initForm();
  }

  onSwitchMode() {
    this.isLoginMode = !this.isLoginMode;
  }

  onSubmit() {
    if (!this.authForm.valid) return;
    let authObs: Observable<AuthResponseData>;
    const { email, password } = this.authForm.value;
    if (this.isLoginMode) {
      authObs = this.authService.signIn(email, password);
    } else {
      this.isLoading = true;
      authObs = this.authService.signup(email, password);
    }

    authObs.subscribe({
      next: (res) => {
        console.log(res);
        this.isLoading = false;
      },

      error: (errorResponse) => {
        console.log(errorResponse);
        this.error = 'An unknown error occurred!';
        this.error = errorResponse;
        this.isLoading = false;
      },
    });

    this.authForm.reset();
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
}
