import { useState } from 'react';

import { useTaskList } from '@/entities/task';
import { TodoAdd } from '@/features/Todo/TodoAdd';
import { TodoControls } from '@/features/Todo/TodoControls';
import { TodoList } from '@/features/Todo/TodoList';
import { Card } from '@mui/material';

export const TodoCard = () => {
  const { taskList } = useTaskList();
  const [filter, setFilter] = useState('all');

  return (
    <Card sx={{ width: '700px' }}>
      <TodoAdd />
      <TodoList filter={filter} />
      <TodoControls
        amountCompleted={
          taskList?.filter((task) => !task.completed).length ?? 0
        }
        filter={filter}
        setFilter={setFilter}
      />
    </Card>
  );
};
