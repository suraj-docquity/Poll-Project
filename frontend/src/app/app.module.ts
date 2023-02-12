import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AdminComponent } from './admin/admin.component';
import { PollComponent } from './poll/poll.component';
import { NavbarComponent } from './navbar/navbar.component';
import { RouterModule } from '@angular/router';
import { CreatePollComponent } from './create-poll/create-poll.component';
import { PollListComponent } from './poll-list/poll-list.component';

@NgModule({
  declarations: [
    AppComponent,
    AdminComponent,
    PollComponent,
    NavbarComponent,
    CreatePollComponent,
    PollListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      {path: 'admin',component: AdminComponent,title:"Admin"},
      {path: 'poll',component: PollComponent,title:"Poll"},
      {path: 'create-poll',component: CreatePollComponent,title:"Create Poll"},
      {path: 'poll-list',component: PollListComponent,title:"Poll List"},
      {path: '', redirectTo: '/poll-list', pathMatch: 'full'},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
