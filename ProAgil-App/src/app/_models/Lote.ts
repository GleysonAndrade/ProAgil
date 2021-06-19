export interface Lote {
    id:number;
    nome:string;
    preco:number;
    quantidade:number;
    dataInicio?:Date;
    dataFim?:Date;
    eventoId:number;
}
