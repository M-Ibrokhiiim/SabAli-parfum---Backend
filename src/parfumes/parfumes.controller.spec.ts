import { Test, TestingModule } from '@nestjs/testing';
import { ParfumesController } from './parfumes.controller';
import { ParfumesService } from './parfumes.service';

describe('ParfumesController', () => {
  let controller: ParfumesController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ParfumesController],
      providers: [ParfumesService],
    }).compile();

    controller = module.get<ParfumesController>(ParfumesController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
