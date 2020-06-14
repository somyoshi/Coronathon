import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { IntroComponent } from './intro/intro.component';
import { Stepper1Component } from './intro/stepper1/stepper1.component';
import { Stepper2Component } from './intro/stepper2/stepper2.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [HomeComponent, IntroComponent, Stepper1Component, Stepper2Component],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HomeRoutingModule,
    FontAwesomeModule
  ],
})
export class HomeModule { }
