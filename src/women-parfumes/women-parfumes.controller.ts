import { Controller, Get } from '@nestjs/common';
import { WomenParfumesService } from './women-parfumes.service';

@Controller('women-parfumes')
export class WomenParfumesController {
  constructor(private readonly womenParfumesService: WomenParfumesService) {}

  @Get('/all')
  findAll() {
    return this.womenParfumesService.findAll();
  }

 }
