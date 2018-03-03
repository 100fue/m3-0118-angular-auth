import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

interface User {
  username: string,
  password: string
}

@Injectable()
export class SessionService {

  dbName: string = "http://localhost:3000"
  options: object = { withCredentials: true };

  constructor(private http: Http) {
    // this.isLoggedIn().subscribe();
  }

  private user: User;

  getUser() {
    return this.user;
  }

  handleError(e) {
    console.log(e);
    return Observable.throw(e.message);
  }

  signup(username: string, password: string, email: string): Observable<any> {
    return this.http.post(`${this.dbName}/api/auth/signup`, { username, password, email }, this.options)
      .map(res => res.json())
      .map((user) => {
        console.log(`Setting user, welcome ${this.user.username}`)        
        this.user = user;
        return this.user;
      })
      .catch(this.handleError);
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.dbName}/api/auth/login`, { username, password }, this.options)
      .map(res => res.json())
      .map((user) => {
        this.user = user;
        console.log(`Setting user, welcome ${this.user.username}`);
        return this.user;
      })
      .catch(this.handleError);
  }

  logout(): Observable<any> {
    return this.http.get(`${this.dbName}/api/auth/logout`, this.options)
      .map(res => res.json())
      .map(() => {
        console.log(`bye bye ${this.user.username}`);        
        this.user = null;
        return this.user;
      })
      .catch(this.handleError);
  }

  isLoggedIn(): boolean {
    return !!this.user;
  }
}