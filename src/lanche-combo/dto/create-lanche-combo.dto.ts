export class CreateLancheComboDto {
  nome!: string;
  descricao!: string;
  valorUnitario!: number;
  quantidade!: number;
  subtotal!: number;
  pedidoId?: number;
}