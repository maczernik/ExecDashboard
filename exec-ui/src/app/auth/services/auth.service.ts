import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment.local';
import { map } from 'rxjs/operators';
import { UserModel } from '../models/user.model';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class AuthService {

  private logedUser: BehaviorSubject<UserModel>;
  public logedUser$: Observable<UserModel>;

  constructor(private httpClient: HttpClient) {
    this.logedUser = new BehaviorSubject<UserModel>(JSON.parse(localStorage.getItem('logedUser')));
    this.logedUser$ = this.logedUser.asObservable();
  }

  public get currentUserValue(): UserModel {
    return this.logedUser.value;
  }

  public login(name: string, password: string): Observable<any> {
    const authData = {
      name: name, password: password
    };
    return this.httpClient.post(`${environment.apiUrl}/login`, authData)
      .pipe(map((user: UserModel) => {
        if (user && user.token) {
          localStorage.setItem('logedUser', JSON.stringify(user));
          this.logedUser.next(user);
        }
        return user;
      }));
  }

  public logout(): void {
    localStorage.removeItem('logedUser');
    this.logedUser.next(null);
  }
}
