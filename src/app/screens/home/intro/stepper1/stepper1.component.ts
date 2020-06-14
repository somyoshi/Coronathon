import { Component, OnInit } from '@angular/core';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-stepper1',
  templateUrl: './stepper1.component.html',
  styleUrls: ['./stepper1.component.css']
})
export class Stepper1Component implements OnInit {
  faExternalLinkAlt = faExternalLinkAlt

  nome=""

  constructor() { }

  ngOnInit(): void {
  }

}
