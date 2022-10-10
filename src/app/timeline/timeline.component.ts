import { Component, OnInit } from '@angular/core';
import { event } from 'src/event';
import { EventserService } from '../eventser.service';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.component.html',
  styleUrls: ['./timeline.component.css']
})
export class TimelineComponent implements OnInit {
d:event[]=[];
departments:String;
  constructor(public ser:EventserService) { }

  ngOnInit(): void {
    this.ser.getAllEvents().subscribe(data=>{
      this.d=data;
      console.log(data);
    })
  }

}
