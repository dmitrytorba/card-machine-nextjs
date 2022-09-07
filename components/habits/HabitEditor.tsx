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

  const saveHabit = () => {
    console.log('hahaha');
  };

  return (
    <Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <div>Id: {habit.id}</div>
      <div>Repeat: {habit.repeat}</div>
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography>Off</Typography>
        <Switch
          label="Enabled"
          checked={enabled}
          onChange={(event) => {
            setEnabled(event.target.checked);
          }}
          inputProps={{ 'aria-label': 'controlled' }}
        />
        <Typography>On</Typography>
      </Stack>

      <FormControl fullWidth>
        <TextField
          label="Habit Name"
          fullWidth
          value={name}
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
      </FormControl>
      <FormControl fullWidth>
        <InputLabel id="board-label">Board</InputLabel>
        <Select
          labelId="board-label"
          value={board}
          label="Board"
          onChange={(event) => {
            setBoard(event.target.value as string);
          }}
        >
          <MenuItem value={'TODO'}>TODO</MenuItem>
          <MenuItem value={'House'}>House</MenuItem>
        </Select>
      </FormControl>
      <FormControl>
        <InputLabel id="board-label">Repeat Every</InputLabel>
        <Select
          labelId="board-label"
          value={board}
          label="Board"
          onChange={(event) => {
            setBoard(event.target.value as string);
          }}
        >
          <MenuItem value={'days'}>days</MenuItem>
          <MenuItem value={'weeks'}>weeks</MenuItem>
          <MenuItem value={'months'}>months</MenuItem>
        </Select>
      </FormControl>
      <Button variant="contained" onClick={saveHabit}>
        Save
      </Button>
    </Box>
  );
}
