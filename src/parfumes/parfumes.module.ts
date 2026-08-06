import { Module } from '@nestjs/common';
import { ParfumesController } from './parfumes.controller';
import { ParfumesService } from './parfumes.service';

@Module({
  controllers: [ParfumesController],
  providers: [ParfumesService],
})
export class ParfumesModule {}
