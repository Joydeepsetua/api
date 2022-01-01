module.exports = {
  test: {
    port: 80,
    saltingRounds: 10,
    JWT_SECRET: 'SECRETKEY',
    mysql_connection_limit: 20,
    mysql_connection_host: 'db_host - ex.127.0.0.1',
    mysql_user: 'db_username - ex. root',
    mysql_password: 'db_password - ex. password',
    mysql_database: 'database-name',
    mysql_port: '3306',
    email: '',
    password: '',
    client: 'frontend path ex. ../client/dist/frontend',
    mysql_timezone: '+05:30',
    private_key_path: 'test-key.json',
  },
  development: {
    port: 8000,
    saltingRounds: 10,
    JWT_SECRET: 'SECRETKEY',
    mysql_connection_limit: 20,
    mysql_connection_host: 'localhost',
    mysql_user: 'root',
    mysql_password: '',
    mysql_database: 'attandance',
    mysql_port: '3306',
    email: '',
    password: '',
    client: '../rtoclient/dist/rtoclient',
    mysql_timezone: '+05:30',
    private_key_path: 'test-key.json',
  },
  production: {
    port: 8000,
    saltingRounds: 10,
    JWT_SECRET: 'SECRETKEY',
    mysql_connection_limit: 20,
    mysql_connection_host: 'db_host - ex.127.0.0.1',
    mysql_user: 'db_username - ex. root',
    mysql_password: 'db_password - ex. password',
    mysql_database: 'database-name',
    mysql_port: '3306',
    email: '',
    password: '',
    client: 'frontend path ex. ../client/dist/frontend',
    mysql_timezone: '+05:30',
    private_key_path: 'test-key.json',
  },
}
