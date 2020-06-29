module.exports = {
  type: 'mysql',
  host: process.env.DB_HOST || '127.0.0.1',
  port: process.env.DB_PORT || 3306,
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
