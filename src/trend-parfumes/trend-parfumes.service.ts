import { Injectable } from '@nestjs/common';
import { CreateTrendParfumeDto } from './dto/create-trend-parfume.dto';
import { UpdateTrendParfumeDto } from './dto/update-trend-parfume.dto';

@Injectable()
export class TrendParfumesService {
  create(createTrendParfumeDto: CreateTrendParfumeDto) {
    return 'This action adds a new trendParfume';
  }

  findAll() {
    return `There are all trend modules`;
  }
}
