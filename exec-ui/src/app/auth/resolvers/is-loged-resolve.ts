import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class IsLogedResolve implements Resolve<void> {

  constructor(private authService: AuthService, private router: Router) { }

  public resolve(): void {
    if (this.authService.currentUserValue !== null) {
      this.router.navigate(['/']);
    }
  }
}
