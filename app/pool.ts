import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: 'mysql',
  user: 'user',
  password: 'password',
  database: 'app_db',
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

export default pool;
