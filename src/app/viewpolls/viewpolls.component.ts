import { Component, OnInit } from '@angular/core';
import { EventserService } from '../eventser.service';
import { poll } from '../post-poll/poll';

@Component({
  selector: 'app-viewpolls',
  templateUrl: './viewpolls.component.html',
  styleUrls: ['./viewpolls.component.css']
})
export class ViewpollsComponent implements OnInit {
polls:poll[];
  constructor(private ser:EventserService) { }

  ngOnInit(): void {
    this.getAllpolls();
  }
getAllpolls(){
  this.ser.getAllPolls().subscribe(
    data=>{
      console.log(data);
this.polls=data;
    }
  )
}
}
