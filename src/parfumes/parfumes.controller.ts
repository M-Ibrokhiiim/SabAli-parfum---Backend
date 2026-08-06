import { Controller, Get } from '@nestjs/common';
import { ParfumesService, Product } from './parfumes.service';

@Controller('parfumes')
export class ParfumesController {
  constructor(private readonly parfumesService: ParfumesService) {}

  // Mens -> endpoint: parfumes/men
  @Get('men')
  getMenParfumes(): Product[] {
    return this.parfumesService.getMenParfumes();
  }

  // Womens -> endpoint: parfumes/women
  @Get('women')
  getWomenParfumes(): Product[] {
    return this.parfumesService.getWomenParfumes();
  }

  // Men trend -> endpoint: parfumes/trend/men
  @Get('trend/men')
  getMenTrendParfumes(): Product[] {
    return this.parfumesService.getMenTrendParfumes();
  }

  // Women trend -> endpoint: parfumes/trend/women
  @Get('trend/women')
  getWomenTrendParfumes(): Product[] {
    return this.parfumesService.getWomenTrendParfumes();
  }
}
