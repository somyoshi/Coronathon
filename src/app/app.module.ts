import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './screens/home/home.module';
import { ApiService } from './models/services/api.service';
import { Http, HttpModule } from '@angular/http';
import { APP_BASE_HREF } from '@angular/common';
import { DashboardModule } from './screens/dashboard/dashboard.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DashboardModule,
    HomeModule,
    HttpModule
  ],
  providers: [ApiService, { provide: APP_BASE_HREF, useValue: '/' }],
  bootstrap: [AppComponent]
})
export class AppModule { }
