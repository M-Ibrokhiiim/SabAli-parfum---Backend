import { Test, TestingModule } from '@nestjs/testing';
import { WomenParfumesController } from './women-parfumes.controller';
import { WomenParfumesService } from './women-parfumes.service';

describe('WomenParfumesController', () => {
  let controller: WomenParfumesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [WomenParfumesController],
      providers: [WomenParfumesService],
    }).compile();

    controller = module.get<WomenParfumesController>(WomenParfumesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
