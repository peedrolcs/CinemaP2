export class CreateFilmeDto {
  titulo!: string;
  sinopse!: string;
  classificacao!: string;
  duracao!: string;
  elenco!: string;
  genero!: string;
  dataInicioExibicao!: Date;
  dataFinalExibicao!: Date;
  cinemaId!: number;
}