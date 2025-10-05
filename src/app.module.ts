import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { MongooseModule } from '@nestjs/mongoose';
import { AccessModule } from './userAccess/access.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://enriccou:whz2025dev@cluster0.3mw4lbl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
    ),
    UsersModule,
    AccessModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
