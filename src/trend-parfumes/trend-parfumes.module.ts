import { Module } from '@nestjs/common';
import { TrendParfumesService } from './trend-parfumes.service';
import { TrendParfumesController } from './trend-parfumes.controller';

@Module({
  controllers: [TrendParfumesController],
  providers: [TrendParfumesService],
})
export class TrendParfumesModule {}
