import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {ItemsModule} from './items/items.module';
import { MongooseModule } from '@nestjs/mongoose';
import Config from './Config/keys'

@Module({
  imports: [
    MongooseModule.forRoot(Config.mangoURI),
    ItemsModule,

  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
