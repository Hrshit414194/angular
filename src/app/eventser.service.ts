import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { event } from 'src/event';
import { comment } from './timeline/comment';
import { pollDTO } from './post-poll/pollDTO';
import { voteDTO } from './post-poll/VoteDTO';
@Injectable({
  providedIn: 'root'
})
export class EventserService {
  [x: string]: any;
  url:string="http://ec2-18-237-180-227.us-west-2.compute.amazonaws.com:8080";
  constructor(public http:HttpClient) { }


postevent(e:event):Observable<String>{
  return this.http.post<any>(`${this.url}/api/public/postEvent`,e);
}
getAllDepts():Observable<any>{
  return this.http.get<any>(`${this.url}/api/public/getAllDepartments`);
}
getAllEvents():Observable<any>{
  return this.http.get<any>(`${this.url}/api/public/getEvents`);
}
saveUser():Observable<any>{
  return this.http.get<any>(`${this.url}/api/saveuser`);
}
postcomment(c:comment,eventid:Number):Observable<any>{
return this.http.post<any>(`${this.url}/api/public/postComment/${eventid}`,c);
}
getComments(eventid:Number):Observable<any>{
  return this.http.get<any>(`${this.url}/api/getComments/${eventid}`);
}
getEventById(eventid:Number):Observable<any>{
  return this.http.get<any>(`${this.url}/api/getEventById/${eventid}`);
}
postpoll(poll:pollDTO):Observable<any>{
  return this.http.post<any>(`${this.url}/api/poll/newPoll`,poll);
}
vote(vote:voteDTO):Observable<any>{
  return this.http.post<any>(`${this.url}/api/poll/vote`,vote);
}
getAllPolls():Observable<any>{
  return this.http.get<any>(`${this.url}/api/poll/GetAllPolls`);
}
getpoll(id:any):Observable<any>{
  return this.http.get<any>(`${this.url}/api/poll/GetPoll/${id}`);
}
getClaims():Observable<any>{
  return this.http.get<any>(`${this.url}/api/claims`);
}
}
