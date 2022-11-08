import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Department } from 'src/Department';
import { event } from 'src/event';
import { User } from 'src/User';
import { EventserService } from '../eventser.service';
import { TimelineComponent } from '../timeline/timeline.component';

@Component({
  selector: 'app-postevent',
  templateUrl: './postevent.component.html',
  styleUrls: ['./postevent.component.css']
})
export class PosteventComponent implements OnInit {
newevent:event;
user:User;
dep:Department;
  constructor(public ser:EventserService,public rt:Router) { }

  ngOnInit(): void {
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
this.ser.postevent(this.newevent).subscribe(
  data=>{
    console.log(data);
  }
)
  }
  timeline(){
    this.rt.navigate(['TimelineComponent']);
  }

}
