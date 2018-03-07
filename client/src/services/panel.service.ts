import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { environment }  from '../environments/environment';

const  BASEURL:string= environment.BASEURL;

@Injectable()
export class PanelService {

    dbName: string = "http://localhost:3000"
    options: object = { withCredentials: true };

    constructor(private http: Http) { }

    handleError(e) {
        console.log(e);
        return Observable.throw(e.json().message);
    }

    getAnimalPanel(id) {
        return this.http.get(`${this.dbName}/api/support/panel/${id}`, this.options)
        .map((res) => res.json());
    }
}