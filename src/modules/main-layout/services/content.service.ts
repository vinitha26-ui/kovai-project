import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  hirePage = new Subject();
  constructor(private http: HttpClient) {
   }

  public contentService(fileName: string) {
    return this.http.get(`./assets/Json/${fileName}.json`);
  }
  
  public setHirePage(data:any) {
    this.hirePage.next(data);
  }

  public getHirePage(){
    return this.hirePage;
  }
}
