import { Test, TestingModule } from '@nestjs/testing';
import { TrendParfumesController } from './trend-parfumes.controller';
import { TrendParfumesService } from './trend-parfumes.service';

describe('TrendParfumesController', () => {
  let controller: TrendParfumesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TrendParfumesController],
      providers: [TrendParfumesService],
    }).compile();

    controller = module.get<TrendParfumesController>(TrendParfumesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
