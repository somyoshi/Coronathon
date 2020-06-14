import { Component, OnInit, Input } from '@angular/core';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { FormModel } from 'src/app/models/entities/form.model';

@Component({
  selector: 'app-stepper8',
  templateUrl: './stepper8.component.html',
  styleUrls: ['./stepper8.component.css']
})
export class Stepper8Component implements OnInit {
  faArrowCircleLeft = faArrowCircleLeft
  faExternalLinkAlt = faExternalLinkAlt
  formModel: FormModel;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.init();
    this.formModel.count = 8;
    this.isEntrepreneur();
  }

  init() {
    this.route.params.subscribe(params => {
      this.formModel = JSON.parse(params["formModel"]);
    });
  }

  entrepreneur:string = '/home/intro/stepper7';

  isEntrepreneur(){
    if(this.formModel.statusProfissional === "empreendedor"){
      this.entrepreneur = '/home/intro/stepper5';
    }
  }

}
