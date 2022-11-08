import { Component, Inject, OnInit } from '@angular/core';
import { event } from 'src/event';
import { EventserService } from '../eventser.service';
import { OKTA_AUTH, OktaAuthStateService } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';
import { User } from 'src/User';
import { comment } from './comment';
@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
d:event[]=[];
listofcomments:comment[];
departments:String;
user:any;
u:User;
todisplay:Boolean=false;
checker:Number;
checker2:Number;
todisplaycomments:Boolean=false;
commnet:comment=new comment();
  constructor(public ser:EventserService) { }

  ngOnInit(): void {
    
   
    this.ser.getAllEvents().subscribe(data=>{
      this.d=data;
      
      console.log(data);
    })
  }
addComment(a:Number){
this.todisplay=!this.todisplay;
this.checker=a;

}
postcomment(eid:Number){

this.ser.postcomment(this.commnet,eid).subscribe(
  data=>{
    console.log(data);
  }
);
}
getcomments(id:Number){
this.todisplaycomments=!this.todisplaycomments;
this.checker2=id;
  this.ser.getComments(id).subscribe(
    data=>{
      this.listofcomments=data;
      console.log(data);
    }
  )
}

}
