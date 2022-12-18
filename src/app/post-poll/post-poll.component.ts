import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventserService } from '../eventser.service';
import { pollDTO } from './pollDTO';

@Component({
  selector: 'app-post-poll',
  templateUrl: './post-poll.component.html',
  styleUrls: ['./post-poll.component.css']
})
export class PostPollComponent implements OnInit {
poll:pollDTO;
angForm: FormGroup;

  constructor(private service:EventserService,private fb:FormBuilder,public rt:Router ) { }

  ngOnInit(): void {
    this.angForm = this.fb.group({
      name: ['', Validators.required ],
      address: ['', Validators.required ]
   });
    this.poll=new pollDTO();
  }
post(){
  this.service.postpoll(this.poll).subscribe(
    data=>{
      console.log(data);
      this.rt.navigate(['viewpolls']);
    }
  )
}
}
