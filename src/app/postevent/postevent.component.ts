import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Department } from 'src/Department';
import { event } from 'src/event';
import { User } from 'src/User';
import { EventserService } from '../eventser.service';
import { TimelineComponent } from '../timeline/timeline.component';
import * as Stomp from 'stompjs';
import * as SockJS from 'sockjs-client';
@Component({
  selector: 'app-postevent',
  templateUrl: './postevent.component.html',
  styleUrls: ['./postevent.component.css']
})
export class PosteventComponent implements OnInit {
newevent:event;
user:User;
dep:Department;
ngForm: FormGroup;


ws: any;
name: string;
disabled: boolean;
  constructor(public ser:EventserService,public rt:Router,private fb:FormBuilder) { }

  ngOnInit(): void {
  

this.connect();

    this.newevent=new event();
//this.user=new User();
//this.user.emailId="saiteja@gmail.com";
//this.user.familyName="konidela";
//this.user.givenName="saiteja";
//this.newevent.postedByUser=this.user;
this.dep=new Department();
//this.dep.DepartmentId=111;
this.dep.departmentName="cse";
this.newevent.departmentsAllowed=[this.dep];

this.ser.getAllDepts().subscribe(data=>{
  console.log(data);
});
  }
  post(){
    let d = JSON.stringify({
      'name' : this.newevent
    })
    this.ws.send(d);
this.ser.postevent(this.newevent).subscribe(
  data=>{
    console.log(data);
this.rt.navigate(['timeline']);
  }
)

  }
  timeline(){
    this.rt.navigate(['TimelineComponent']);
  }
  connect() {
    //connect to stomp where stomp endpoint is exposed
    //let ws = new SockJS(http://localhost:8080/greeting);
    let socket = new WebSocket("ws://localhost:8080/websocket");
    this.ws = Stomp.over(socket);
    this.ws.onmessage = (event: MessageEvent) => {
      // Handle incoming messages here
      console.log(event.data);
    };
    let that = this;
    this.ws.connect({}, function() {
      that.ws.subscribe("/errors", function(message: { body: string; }) {
        alert("Error " + message.body);
      });
      that.ws.subscribe("/topic", function(message: { body: any; }) {
        console.log(message.body);
      });
      //that.disabled = true;
    }, function(error: string) {
      alert("STOMP error " + error);
    });
  }
}
