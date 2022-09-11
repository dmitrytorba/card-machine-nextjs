import Nav from '../components/nav';
import { getHabits } from '../services/habit.service';
import styled from 'styled-components';
import { useState } from 'react';
import HabitEditor from '../components/habits/HabitEditor';

type Habit = {
  id: number;
  name: string;
  repeat: string;
  board: string;
  enabled: boolean;
};

const HabitSummary = styled.li`
  padding: 20px;
  list-style: none;
  margin: 5px;
  border: 1px solid white;
  border-radius: 10px;
  width: 100%;
  cursor: pointer;
  justify-content: space-between;
  display: flex;
`;

const EditHabit = styled(HabitSummary)`
  cursor: default;
  flex-direction: column;
  background: white;
  color: black;
`;

export default function Habits({ habits }) {
  const renderedHabits = habits.map((habit: Habit, index) => {
    const [editMode, setEditMode] = useState(false);

    const lastItem = habits[index - 1];

    return editMode ? (
      <EditHabit>
        <HabitEditor habit={habit} />
      </EditHabit>
    ) : (
      <HabitSummary key={`habit-${index}`} onClick={() => setEditMode(!editMode)}>
        <div>{habit.name}</div>
        <div>{habit.repeat}</div>
      </HabitSummary>
    );
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
  const habits = await getHabits();

  habits.sort((a, b) => {
    if (!a.enabled) {
      return 1;
    }
    if (!b.enabled) {
      return -1;
    }
    return a.repeat - b.repeat;
  });
  return {
    props: {
      habits,
    },
  };
}
