import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AccessModule } from './userAccess/access.module';
import { SiteAccessModule } from './siteAccess/site-access.module';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (ConfigService: ConfigService) => ({
        uri: ConfigService.get<string>('DATABASE_URL'),
      }),
      inject: [ConfigService],
    }),
    UsersModule,
    AccessModule,
    SiteAccessModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
