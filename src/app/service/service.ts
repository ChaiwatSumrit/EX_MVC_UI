
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable';
import { throwError } from 'rxjs';

import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';

import { Http, Headers, Request, RequestMethod, Response, ResponseContentType } from '@angular/http';
import { TransactionSumNumberAB } from '../model'
@Injectable()
export class Service {

    constructor(
        private http: Http
    ) { }

    createAuthorizationHeader(headers: Headers) {
        headers.append('Access-Control-Allow-Origin', '*');
        headers.append('Content-Type', 'application/json');

    }

    private handleError(error: any) {
        let errorBody = JSON.parse(error._body);
        let errorMsg = errorBody.message;
        console.log('Error message: ', errorMsg);
        return throwError(errorMsg);
    };

    submitGetTime(): Observable<any> {
        const url = environment.backendBaseUrl + 'getServerTime';//asset.service.request
        // const filter = `/${encodeURIComponent(id.inv_no)}/${id.DATE}/${id.inv_tax_seller}` //`?filter={"where": { "srId": "${id}" }}`;
        // const filter = ``
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this.http.get(url, {
            headers: headers
        }).map((res: Response) => {
            return res.json();
        })
            .catch(this.handleError);
    }

    submitRandomNumber(): Observable<any> {
        const url = environment.backendBaseUrl + 'random';//asset.service.request
  
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this.http.get(url, {
            headers: headers
        }).map((res: Response) => {
            return res.json();
        })
            .catch(this.handleError);
    }

    submitSumAB(model: TransactionSumNumberAB): Observable<any> {
        const url = environment.backendBaseUrl + 'sumAB'; // transaction.submit.service.request
        let headers = new Headers();
        this.createAuthorizationHeader(headers);
        return this.http.post(url, model, {
            headers: headers
        }).map((res: Response) => {
            return res.json();
        })
            .catch(this.handleError);
    }


}