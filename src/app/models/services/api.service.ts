import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { QuestionModel } from '../entities/question.model';

@Injectable()
export class ApiService {
    constructor(private http: Http) { };

    endPoint = 'https://pokeapi.co/api/v2/pokemon/ditto';


    getQuestions() {
        return new Promise<QuestionModel[]>((resolve, reject) => {
            this.http.get(this.endPoint).subscribe(async response => {
                console.log(response.json());
                resolve([]);
            }, (err => reject(err)));
        })
    }


}