import Nav from '../components/nav';
import { getHabits } from '../services/pg.service';

type Habit = {
  label: string;
};

export default function Habits({ habits }) {
  const renderedHabits = habits.map((habit: Habit) => {
    return <h1 className="title">{habit.label}</h1>;
  });
  return (
    <>
      <Nav pageName="Habits" />
      <div className="container">
        <main>{renderedHabits}</main>
      </div>
    </>
  );
}

export async function getServerSideProps(context) {
  const habits = [{ label: 'one' }, { label: 'two' }];
  getHabits();
  return {
    props: {
      habits,
    },
  };
}
