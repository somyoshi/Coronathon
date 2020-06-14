import { Component, OnInit } from '@angular/core';
import { faExternalLinkAlt } from '@fortawesome/free-solid-svg-icons';
import { Profile } from 'src/app/models/entities/profile';

@Component({
  selector: 'app-stepper1',
  templateUrl: './stepper1.component.html',
  styleUrls: ['./stepper1.component.css']
})
export class Stepper1Component implements OnInit {
  faExternalLinkAlt = faExternalLinkAlt

  profile:Profile = new Profile();

  constructor() { }

  ngOnInit(): void {
  }

}
