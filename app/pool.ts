import { Pool } from 'pg';

const pool = new Pool({
  host: 'postgres',
  user: 'user',
  password: 'password',
  database: 'app_db',
});

export default pool;
