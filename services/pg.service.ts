import { Pool } from 'pg';
import process from 'node:process';

export const pool = new Pool({
  host: `/run/postgresql`,
  database: 'habits',
});

process.on('beforeExit', (code) => {
  pool.end();
});

pool.on('error', (err, client) => {
  console.error('Unexpected error on idle client', err);
});
