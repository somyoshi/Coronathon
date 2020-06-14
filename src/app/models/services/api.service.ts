import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Question } from '../entities/question';

@Injectable()
export class ApiService {
    constructor(private http: Http) { };

    endPoint = 'https://pokeapi.co/api/v2/pokemon/ditto';


    getQuestions() {
        return new Promise<Question[]>((resolve, reject) => {
            this.http.get(this.endPoint).subscribe(async response => {
                console.log(response.json());
                resolve([]);
            }, (err => reject(err)));
        })
    }


}