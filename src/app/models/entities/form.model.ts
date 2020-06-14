export class FormModel{
    nickName:string;
    jaEmpreendeu:boolean;
    nome:string;
    sobreNome:string;
    email:string;

    constructor(nickName:string='', jaEmpreendeu:boolean = false, nome:string='', sobreNome:string='', email:string=''){
        this.nickName = nickName;
        this.jaEmpreendeu = jaEmpreendeu;
        this.nome = nome;
        this.sobreNome = sobreNome;
        this.email = email;
    }
}