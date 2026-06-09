import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateSessaoDto } from './dto/create-sessao.dto';
import { UpdateSessaoDto } from './dto/update-sessao.dto';

@Injectable()
export class SessaoService {
  constructor(private prisma: PrismaService) {}

  create(createSessaoDto: CreateSessaoDto) {
    return this.prisma.sessao.create({
      data: createSessaoDto,
    });
  }

  findAll() {
    return this.prisma.sessao.findMany({
      include: {
        filme: true,
        sala: true,
        cinema: true,
      },
    });
  }

  findOne(id: number) {
    return this.prisma.sessao.findUnique({
      where: { id },
      include: {
        filme: true,
        sala: true,
        cinema: true,
      },
    });
  }

  update(id: number, updateSessaoDto: UpdateSessaoDto) {
    return this.prisma.sessao.update({
      where: { id },
      data: updateSessaoDto,
    });
  }

  remove(id: number) {
    return this.prisma.sessao.delete({
      where: { id },
    });
  }
}