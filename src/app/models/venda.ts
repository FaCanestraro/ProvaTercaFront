import { ItemVenda } from './item-venda';
import { FormaP } from './formaP';


export interface Venda{
    id?:number;
    cliente: string;
    formaPagamentoId: number;
    formaPag?: FormaP[];
    itemVendaId: number;
    itemVenda?: ItemVenda[];
}