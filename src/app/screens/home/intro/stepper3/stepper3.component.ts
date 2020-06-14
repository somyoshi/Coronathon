import { Component, OnInit, Input } from '@angular/core';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-stepper3',
  templateUrl: './stepper3.component.html',
  styleUrls: ['./stepper3.component.css']
})
export class Stepper3Component implements OnInit {
  faExternalLinkAlt = faExternalLinkAlt
  @Input() model: any;

  constructor() { }

  ngOnInit(): void {
  }

}