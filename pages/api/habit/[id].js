import { saveHabit } from '../../../services/habit.service';

const handler = async (req, res) => {
  if (req.method !== 'POST') {
    res.status(405).send({ message: 'Only POST requests allowed' });
    return;
  }
  const { id } = req.query;
  const { name, enabled, board, frequency } = JSON.parse(req.body);
  const habit = await saveHabit({ id, name, enabled, board, frequency });
  console.log(habit);
  res.status(200).json({ status: 'ok' });
};

export default handler;
