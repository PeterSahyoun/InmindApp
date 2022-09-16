import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginToken } from '../login.token';
import { UserAuth } from '../userAuth';
import { UserInfo } from '../userInfo';
import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = "http://192.168.1.187:5005/api";
  private userUrl = this.url + "/User";
  parts? :string[] = [];


  constructor(private httpClient: HttpClient, private jwtHelper: JwtHelperService) { }

  login(Auth : UserAuth) : Observable<LoginToken> {
    return this.httpClient.post<LoginToken>(this.userUrl+"/Login()", Auth);
  }

  logout() : Observable<any> {
    return this.httpClient.get(this.userUrl+"/Logout()");
  };
  signUp(credentials: UserInfo) : Observable<any> {
    return this.httpClient.post(this.userUrl+"/SignUp()", credentials);
  }

  createAdmin (credentials: UserInfo) : Observable<any> {
    return this.httpClient.post(this.userUrl+"/CreateAdminUser()", credentials);
  }

  decodeToken(encodedString : string) : string {
    return atob(encodedString);
  }

  // getAuthStatus () : boolean {
  //   if (this.jwtHelper.isTokenExpired(localStorage.getItem('token')!)) {
  //     return false; 
  //   } else {
  //     return true;
  //   }
  // }

}