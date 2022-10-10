import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { event } from 'src/event';
@Injectable({
  providedIn: 'root'
})
export class EventserService {
  [x: string]: any;

  constructor(public http:HttpClient) { }


postevent(e:event):Observable<String>{
  return this.http.post<any>("http://localhost:8080/api/public/postEvent",e);
}
getAllDepts():Observable<any>{
  return this.http.get<any>("http://localhost:8080/api/public/getAllDepartments");
}
getAllEvents():Observable<any>{
  return this.http.get<any>("http://localhost:8080/api/public/getEvents");
}

}
