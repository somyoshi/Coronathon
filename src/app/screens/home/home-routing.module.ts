import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { IntroComponent } from './intro/intro.component';
import { Stepper1Component } from './intro/stepper1/stepper1.component';
import { Stepper2Component } from './intro/stepper2/stepper2.component';
import { Stepper3Component } from './intro/stepper3/stepper3.component';
import { Stepper4Component } from './intro/stepper4/stepper4.component';
import { Stepper5Component } from './intro/stepper5/stepper5.component';
import { Stepper6Component } from './intro/stepper6/stepper6.component';
import { Stepper7Component } from './intro/stepper7/stepper7.component';
import { Stepper8Component } from './intro/stepper8/stepper8.component';
import { Stepper9Component } from './intro/stepper9/stepper9.component';
import { Stepper10Component } from './intro/stepper10/stepper10.component';
import { Stepper11Component } from './intro/stepper11/stepper11.component';
import { ResultsComponent } from './intro/results/results.component';


const routes: Routes = [
  {
    path: 'home', component: HomeComponent, children: [
      {
        path: 'intro', component: IntroComponent, children: [
          { path: 'stepper1', component: Stepper1Component },
          { path: 'stepper2', component: Stepper2Component },
          { path: 'stepper3', component: Stepper3Component },
          { path: 'stepper4', component: Stepper4Component },
          { path: 'stepper5', component: Stepper5Component },
          { path: 'stepper6', component: Stepper6Component },
          { path: 'stepper7', component: Stepper7Component },
          { path: 'stepper8', component: Stepper8Component },
          { path: 'stepper9', component: Stepper9Component },
          { path: 'stepper10', component: Stepper10Component },
          { path: 'stepper11', component: Stepper11Component },
          { path: 'results', component: ResultsComponent }
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
