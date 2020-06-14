export class ProfileModel{
    name:string
    age:number;

    constructor(name:string='', age:number=0){
        this.name=name;
        this.age = age;
    }
}