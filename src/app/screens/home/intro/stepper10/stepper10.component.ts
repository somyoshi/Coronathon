import { Component, OnInit, Input } from '@angular/core';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { FormModel } from 'src/app/models/entities/form.model';

@Component({
  selector: 'app-stepper10',
  templateUrl: './stepper10.component.html',
  styleUrls: ['./stepper10.component.css']
})
export class Stepper10Component implements OnInit {
  faExternalLinkAlt = faExternalLinkAlt;
  faArrowCircleLeft = faArrowCircleLeft;
  formModel: FormModel = new FormModel();

  constructor(private route: ActivatedRoute) {
    this.formModel = new FormModel();
  }

  ngOnInit() {
    this.init();
    this.formModel.count = 10;
  }

  init() {
    this.route.params.subscribe(params => {
      this.formModel = JSON.parse(params["formModel"]);
    });
  }

  teste(){
    console.log(this.formModel);
  }

}