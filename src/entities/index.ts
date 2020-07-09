import { UserEntity } from './user.entity';
import { PostEntity } from './post.entity';

export * from './user.entity';
export * from './post.entity';

export const ENTITIES = [ UserEntity, PostEntity ];
