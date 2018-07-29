module.exports = {
  client: 'pg',
  connection: 'postgress://localhost/yokai_watch',
  searchPath: ['knex', 'public'],

  migrations: {
    directory: __dirname + '/db/migrations'
  },
  seeds: {
    directory: __dirname + '/db/seeds'
  }
}