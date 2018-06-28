import { Component, OnInit } from '@angular/core';
import { PRODUTOS,produto } from '../produtos';
import{DataService }from'../data.service';

@Component({
  selector: 'app-esqtoque',
  templateUrl: './esqtoque.component.html',
  styleUrls: ['./esqtoque.component.scss']
})
export class EsqtoqueComponent implements OnInit {
  ListProd: produto[];
  constructor(
    public data:DataService
  ) { }
  id;
  qtdp;
  erro="";
  ngOnInit() {
    this.data.getProdutos().subscribe(response =>{this.ListProd=response})
  }
  addEstoque() {
    for(var f=0;f<this.ListProd.length;f++){
      if(this.ListProd[f].codigo==this.id){
          this.ListProd[f].qtdeEstoque=(this.ListProd[f].qtdeEstoque+this.qtdp);
          this.erro="Estoque de "+this.ListProd[f].descricao+ " aumentado(a)";
          break;
      }
    }
    if(f>=this.ListProd.length){
      this.erro="Codigo de Produto Invalido";
    }
    if(this.qtdp<=0 || this.qtdp==null){
      this.erro="Quantidade Invalida";
    }
  }
}
