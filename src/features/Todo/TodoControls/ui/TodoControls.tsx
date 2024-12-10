import { useTaskList } from '@/entities/task';
import { pluralize } from '@/shared/lib';
import {
  Button,
  CardActions,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';

export const TodoControls = ({
  amountCompleted,
  filter,
  setFilter,
}: {
  amountCompleted: number;
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const { taskList, setTaskList } = useTaskList();

  const handleFilter = (
    _event: React.MouseEvent<HTMLElement>,
    newFilter: string | null,
  ) => {
    if (newFilter !== null) {
      setFilter(newFilter);
    }
  };
  const handleClearCompleted = () => {
    setTaskList(taskList?.filter((task) => !task.completed));
  };

  return (
    <CardActions className='flex items-center justify-between border-t-2'>
      <div className='p-2' data-testid='todo-amount'>
        {amountCompleted +
          pluralize(amountCompleted, ' задача ', ' задачи ', ' задач ')}
        осталось
      </div>
      <ToggleButtonGroup
        value={filter}
        exclusive
        onChange={handleFilter}
        aria-label='text alignment'
        size='small'
      >
        <ToggleButton value='all' data-testid='todo-filter-all'>Все</ToggleButton>
        <ToggleButton value='active' data-testid='todo-filter-active'>Активные</ToggleButton>
        <ToggleButton value='completed' data-testid='todo-filter-completed'>Выполненные</ToggleButton>
      </ToggleButtonGroup>
      <Button size='medium' onClick={handleClearCompleted} data-testid='todo-clear-completed'>
        Удалить выполненные
      </Button>
    </CardActions>
  );
};
