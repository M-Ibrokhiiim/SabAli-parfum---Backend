import { Injectable } from '@nestjs/common';
import { CreateTrendParfumeDto } from './dto/create-trend-parfume.dto';

@Injectable()
export class TrendParfumesService {
  create(_createTrendParfumeDto: CreateTrendParfumeDto) {
    return 'This action adds a new trendParfume';
  }

  findAll() {
    return `There are all trend modules`;
  }
}
