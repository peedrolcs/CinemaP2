import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateCinemaDto {
  @ApiProperty({
    example: 'Cinemark Flamboyant',
    description: 'Nome do cinema',
  })
  @IsString()
  @IsNotEmpty()
  nome!: string;

  @ApiProperty({
    example: 'Av. Dep. Jamel Cecílio, 3300 - Jardim Goiás',
    description: 'Endereço do cinema',
  })
  @IsString()
  @IsNotEmpty()
  endereco!: string;
}