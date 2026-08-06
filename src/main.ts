import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import * as path from 'path';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  
  app.useStaticAssets(path.join(process.cwd(), 'astorage'), {
    prefix: '/astorage/',
  });

  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
