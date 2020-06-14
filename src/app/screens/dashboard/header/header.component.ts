import { Component, OnInit } from '@angular/core';
import {  faBars, faAlignRight, faAlignLeft } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faBars = faAlignLeft

  constructor() { }

  ngOnInit(): void {
  }

}
