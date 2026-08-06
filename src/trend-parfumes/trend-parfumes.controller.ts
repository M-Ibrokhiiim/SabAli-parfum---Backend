import { Controller, Get } from '@nestjs/common';
import { TrendParfumesService } from './trend-parfumes.service';

@Controller('trend-parfumes')
export class TrendParfumesController {
  constructor(private readonly trendParfumesService: TrendParfumesService) {}

  @Get('/all')
  findAll() {
    return this.trendParfumesService.findAll();
  }
}
