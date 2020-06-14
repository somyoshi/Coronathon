import { Component, OnInit, Input } from '@angular/core';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { FormModel } from 'src/app/models/entities/form.model';

@Component({
  selector: 'app-stepper6',
  templateUrl: './stepper6.component.html',
  styleUrls: ['./stepper6.component.css']
})
export class Stepper6Component implements OnInit {
  faArrowCircleLeft = faArrowCircleLeft
  faExternalLinkAlt = faExternalLinkAlt
  formModel: FormModel;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.init();
    this.formModel.count = 6;
  }

  init() {
    this.route.params.subscribe(params => {
      this.formModel = JSON.parse(params["formModel"]);
    });
  }

}
