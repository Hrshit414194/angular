import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EventserService } from '../eventser.service';
import { poll } from '../post-poll/poll';
import { pollDTO } from '../post-poll/pollDTO';
import { voteDTO } from '../post-poll/VoteDTO';

@Component({
  selector: 'app-take-response',
  templateUrl: './take-response.component.html',
  styleUrls: ['./take-response.component.css']
})
export class TakeResponseComponent implements OnInit {
poll:poll=new poll();
message:string;
votedto:voteDTO=new voteDTO();
  constructor(public ser:EventserService,private activatedRoute:ActivatedRoute,private http:HttpClient,private rt:Router) { }

  ngOnInit(): void {
    let idparam=this.activatedRoute.snapshot.paramMap.get('id');

this.ser.getpoll(idparam).subscribe(data=>{
  console.log(data);
this.poll=data;
})
  }
upvote(){
  this.message="your response has been recorded..ThankYou";
this.votedto.pollId=this.poll.pollId;
this.rt.navigate(['viewpolls']);

this.votedto.response="upvote";
this.ser.vote(this.votedto).subscribe(
  data=>{
    console.log(data);
  }
)
}
downvote(){
  this.message="your response has been recorded..ThankYou";
  this.rt.navigate(['viewpolls']);

  this.votedto.pollId=this.poll.pollId;
  this.votedto.response="downvote";
  this.ser.vote(this.votedto).subscribe(
    data=>{
      console.log(data);
    }
  )
}
}
