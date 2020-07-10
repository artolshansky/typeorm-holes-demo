import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class ChangeColumn1594304839090 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    // AVOID THIS METHOD
    /*await queryRunner.changeColumn(
      'posts',
      'notes',
      new TableColumn({
        name: 'notes',
        type: 'varchar',
        length: '255'
      })
    );*/

    // USE THIS
    /*await queryRunner.query(`ALTER TABLE posts CHANGE COLUMN notes notes varchar(255);`);*/
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
