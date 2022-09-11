import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { styled } from '@mui/material/styles';
import { useState } from 'react';
import Switch from '@mui/material/Switch';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Button from '@mui/material/Button';

export default function HabitEditor({ habit }) {
  const [name, setName] = useState(habit.name);
  const [enabled, setEnabled] = useState(habit.enabled);
  const [board, setBoard] = useState(habit.board);
  const [period, setPeriod] = useState('days');
  const [frequency, setFrequency] = useState(habit.repeat);

  const saveHabit = async () => {
    const resp = await fetch('/api/habit/save', { method: 'POST' });

    if (!resp.ok) {
      console.error(resp);
    }
  };

  return (
    <Stack direction="column" spacing={1} alignItems="strech">
      <div>Id: {habit.id}</div>
      <Stack direction="row" spacing={1} alignItems="center">
        <FormControl fullWidth>
          <TextField
            label="Habit Name"
            fullWidth
            value={name}
            onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
              setName(event.target.value);
            }}
          />
        </FormControl>
        <Typography>Off</Typography>
        <Switch
          checked={enabled}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setEnabled(event.target.checked);
          }}
        />
        <Typography>On</Typography>
      </Stack>
      <FormControl fullWidth>
        <InputLabel id="board-label">Board</InputLabel>
        <Select
          labelId="board-label"
          value={board}
          label="Board"
          onChange={(event: SelectChangeEvent) => {
            setBoard(event.target.value as string);
          }}
        >
          <MenuItem value={'TODO'}>TODO</MenuItem>
          <MenuItem value={'House'}>House</MenuItem>
        </Select>
      </FormControl>
      <Stack direction="row" spacing={1} alignItems="center">
        <TextField
          id="outlined-number"
          label="Repeat Every"
          type="number"
          value={frequency}
          InputLabelProps={{
            shrink: true,
          }}
        />
        <Select
          labelId="board-label"
          value={period}
          label="Board"
          onChange={(event: SelectChangeEvent) => {
            setPeriod(event.target.value as string);
          }}
        >
          <MenuItem value={'days'}>days</MenuItem>
          <MenuItem value={'weeks'}>weeks</MenuItem>
          <MenuItem value={'months'}>months</MenuItem>
        </Select>
      </Stack>
      <Button variant="contained" onClick={saveHabit}>
        Save
      </Button>
    </Stack>
  );
}
