import { Module } from '@nestjs/common';
import { WomenParfumesService } from './women-parfumes.service';
import { WomenParfumesController } from './women-parfumes.controller';

@Module({
  controllers: [WomenParfumesController],
  providers: [WomenParfumesService],
})
export class WomenParfumesModule {}
