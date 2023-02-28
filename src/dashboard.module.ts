import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { RecentComponent } from './recent/recent.component';
import { PostComponent } from './post/post.component';
import { UsersComponent } from './users/users.component';


@NgModule({
  declarations: [
    RecentComponent,
    PostComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule
  ]
})
export class DashboardModule { }
