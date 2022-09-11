import { pool } from './pg.service';

export async function getHabits() {
  const client = await pool.connect();
  try {
    const res = await client.query('SELECT id, name, repeat, board, enabled FROM habits');
    return res.rows;
  } finally {
    client.release();
  }
}

export async function saveHabit() {
  const res = await pool.query('SELECT id, name, repeat, board, enabled FROM habits');
  return res.rows;
}
