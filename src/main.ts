import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Cinema API')
    .setDescription('API do sistema de gerenciamento de cinema')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT ?? 3001);

  console.log(
    `Servidor rodando em http://localhost:${process.env.PORT ?? 3001}`,
  );

  console.log(
    `Swagger disponível em http://localhost:${process.env.PORT ?? 3001}/api`,
  );
}

bootstrap();