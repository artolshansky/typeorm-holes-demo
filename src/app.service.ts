import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserEntity } from './entities/user.entity';

@Injectable()
export class AppService {
  constructor(@InjectRepository(UserEntity)
              private readonly userRepo: Repository<UserEntity>) {}

  getHello(): Promise<UserEntity> {
    return this.userRepo.findOne({
      where: { username: 'breckhouse0' },
      relations: ['posts'],
      select: ['id', 'username']
    });
  }
}
