import { Injectable } from '@nestjs/common';
import { CreateMenParfumeDto } from './dto/create-men-parfume.dto';
import { UpdateMenParfumeDto } from './dto/update-men-parfume.dto';

@Injectable()
export class MenParfumesService {
  create(_createMenParfumeDto: CreateMenParfumeDto) {
    return 'This action adds a new menParfume';
  }

  findAll() {
    return `There are all products!`;
  }

}
