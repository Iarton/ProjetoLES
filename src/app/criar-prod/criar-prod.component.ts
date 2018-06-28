import { Component, OnInit } from '@angular/core';
import { produto, PRODUTOS} from '../produtos';
import { DataService } from '../data.service';

@Component({
  selector: 'app-criar-prod',
  templateUrl: './criar-prod.component.html',
  styleUrls: ['./criar-prod.component.scss']
})
export class CriarProdComponent implements OnInit {
  cd:number;
  cc:number;
  desc:string;
  cv:number;
  qtdp:number;
  em:number;
  prod:produto;
  constructor(public data:DataService) { 
    this.prod=null;
  }

  ngOnInit() {
  }
  SalvarProduto(){
    this.prod.codigo=this.cd;
    this.prod.descricao=this.desc;
    this.prod.estoqueMin=this.em;
    this.prod.qtdeEstoque=this.qtdp;
    this.prod.valorCusto=this.cc;
    this.prod.valorVenda=this.cv;
    //POST
  }
}
