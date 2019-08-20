import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { UserModel } from '../../auth/models/user.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  public logedUser: UserModel;

  constructor(private authService: AuthService,
    private router: Router) {
    this.authService.logedUser$.subscribe((logedUser: UserModel) => this.logedUser = logedUser);
  }

  ngOnInit() { }

  public logout(): void {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
