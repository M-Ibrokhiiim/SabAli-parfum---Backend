import { Test, TestingModule } from '@nestjs/testing';
import { ParfumesService } from './parfumes.service';

describe('ParfumesService', () => {
  let service: ParfumesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ParfumesService],
    }).compile();

    service = module.get<ParfumesService>(ParfumesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
