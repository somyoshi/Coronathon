export class QuestionModel{
    id:string;
    title:string;
    answer:string;

    constructor(id:string='', title:string='', answer:string){
        this.id = id;
        this.title =title;
        this.answer = answer;

    }
}