import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TrendParfumesService } from './trend-parfumes.service';
import { CreateTrendParfumeDto } from './dto/create-trend-parfume.dto';
import { UpdateTrendParfumeDto } from './dto/update-trend-parfume.dto';

@Controller('trend-parfumes')
export class TrendParfumesController {
  constructor(private readonly trendParfumesService: TrendParfumesService) {}

  @Get('/all')
  findAll() {
    return this.trendParfumesService.findAll();
  }
}
