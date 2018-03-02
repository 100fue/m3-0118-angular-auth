import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AnimalService {

    dbName: string = "http://localhost:3000"
    options: object = { withCredentials: true };

    constructor(private http: Http) { }

    handleError(e) {
        console.log(e);
        return Observable.throw(e.json().message);
    }

    getList() {
        return this.http.get(`${this.dbName}/api/animal/list`, this.options)
            .map((res) => res.json());
    }

    getAnimal(id) {
        return this.http.get(`${this.dbName}/api/animal/list/${id}`, this.options)
            .map((res) => res.json());
    }


    newSupport(support,id) {
        return this.http.post(`${this.dbName}/api/animal/list/${id}/support`, {support}, this.options)
            .map((res) => res.json());
    }

}