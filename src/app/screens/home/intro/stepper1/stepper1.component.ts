import { Component, OnInit } from '@angular/core';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { FormModel } from 'src/app/models/entities/form.model';

@Component({
  selector: 'app-stepper1',
  templateUrl: './stepper1.component.html',
  styleUrls: ['./stepper1.component.css']
})
export class Stepper1Component implements OnInit {
  faExternalLinkAlt = faExternalLinkAlt

  formModel:FormModel = new FormModel();

  constructor() { 
    this.formModel = new FormModel();
  }

  ngOnInit(): void {
  	this.formModel.count = 1;
  }

}
