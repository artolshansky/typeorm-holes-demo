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

  /*
  * `getOne()` will select all rows and return first
  * https://github.com/typeorm/typeorm/blob/a595fedc2e159e2eb0c4c5d76bff31ac98da3df2/src/query-builder/SelectQueryBuilder.ts#L1086
  * */
  getOne(): Promise<UserEntity> {
    return this.userRepo.createQueryBuilder('user')
      .where({ username: 'breckhouse0' })
      // .limit(1) // need this
      .getOne();
  }
}
