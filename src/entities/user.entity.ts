import { BeforeInsert, Column, Entity, Generated, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { PostEntity } from './post.entity';

@Entity('users')
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: 'varchar', length: '255', nullable: false })
  @Generated('uuid')
  uuid: string;

  @Column({ type: 'varchar', length: 255, nullable: false })
  username: string;

  @Column({ type: 'varchar', length: 255, unique: true })
  email: string;

  @Column({ type: 'bigint', width: 13 })
  createdAt: number;

  @BeforeInsert()
  onCreate(): void {
    this.createdAt = Date.now();
  }

  @OneToMany(() => PostEntity, post => post.user, { onDelete: 'CASCADE' })
  posts: PostEntity[];
}
