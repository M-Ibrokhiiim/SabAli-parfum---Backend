import { Test, TestingModule } from '@nestjs/testing';
import { TrendParfumesService } from './trend-parfumes.service';

describe('TrendParfumesService', () => {
  let service: TrendParfumesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TrendParfumesService],
    }).compile();

    service = module.get<TrendParfumesService>(TrendParfumesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
