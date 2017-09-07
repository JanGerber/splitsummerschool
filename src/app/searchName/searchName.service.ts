import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';


import {User} from './User';

@Injectable()
export class SearchNameService {
  // Resolve HTTP using the constructor
  constructor (private http: Http) {}
  // private instance variable to hold base url
  private url = 'http://192.168.1.42:8080';


  getSpecSigners(name: string):  Observable<any> {
    return this.http
      .get(this.url + '/api/signer/' + name)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }

  getAllSigners(): Observable<any> {
    return this.http
      .get(this.url + '/api/signers')
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }
}
