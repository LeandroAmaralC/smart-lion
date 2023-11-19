export interface Estoque {
    id: Number;
    descricao: String;
    quantidade: Number;
    dataCadastro: Date;
    dataVencimento: Date;
    valorUnitario: Number;
    valorUnitarioEstimadoVenda: Number;
}