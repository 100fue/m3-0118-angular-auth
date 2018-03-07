import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { environment }  from '../environments/environment';

interface User {
  username: string,
  password: string
}

@Injectable()
export class SessionService {

  dbName:string= environment.BASEURL;
  options: object = { withCredentials: true };

  constructor(private http: Http) {
  }

  // private user: User;
  // is a type of subject, subject is a special type of observable so i can subscribe to messages like any other observables;
  // you can emit new users and will always have a default value
  public user = new BehaviorSubject(null);

  handleError(e) {
    console.log(e);
    return Observable.throw(e.message);
  }

  signup(username: string, password: string, email: string): Observable<any> {
    return this.http.post(`${this.dbName}/api/auth/signup`, { username, password, email }, this.options)
      .map(res => res.json())
      .map((user) => {
        // emit the new user to the behaviour subject
        this.user.next(user);
        console.log(`Setting user, welcome ${user.username}`)        
        return user;
      })
      .catch(this.handleError);
  }

  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.dbName}/api/auth/login`, { username, password }, this.options)
      .map(res => res.json())
      .map((user) => {
        // emit the new user to the behaviour subject
        this.user.next(user);
        console.log(`Setting user, welcome ${user.username}`);
        return user;
      })
      .catch(this.handleError);
  }

  logout(): Observable<any> {
    return this.http.get(`${this.dbName}/api/auth/logout`, this.options)
      .map(res => res.json())
      .map(() => {
        console.log(`bye bye`);
        // emit the new user to the behaviour subject
        this.user.next(null);        
        return null;
      })
      .catch(this.handleError);
  }

  isLoggedIn(): Observable<boolean> {
    return this.user.map((user) => {
      if (user) {
        return true;
      }
      else {
        return false;
      }
    });
  }
}