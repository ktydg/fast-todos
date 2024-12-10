import { useState } from 'react';

import { useTaskList } from '@/entities/task';
import { Button, TextField } from '@mui/material';

export const TodoAdd = () => {
  const { taskList, setTaskList } = useTaskList();
  const [taskError, setTaskError] = useState(false);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (!newTask) {
      setTaskError(true);
      return;
    }
    const id = 'id' + Math.random().toString(16).slice(2);
    setTaskList([
      ...(taskList || []),
      {
        completed: false,
        name: newTask,
        id,
      },
    ]);
    setNewTask('');
  };

  return (
    <div className='flex h-24 gap-4 p-4 pb-2 text-lg'>
      <TextField
        error={taskError}
        value={newTask}
        onChange={(event) => {
          setNewTask(event.target.value);
          setTaskError(false);
        }}
        label='Что же сделать...'
        variant='filled'
        helperText={taskError ? 'Поле пустое' : ''}
        fullWidth
      />
      <Button variant='outlined' onClick={handleAddTask}>
        Добавить
      </Button>
    </div>
  );
};
