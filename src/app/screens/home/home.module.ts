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
import { Stepper3Component } from './intro/stepper3/stepper3.component';
import { ResultsComponent } from './intro/results/results.component';
import { Stepper4Component } from './intro/stepper4/stepper4.component';
import { Stepper5Component } from './intro/stepper5/stepper5.component';
import { Stepper6Component } from './intro/stepper6/stepper6.component';
import { Stepper7Component } from './intro/stepper7/stepper7.component';
import { Stepper8Component } from './intro/stepper8/stepper8.component';
import { Stepper9Component } from './intro/stepper9/stepper9.component';
import { Stepper10Component } from './intro/stepper10/stepper10.component';
import { Stepper11Component } from './intro/stepper11/stepper11.component';


@NgModule({
  declarations: [HomeComponent, IntroComponent, Stepper1Component, Stepper2Component, Stepper3Component, ResultsComponent, Stepper4Component, Stepper5Component, Stepper6Component, Stepper7Component, Stepper8Component, Stepper9Component, Stepper10Component, Stepper11Component],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    HomeRoutingModule,
    FontAwesomeModule
  ],
})
export class HomeModule { }
