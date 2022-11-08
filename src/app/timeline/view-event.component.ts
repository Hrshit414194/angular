import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { event } from 'src/event';
import { EventserService } from '../eventser.service';

@Component({
  selector: 'app-view-event',
  templateUrl: './view-event.component.html',
  styleUrls: ['./view-event.component.css']
})
export class ViewEventComponent implements OnInit {
id:Number;
event:event;
  constructor(public ser:EventserService,private activatedRoute:ActivatedRoute,private http:HttpClient) { }

  ngOnInit(): void {
    let idparam=this.activatedRoute.snapshot.paramMap.get('id');
    this.id=idparam?+idparam:0;
this.ser.getEventById(this.id).subscribe(
  data=>{
this.event=data;
console.log(data);
  }
)
  }

}
