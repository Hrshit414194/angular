import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { PostPollComponent } from './post-poll/post-poll.component';
import { PosteventComponent } from './postevent/postevent.component';
import { TimelineComponent } from './timeline/timeline.component';
import { ViewEventComponent } from './timeline/view-event.component';
import { TakeResponseComponent } from './viewpolls/take-response.component';
import { ViewpollsComponent } from './viewpolls/viewpolls.component';

const routes: Routes = [

  {path:'postevent',component:PosteventComponent},
  {path:'getevents',component:TimelineComponent},
  {path:'timeline',component:TimelineComponent},
  {path:'viewevent/:id',component:ViewEventComponent},
  {path:'postpoll',component:PostPollComponent},
  {path:'contact',component:ContactComponent},
  {path:'viewpolls',component:ViewpollsComponent},
  {path:'SubmitYourResponse/:id',component:TakeResponseComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
