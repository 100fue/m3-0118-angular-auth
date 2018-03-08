import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import { environment }  from '../environments/environment';

@Injectable()
export class PanelService {

    dbName:string= environment.BASEURL;
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

    changeUsername(id, username){
        return this.http.post(`${this.dbName}/api/support/panel/${id}/username`, {username}, this.options)
        .map((res) => res.json());
    }
}