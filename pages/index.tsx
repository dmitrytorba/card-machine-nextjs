import Nav from '../components/nav';
import Habits, { Habit } from './habits';

const habit: Habit[] = [
  {
    id: 1,
    name: 'test',
    repeat: 1,
    board: 'test',
    enabled: true,
  },
  {
    id: 2,
    name: 'test2',
    repeat: 2,
    board: 'test',
    enabled: false,
  },
  {
    id: 3,
    name: 'test3',
    repeat: 3,
    board: 'test',
    enabled: false,
  },
];

export default function Home() {
  return (
    <>
      <Nav pageName="Card Machine" />
      <div className="container">
        <main>
          <h1 className="title">Cards</h1>
          <Habits habits={habit} />
        </main>
      </div>
    </>
  );
}
