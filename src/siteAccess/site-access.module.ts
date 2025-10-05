import { Module } from '@nestjs/common';
import { SiteAccessService } from './site-access.service';
import { SiteAccessController } from './site-access.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { siteAccessSchema } from './schemas/siteAccess.schema';

@Module({
  imports:[
    MongooseModule.forFeature([{
      name: 'siteAccess', schema: siteAccessSchema
    }])
  ],
  controllers: [SiteAccessController],
  providers: [SiteAccessService],
})
export class SiteAccessModule {}
