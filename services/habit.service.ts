import { pool } from './pg.service';

export async function getHabits() {
  const client = await pool.connect();
  try {
    const res = await client.query(
      'SELECT id, name, repeat, board, enabled FROM habits ORDER BY name'
    );
    return res.rows;
  } finally {
    client.release();
  }
}

export async function saveHabit({ id, name, enabled, board, frequency }) {
  const res = await pool.query(
    'UPDATE habits SET name=$1, repeat=$2, board=$3, enabled=$4 WHERE id=$5',
    [name, frequency, board, enabled, id]
  );
  return res.rows;
}
