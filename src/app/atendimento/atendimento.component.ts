import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { produto, PRODUTOS} from '../produtos';

@Component({
  selector: 'app-atendimento',
  templateUrl: './atendimento.component.html',
  styleUrls: ['./atendimento.component.scss']
})
export class AtendimentoComponent implements OnInit {
  carrinho = [];
  ListProd: produto[];
  lsqt=[];
  error;
  total;
  itens:number;
  id: number;
  qtdp: number;
  constructor(    public data:DataService  ) { }
  ngOnInit() {
    this.total = 0;
    this.error = "";
    this.itens=0;
    this.data.getProdutos().subscribe(response =>{this.ListProd=response})
    
  }
  addItem() {
    if (this.qtdp == 0 || this.qtdp == null) {
      this.error = "Quantidade Invalida";
    } else {
      for (var i = 0; i < 9; i++) {
        var flg=0;
        if (this.ListProd[i].codigo == this.id) {
          
          for(var f = 0;f<this.itens;f++){
            if(this.carrinho[f].codigo==this.ListProd[i].codigo){
                this.carrinho[f]=this.ListProd[i];
                flg=1;
            }
          }
          if(flg==0){
            this.carrinho.push(this.ListProd[i]);
            this.itens++;
          }
          this.total = this.total + this.qtdp * this.ListProd[i].valorVenda;
          break;
        }
      }
      if (i == 3) {
        this.error = "Produto não encontrado";
      } else {
        this.error = "";
      }
    }
  }
}
