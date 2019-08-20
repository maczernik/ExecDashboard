import { Component, OnInit } from '@angular/core';
import { NgForm, FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../../services/auth.service';
import { first } from 'rxjs/operators';
import { ActivatedRoute, Router } from '@angular/router';
import { environment } from '../../../../environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  public loginForm: FormGroup;
  public errorMessage: string;
  public isLocalEnvironment: boolean = !environment.production;
  private returnUrl: string;

  constructor(private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required, Validators.minLength(3)]),
      password: new FormControl('', [Validators.required, Validators.minLength(3)]),
    });
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  public login(formValues: any): void {
    this.authService.login(formValues.name, formValues.password)
      .pipe(first())
      .subscribe(
        response => {
          this.router.navigate([this.returnUrl]);
        },
        response => {
          this.errorMessage = response.error.message;
        });
  }

  public register(): void {
    this.errorMessage = 'Registration is temporarily unavailable.';
  }

  public clearError(): void {
    this.errorMessage = '';
  }

  public loginLocal(user: string): void {
    this.authService.login(user, user)
      .pipe(first())
      .subscribe(
        response => {
          this.router.navigate([this.returnUrl]);
        },
        response => {
          this.errorMessage = response.error.message;
        });
  }
}
