import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from '../user.model';

@Injectable()
export class UserService {

  public baseUrl : string;
  constructor(private _http: HttpClient) {
    this.baseUrl = "http://localhost:3000/user/";
   }

   getUserData(): Observable<user[]> {
    const url: string = this.baseUrl;
    return this._http.get<user[]>(url)
  }

}
