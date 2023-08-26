import { Test, TestingModule } from '@nestjs/testing';
import { AvailsService } from './avails.service';

describe('AvailsService', () => {
  let service: AvailsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AvailsService],
    }).compile();

    service = module.get<AvailsService>(AvailsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
