import { FormaService } from './../../../../services/formas.service';
import { FormaP } from './../../../../models/formaP';
import { ItemVenda } from './../../../../models/item-venda';
import { VendaService } from './../../../../services/venda.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Venda } from 'src/app/models/venda';

@Component({
  selector: 'app-cadastrar-venda',
  templateUrl: './cadastrar-venda.component.html',
  styleUrls: ['./cadastrar-venda.component.css']
})
export class CadastrarVendaComponent implements OnInit {

  cliente!:string;
  formaPagamentoId!:number;
  formaP!: FormaP[];
  itens!: ItemVenda[];
  itemVendaId!: number;

  constructor(private router: Router, 
    private vendaService: VendaService, 
    private formaService: FormaService) { }

  ngOnInit(): void {
    this.formaService.list().subscribe((formaP) => {
      this.formaP = formaP;
      //console.log(formaP);
  });
  }

  cadastrar(): void{
    let venda : Venda = {
      cliente: this.cliente,
      formaPagamentoId: this.formaPagamentoId,
      itemVendaId: this.itemVendaId,
    };
    
    this.vendaService.create(venda).subscribe((venda) =>{
      console.log(venda);
      this.router.navigate(["venda/listar"]);
    });
  }

}
