import { Component, OnInit, Input } from '@angular/core';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { FormModel } from 'src/app/models/entities/form.model';

@Component({
  selector: 'app-stepper5',
  templateUrl: './stepper5.component.html',
  styleUrls: ['./stepper5.component.css']
})
export class Stepper5Component implements OnInit {
  faArrowCircleLeft = faArrowCircleLeft
  faExternalLinkAlt = faExternalLinkAlt
  formModel: FormModel;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.init();
    this.isEntrepreneur();
    this.formModel.count = 5;
  }

  init() {
    this.route.params.subscribe(params => {
      console.log(JSON.parse(params["formModel"]));
      this.formModel = JSON.parse(params["formModel"]);
    });
  }

  entrepreneur:string = '/home/intro/stepper8';

  isEntrepreneur(){
    console.log(this.formModel.statusProfissional == "empreendedor")
    if(this.formModel.statusProfissional == "empreendedor"){
      this.entrepreneur = '/home/intro/stepper6';
    }
  }
}
