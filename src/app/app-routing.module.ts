import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PosteventComponent } from './postevent/postevent.component';
import { TimelineComponent } from './timeline/timeline.component';

const routes: Routes = [

  {path:'postevent',component:PosteventComponent},
  {path:'getevents',component:TimelineComponent},
  {path:'timeline',component:TimelineComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
