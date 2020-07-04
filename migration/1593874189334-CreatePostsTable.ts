import { MigrationInterface, QueryRunner, Table, TableColumn, TableForeignKey } from 'typeorm';

export class CreatePostsTable1593874189334 implements MigrationInterface {
  private readonly table = 'posts';

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(new Table({
      name: this.table,
      columns: [
        new TableColumn({
          name: 'id',
          type: 'int',
          isPrimary: true,
          isGenerated: true,
          generationStrategy: 'increment',
        }),
        new TableColumn({
          name: 'uuid',
          type: 'varchar',
          length: '255',
          isGenerated: true,
          generationStrategy: 'uuid',
        }),
        new TableColumn({
          name: 'title',
          type: 'varchar',
          length: '255',
        }),
        new TableColumn({
          name: 'content',
          type: 'text'
        }),
        new TableColumn({
          name: 'notes',
          type: 'text',
          isNullable: true
        }),
        new TableColumn({
          name: 'createdAt',
          type: 'bigint',
          length: '13',
        }),
        new TableColumn({
          name: 'updatedAt',
          type: 'bigint',
          length: '13',
        }),
        new TableColumn({
          name: 'userId',
          type: 'int',
          isNullable: false
        })
      ],
      foreignKeys: [
        new TableForeignKey({
          name: 'post_id_user_id',
          columnNames: ['userId'],
          referencedTableName: 'users',
          referencedColumnNames: ['id']
        })
      ]
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.table);
  }
}
