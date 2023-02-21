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
  addUserData(user: user): Observable<user>{
    const url: string = this.baseUrl;
    return this._http.post<user>(url,user);
  }

  getUserById(id:number):Observable<user>{
    const url: string = this.baseUrl+id;
    return this._http.get<user>(url);
  }

  public edditedData(user: user, id: number): Observable<user> {
    const url: string = this.baseUrl+id;
    return this._http.put<user>(url,user)
  }
}
