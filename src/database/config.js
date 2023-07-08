module.exports = {
    dialect: 'postgres',
    username: 'postgres',
    password: 'Luc97ari12',
    host: 'empresalocacao.c9bhyroeylsd.us-east-1.rds.amazonaws.com',
    port: 5432,
    database: 'empresa',
    logging: false,
    dialectOptions: {
        ssl: {
          require: true, // This will help you. But you will see nwe error
          rejectUnauthorized: false // This line will fix new error
        }
      },
};
