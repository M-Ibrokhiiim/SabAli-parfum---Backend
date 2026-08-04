import { Test, TestingModule } from '@nestjs/testing';
import { WomenParfumesService } from './women-parfumes.service';

describe('WomenParfumesService', () => {
  let service: WomenParfumesService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [WomenParfumesService],
    }).compile();

    service = module.get<WomenParfumesService>(WomenParfumesService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
