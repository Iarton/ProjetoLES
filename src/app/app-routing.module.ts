import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MenuComponent} from './menu/menu.component';
import { AtendimentoComponent} from './atendimento/atendimento.component';
import { EsqtoqueComponent} from './esqtoque/esqtoque.component';
import {CriarProdComponent} from './criar-prod/criar-prod.component';
import {FinalComponent} from './final/final.component';


const routes: Routes = [
  {
    path: '',
    component: MenuComponent
  },
  {
    path: 'atendimento',
    component: AtendimentoComponent
  },
  {
    path: 'estoque',
    component: EsqtoqueComponent
  },
  {
    path: 'criprod',
    component: CriarProdComponent
  },
  {
    path: 'final',
    component: FinalComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
