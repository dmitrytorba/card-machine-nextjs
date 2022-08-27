import { Pool } from 'pg';

const pool = new Pool({
  host: `/run/postgresql`,
  database: 'habits',
});

export async function getHabits() {
  const res = await pool.query('SELECT id, name, repeat, board, enabled FROM habits');

  console.log(res.rows);
  // TODO: figure this out
  // pool.end();
}
