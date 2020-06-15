import { Component, OnInit, Input } from '@angular/core';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { FormModel } from 'src/app/models/entities/form.model';

@Component({
  selector: 'app-stepper7',
  templateUrl: './stepper7.component.html',
  styleUrls: ['./stepper7.component.css']
})
export class Stepper7Component implements OnInit {
  faArrowCircleLeft = faArrowCircleLeft
  faExternalLinkAlt = faExternalLinkAlt
  formModel: FormModel = new FormModel();

  constructor(private route: ActivatedRoute) {
    this.formModel = new FormModel();
  }

  ngOnInit() {
    this.init();
    this.formModel.count = 7;
  }

  init() {
    this.route.params.subscribe(params => {
      this.formModel = JSON.parse(params["formModel"]);
    });
  }

}
