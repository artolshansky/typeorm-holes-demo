import { TypeOrmModuleOptions } from '@nestjs/typeorm/dist/interfaces/typeorm-options.interface';

export const DB_CONFIG: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.DB_HOST || '127.0.0.1',
  port: parseInt(process.env.DB_PORT) || 3306,
  username: process.env.DB_USER || 'root',
  password: process.env.DB_PWD || '',
  database: process.env.DB_NAME || 'demo',
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  migrationsTableName: 'migration_table',
  migrations: ['dist/migration/*.js'],
  migrationsRun: false,
  synchronize: false,
  logging: true,
  cli: {
    migrationsDir: 'migration'
  }
};
