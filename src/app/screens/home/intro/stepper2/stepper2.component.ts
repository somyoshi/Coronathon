import { Component, OnInit, Input } from '@angular/core';
import { faArrowCircleLeft } from '@fortawesome/free-solid-svg-icons';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-stepper2',
  templateUrl: './stepper2.component.html',
  styleUrls: ['./stepper2.component.css']
})
export class Stepper2Component implements OnInit {
  faArrowCircleLeft = faArrowCircleLeft
  faExternalLinkAlt = faExternalLinkAlt
  @Input() model: any;

  constructor() { }

  ngOnInit(): void {
  }

}
