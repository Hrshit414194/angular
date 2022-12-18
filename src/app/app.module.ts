import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { PosteventComponent } from './postevent/postevent.component';
import { HttpClientModule } from '@angular/common/http';
import { TimelineComponent } from './timeline/timeline.component';
import { AuthRoutingModule } from './auth-routing.module'
import { ViewEventComponent } from './timeline/view-event.component';
import { PostPollComponent } from './post-poll/post-poll.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { ViewpollsComponent } from './viewpolls/viewpolls.component';
import { TakeResponseComponent } from './viewpolls/take-response.component';
import { OktaAuthModule, OktaCallbackComponent } from '@okta/okta-angular';

@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,
        PosteventComponent,
        TimelineComponent,
        ViewEventComponent,
        PostPollComponent,
        ContactComponent,
        ViewpollsComponent,
        TakeResponseComponent
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        FormsModule,
        RouterModule,
        HttpClientModule,
        AuthRoutingModule,
        ReactiveFormsModule,
        OktaAuthModule
        
    ]
})
export class AppModule { }
