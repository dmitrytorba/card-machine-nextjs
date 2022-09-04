import Nav from '../components/nav';
import { getHabits } from '../services/pg.service';
import styled from 'styled-components';
import { useState } from 'react';

export type Habit = {
  id: number;
  name: string;
  repeat: number;
  board: string;
  enabled: boolean;
};

export default function Habits({ habits }: { habits: Habit[] }) {
  const [editMode, setEditMode] = useState(false);

  return (
    <>
      <Nav pageName="Habits" />
      <div className="container">
        <main>
          {habits?.map((habit: Habit, index) => {
            return (
              <HabitSummary key={`habit-${index}`} onClick={() => setEditMode(!editMode)}>
                <div>{habit?.name}</div>
                <div>{habit?.repeat}</div>
                {editMode ? (
                  <>
                    <div>{habit?.enabled ? '✔️' : '❌'}</div>
                    <div>{habit?.id}</div>
                    <div>{habit?.board}</div>
                  </>
                ) : null}
              </HabitSummary>
            );
          })}
        </main>
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const habits: Habit[] = await getHabits();

  habits.sort((a: Habit, b: Habit) => a?.repeat - b?.repeat);

  return {
    props: {
      habits,
    },
  };
}

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
