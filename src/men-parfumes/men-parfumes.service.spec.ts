import { Test, TestingModule } from '@nestjs/testing';
import { MenParfumesService } from './men-parfumes.service';

describe('MenParfumesService', () => {
  let service: MenParfumesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MenParfumesService],
    }).compile();

    service = module.get<MenParfumesService>(MenParfumesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
