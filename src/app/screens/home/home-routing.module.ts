import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { IntroComponent } from './intro/intro.component';


const routes: Routes = [
  {
    path: 'home', component: HomeComponent, children: [
      {path: 'intro', component: IntroComponent}
    ]
  },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
