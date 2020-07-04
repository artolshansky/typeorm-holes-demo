import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  Generated,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { UserEntity } from './user.entity';

@Entity('posts')
export class PostEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @Generated('uuid')
  uuid: string;

  @Column({ type: 'varchar', length: 255 })
  title: string;

  @Column({ type: 'text' })
  content: string;

  @Column({ type: 'text', nullable: true })
  notes: string;

  @Column({ type: 'bigint', width: 13 })
  createdAt: number;

  @Column({ type: 'bigint', width: 13 })
  updatedAt: number;

  @BeforeInsert()
  onCreate(): void {
    this.createdAt = Date.now();
    this.updatedAt = Date.now();
  }

  @BeforeUpdate()
  onUpdate(): void {
    this.updatedAt = Date.now();
  }

  // RELATIONS
  @Column('int')
  userId: number;

  @ManyToOne(() => UserEntity, user => user.posts, { onDelete: 'SET NULL' })
  @JoinColumn()
  user: UserEntity;
}
