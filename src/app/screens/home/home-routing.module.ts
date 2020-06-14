import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { IntroComponent } from './intro/intro.component';
import { Stepper1Component } from './intro/stepper1/stepper1.component';
import { Stepper2Component } from './intro/stepper2/stepper2.component';
import { Stepper3Component } from './intro/stepper3/stepper3.component';


const routes: Routes = [
  {
    path: 'home', component: HomeComponent, children: [
      {
        path: 'intro', component: IntroComponent, children: [
          { path: 'stepper1', component: Stepper1Component },
          { path: 'stepper2', component: Stepper2Component },
          { path: 'stepper3', component: Stepper3Component }
        ]
      }
    ]
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
