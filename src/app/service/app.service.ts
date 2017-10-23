import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import {DILLER} from '../models/Diller';
@Injectable()
export class AppServiceService {
    constructor(private http: Http) {
    }
    rootURL: string = "http://testinterapi.mngkargo.com.tr/";
    headers = new Headers();
    setApiUrl(apiRouteName: string) {
        return this.rootURL + "api/InterWeb/" + apiRouteName;
    }
    setHeaders() {
        return this.headers.append('Content-Type', 'application/json');
    }
    handleError(err: any, commStr: any) {
        return console.log(err), Observable.throw(err || commStr);
    }
    getDiller(): Observable<DILLER[]> {
        return this.http.get(this.setApiUrl("DilleriGetir"))
            .map((res: Response) => res.json())
            .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
    }
    dmlDiller (n) {
        var l, e = (JSON.stringify(n), new t.j({
            headers: this.setHeaders()
        }));
        return this.http.post(this.setApiUrl("DilDml"), n, e).map(function (n) {
            return n.json()
        }).catch(this.handleError).subscribe(function (n) {
            l = n
        })
    }

}