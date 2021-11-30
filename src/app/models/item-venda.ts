import { Produto } from "./produto";

export interface ItemVenda {
    itemVendaId?: number;
    id?: number;
    produto: Produto;
    produtoId: number;
    quantidade: number;
    preco: number;
    carrinhoId: string;
    criadoEm?: Date;
}
