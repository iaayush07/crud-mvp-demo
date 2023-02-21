import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { user } from '../user.model';

@Injectable()
export class UserService {

  public baseUrl : string;
  constructor(private _http: HttpClient) {
    this.baseUrl = "http://localhost:3000/user";
   }

   /**
    * get user all data
    */
   getUserData(): Observable<user[]> {
    const url: string = this.baseUrl;
    return this._http.get<user[]>(url);
  }

  /**
   * post user data
   */
  addUserData(user: any): Observable<any>{
    const url: string = this.baseUrl;
    return this._http.post<any>(url,user);
  }

}
