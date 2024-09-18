import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ContentService {

  constructor(private http: HttpClient) { }

  public contentService(fileName: string) {
    return this.http.get(`./assets/Json/${fileName}.json`);
  }
}
