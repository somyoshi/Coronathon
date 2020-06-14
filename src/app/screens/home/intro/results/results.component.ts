import { Component, OnInit } from '@angular/core';
import { FormModel } from 'src/app/models/entities/form.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrls: ['./results.component.css']
})
export class ResultsComponent implements OnInit {
  formModel: FormModel;
  loading: boolean = true;

  constructor(private route: ActivatedRoute) {

  }

  ngOnInit() {
    this.init();
    this.sleep();

  }

  sleep() {
    setTimeout(() => {
      this.loading = false;
    }, 6000);
  }

  init() {
    this.route.params.subscribe(params => {
      this.formModel = JSON.parse(params["formModel"]);
    });
  }

}
