import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { HomeRoutingModule } from './home-routing.module';
import { IntroComponent } from './intro/intro.component';
import { NbStepperModule, NbCardModule } from '@nebular/theme';



@NgModule({
  declarations: [HomeComponent, IntroComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NbStepperModule,
    NbCardModule
  ],
})
export class HomeModule { }
