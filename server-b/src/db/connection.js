import pkg from 'pg';
const { Pool } = pkg;

const pool = new Pool({
  user: 'user',
  host: 'localhost', // Dockerissa voi olla myös 'db', jos ajetaan docker-compose kautta
  database: 'adoptiondb',
  password: 'password',
  port: 5432,
});

export default pool;
