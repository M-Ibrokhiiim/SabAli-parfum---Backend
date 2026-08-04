import { Module } from '@nestjs/common';
import { MenParfumesService } from './men-parfumes.service';
import { MenParfumesController } from './men-parfumes.controller';

@Module({
  controllers: [MenParfumesController],
  providers: [MenParfumesService],
})
export class MenParfumesModule {}
