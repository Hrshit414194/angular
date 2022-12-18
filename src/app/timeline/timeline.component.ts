import { Component, Inject, OnInit } from '@angular/core';
import { event } from 'src/event';
import { EventserService } from '../eventser.service';
import { OKTA_AUTH, OktaAuthStateService } from '@okta/okta-angular';
import { OktaAuth } from '@okta/okta-auth-js';
import { User } from 'src/User';
import { comment } from './comment';
import { poll } from '../post-poll/poll';

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
listOfPolls:poll[]=[];
arr:string[]=new Array();
 getRamdomElement:any;
a:any;

  constructor(public ser:EventserService) { }

  ngOnInit(): void {
    this.getClaims();


    this.arr.push("https://static.toiimg.com/photo/msid-83688238/83688238.jpg");
    this.arr.push("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRaqfmM-TwUWsOXtGei07TYMnFM0H7XodYe1w&usqp=CAU");
    this.arr.push("https://assets-in.bmscdn.com/iedb/artist/images/website/poster/large/ram-charan-teja-1046368-19-09-2017-02-37-43.jpg");
    //this.arr=new this.arr();
   //this.connect();



    this.ser.getAllEvents().subscribe(data=>{
      this.d=data;
      
      console.log(data);
    });
    this.ser.getAllPolls().subscribe(data=>{
      this.listOfPolls=data;
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
    this.commnet.comment="";
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
getRandonImage():string{
  this.a =this.arr[Math.floor(Math.random() * this.arr.length)] ;
return this.a;
}
getClaims(){
  this.ser.getClaims().subscribe(
    data=>{
      console.log(data);
    }
  )
}

}



