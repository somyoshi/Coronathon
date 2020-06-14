import { Component, OnInit, Input } from '@angular/core';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-stepper2',
  templateUrl: './stepper2.component.html',
  styleUrls: ['./stepper2.component.css']
})
export class Stepper2Component implements OnInit {
  faLongArrowAltLeft = faLongArrowAltLeft;
  @Input() nome: string;
  
  constructor() { }

  ngOnInit(): void {
  }

}
