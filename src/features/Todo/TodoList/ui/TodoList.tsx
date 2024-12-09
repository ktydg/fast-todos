import type { ITask } from '@entities/task';

import { CardContent, Checkbox } from '@mui/material';

import { useTaskList } from '@entities/task';
import { cn } from '@shared/lib';

export const TodoList = ({ filter }: { filter: string }) => {
  const { taskList, setTaskList } = useTaskList();

  const handleChecked = (id: string) => {
    setTaskList(
      taskList?.map((task) => {
        if (task.id === id) {
          return { ...task, completed: !task.completed };
        }
        return task;
      }),
    );
  };

  const filteredTaskList = taskList?.filter((task) => {
    if (filter === 'all') {
      return true;
    } else if (filter === 'active' && !task.completed) {
      return true;
    } else if (filter === 'completed' && task.completed) {
      return true;
    }
    return false;
  });

  return (
    <CardContent className='flex h-[400px] max-h-[400px] flex-col gap-2 overflow-scroll p-4'>
      <div className='flex flex-col'>
        {filteredTaskList?.map((task: ITask) => (
          <div
            key={task.id}
            className='flex h-16 items-center justify-start gap-2 border-b-2 last:border-b-0'
          >
            <Checkbox
              checked={task.completed}
              onClick={() => handleChecked(task.id)}
              color='success'
              className='flex shrink-0'
              size='large'
            />
            <label
              className={cn(
                'flex h-full grow overflow-scroll py-3 text-2xl',
                task.completed ? 'text-gray-500 line-through' : undefined,
              )}
            >
              {task.name}
            </label>
          </div>
        ))}
      </div>
    </CardContent>
  );
};
