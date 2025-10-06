import { Test, TestingModule } from '@nestjs/testing';
import { SiteAccessController } from './site-access.controller';
import { SiteAccessService } from './site-access.service';

describe('SiteAccessController', () => {
  let controller: SiteAccessController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SiteAccessController],
      providers: [SiteAccessService],
    }).compile();

    controller = module.get<SiteAccessController>(SiteAccessController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
