import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ENTITIES } from './entities';

@Module({
  imports: [TypeOrmModule.forRoot(), TypeOrmModule.forFeature(ENTITIES)],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
