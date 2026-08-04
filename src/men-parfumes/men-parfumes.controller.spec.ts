import { Test, TestingModule } from '@nestjs/testing';
import { MenParfumesController } from './men-parfumes.controller';
import { MenParfumesService } from './men-parfumes.service';

describe('MenParfumesController', () => {
  let controller: MenParfumesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MenParfumesController],
      providers: [MenParfumesService],
    }).compile();

    controller = module.get<MenParfumesController>(MenParfumesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
