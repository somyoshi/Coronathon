import { Component, OnInit, Input } from '@angular/core';
import { faLongArrowAltLeft } from '@fortawesome/free-solid-svg-icons';
import { ActivatedRoute } from '@angular/router';
import { Profile } from 'src/app/models/entities/profile';
import { ApiService } from 'src/app/models/services/api.service';

@Component({
  selector: 'app-stepper2',
  templateUrl: './stepper2.component.html',
  styleUrls: ['./stepper2.component.css']
})
export class Stepper2Component implements OnInit {
  faLongArrowAltLeft = faLongArrowAltLeft;
  profile: Profile;

  constructor(private route: ActivatedRoute, private apiService:ApiService) {

  }

  ngOnInit() {
    this.init();
  }

  init() {
    this.route.params.subscribe(params => {
      this.profile = JSON.parse(params["profile"]);
    });
  }

  testeApi() {
    this.apiService.getQuestions();
  }

}
