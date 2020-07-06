import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserEntity } from './entities/user.entity';

@Injectable()
export class AppService {
  constructor(@InjectRepository(UserEntity)
              private readonly userRepo: Repository<UserEntity>) {}

  /*
  * adding 'post.id' to select occurs 'posts.id column was not found in the UserEntity' exception
  * */
  findRelationSelect(): Promise<UserEntity> {
    return this.userRepo.findOne({
      where: { username: 'breckhouse0' },
      relations: ['posts'],
      select: ['id', 'username'] // ('posts.id' as keyof UserEntity)
    });
  }
}
