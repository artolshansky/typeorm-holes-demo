import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { UserEntity } from './entities/user.entity';

@Injectable()
export class AppService {
  constructor(@InjectRepository(UserEntity)
              private readonly userRepo: Repository<UserEntity>) {}

  /*
  * adding `post.id` to select occurs 'posts.id column was not found in the UserEntity' exception
  * */
  findRelationSelect(): Promise<UserEntity> {
    return this.userRepo.findOne({
      where: { username: 'breckhouse0' },
      relations: ['posts'],
      select: ['id', 'username'] // ('posts.id' as keyof UserEntity)
    });
  }

  /*
  * `select` from relation before `innerJoinAndSelect` will not apply `select` for this join
  * */
  getManyWithJoin(): Promise<UserEntity[]> {
    return this.userRepo.createQueryBuilder('user')
      // .select(['user.id', 'user.username', 'post.id', 'post.title']) // will not select all from this select array
      .innerJoinAndSelect('user.posts', 'post')
      // .select(['user.id', 'user.username', 'post.id', 'post.title']) // will select all from this select array
      .getMany();
  }
}
