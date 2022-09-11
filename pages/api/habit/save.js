import { saveHabit } from '../../../services/habit.service';

const handler = async (req, res) => {
  const habit = await saveHabit();
  console.log(habit);
  res.status(200).json({ status: 'ok' });
};

export default handler;
