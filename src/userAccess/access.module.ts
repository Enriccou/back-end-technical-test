import { Module } from '@nestjs/common';
import { AccessService } from './access.service';
import { AccessController } from './access.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AccessSchema } from './schemas/access.schema'

@Module({
  imports: [
    MongooseModule.forFeature([{
      name: 'Access', schema: AccessSchema
    }])
  ],
  controllers: [AccessController],
  providers: [AccessService],
})
export class AccessModule {}
