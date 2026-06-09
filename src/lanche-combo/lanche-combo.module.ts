import { Module } from '@nestjs/common';
import { LancheComboController } from './lanche-combo.controller';
import { LancheComboService } from './lanche-combo.service';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [LancheComboController],
  providers: [LancheComboService],
})
export class LancheComboModule {}