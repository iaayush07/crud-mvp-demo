import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { File } from '../file.model';

@Injectable()
export class UploadFileService {

  public baseUrl: string;
  constructor(private _http: HttpClient) {
    this.baseUrl = "http://localhost:3000/File/";
  }

  public getFiles(): Observable<File[]> {
    return this._http.get<File[]>(this.baseUrl);
  }

  public addFiles(file: File): Observable<File> {
    return this._http.post<File>(`${this.baseUrl}`, file)
  }

  public deleteFiles(id: number): Observable<File> {
    return this._http.delete<File>(`${this.baseUrl}/${id}`)
  }
}
