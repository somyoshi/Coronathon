import { Component, OnInit, Input } from '@angular/core';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { FormModel } from 'src/app/models/entities/form.model';

@Component({
  selector: 'app-stepper11',
  templateUrl: './stepper11.component.html',
  styleUrls: ['./stepper11.component.css']
})
export class Stepper11Component implements OnInit {
  faExternalLinkAlt = faExternalLinkAlt
  formModel: FormModel = new FormModel();

  constructor(private route: ActivatedRoute) {
    this.formModel = new FormModel();
  }

  ngOnInit() {
    this.init();
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