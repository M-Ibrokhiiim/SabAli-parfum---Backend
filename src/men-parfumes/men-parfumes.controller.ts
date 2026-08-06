import { Controller, Get } from '@nestjs/common';
import { MenParfumesService } from './men-parfumes.service';

@Controller('men-parfumes')
export class MenParfumesController {
  constructor(private readonly menParfumesService: MenParfumesService) {}

  @Get('/all')
  findAll() {
    return this.menParfumesService.findAll();
  }
}
