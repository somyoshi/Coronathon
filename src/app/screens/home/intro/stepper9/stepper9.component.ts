import { Component, OnInit, Input } from '@angular/core';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { FormModel } from 'src/app/models/entities/form.model';

@Component({
  selector: 'app-stepper9',
  templateUrl: './stepper9.component.html',
  styleUrls: ['./stepper9.component.css']
})
export class Stepper9Component implements OnInit {
  faArrowCircleLeft = faArrowCircleLeft
  faExternalLinkAlt = faExternalLinkAlt
  formModel: FormModel = new FormModel();

  constructor(private route: ActivatedRoute) {
    this.formModel = new FormModel();
  }

  ngOnInit() {
    this.init();
    this.formModel.count = 9;
  }

  init() {
    this.route.params.subscribe(params => {
      this.formModel = JSON.parse(params["formModel"]);
    });
  }

}
