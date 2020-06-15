export class FormModel{
    count:number;

    nome:string;
    sobreNome:string;
    email:string;
    nickName:string;
    idade:number;
    escolaridade:string;
    statusProfissional:string;
    jaEmpreendeu:boolean;
    mercadoEmpreendeu:string;
    habilidadesSuficientes:boolean;
    porqueEmpreender:string;
    mercadoEmpreenderia:string;
    vantagensEmpreender:string;

    constructor(count:number = 1, nickName:string='', jaEmpreendeu:boolean = false, nome:string='', sobreNome:string='', email:string='', idade:number=0, escolaridade:string='medio', mercadoEmpreendeu:string='', statusProfissional:string='desempregado', habilidadesSuficientes:boolean=false, porqueEmpreender:string='', mercadoEmpreenderia:string='', vantagensEmpreender:string=''){
        this.count = count;
        this.nickName = nickName;
        this.jaEmpreendeu = jaEmpreendeu;
        this.nome = nome;
        this.sobreNome = sobreNome;
        this.email = email;
        this.idade = idade;
        this.escolaridade = escolaridade;
        this.mercadoEmpreendeu = mercadoEmpreendeu;
        this.statusProfissional = statusProfissional;
        this.habilidadesSuficientes = habilidadesSuficientes;
        this.porqueEmpreender = porqueEmpreender;
        this.mercadoEmpreenderia = mercadoEmpreenderia;
        this.vantagensEmpreender = vantagensEmpreender;
    }
}