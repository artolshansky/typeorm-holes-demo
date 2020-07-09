import { Controller, Get } from '@nestjs/common';
import { InsertResult } from 'typeorm/query-builder/result/InsertResult';

import { AppService } from './app.service';
import { UserEntity } from './entities/user.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/find-relation-select')
  findRelationSelect(): Promise<UserEntity> {
    return this.appService.findRelationSelect();
  }

  @Get('/many-with-relations')
  getManyWithJoin(): Promise<UserEntity[]> {
    return this.appService.getManyWithJoin();
  }

  @Get('/builder-get-one')
  getOne(): Promise<UserEntity> {
    return this.appService.getOne();
  }

  @Get('/insert')
  insert(): Promise<InsertResult> {
    return this.appService.insert();
  }
}
