import { Component, OnInit } from '@angular/core';
import { FormModel } from 'src/app/models/entities/form.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  formModel: FormModel = new FormModel();

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.init();

  }

  init() {
    this.route.params.subscribe(params => {
      this.formModel = JSON.parse(params["formModel"]);
    });
  }

}