import { Test, TestingModule } from '@nestjs/testing';
import { SiteAccessService } from './site-access.service';

describe('SiteAccessService', () => {
  let service: SiteAccessService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SiteAccessService],
    }).compile();

    service = module.get<SiteAccessService>(SiteAccessService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
