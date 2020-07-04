import { MigrationInterface, QueryRunner, Table, TableColumn, TableIndex } from 'typeorm';

export class CreateUsersTable1593870473773 implements MigrationInterface {
  private readonly table = 'users';

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
          name: 'username',
          type: 'varchar',
          length: '255',
        }),
        new TableColumn({
          name: 'email',
          type: 'varchar',
          length: '255',
        }),
        new TableColumn({
          name: 'createdAt',
          type: 'bigint',
          length: '13',
        }),
      ],
      indices: [
        new TableIndex({
          name: 'IDX_user_email',
          columnNames: ['email'],
          isUnique: true,
        })
      ]
    }));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(this.table);
  }
}
