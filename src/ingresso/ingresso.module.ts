import { Module } from '@nestjs/common';
import { IngressoController } from './ingresso.controller';
import { IngressoService } from './ingresso.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [IngressoController],
  providers: [IngressoService],
})
export class IngressoModule {}