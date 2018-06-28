export class produto{
    codigo:number
    descricao:string
    valorCusto:number
    valorVenda:number
    qtdeEstoque:number
    estoqueMin:number
}

export const PRODUTOS: produto[]=[
{codigo:1,descricao:"Caneta",valorCusto:2.2,valorVenda:2.5,estoqueMin:2,qtdeEstoque:7},
{codigo:2,descricao:"Lapis",valorCusto:1.2,valorVenda:1.5,estoqueMin:10,qtdeEstoque:22},
{codigo:3,descricao:"Papel",valorCusto:4.2,valorVenda:5,estoqueMin:1,qtdeEstoque:50}

];