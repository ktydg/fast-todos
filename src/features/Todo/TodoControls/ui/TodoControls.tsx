import {
  Button,
  CardActions,
  ToggleButton,
  ToggleButtonGroup,
} from '@mui/material';

import { useTaskList } from '@entities/task';
import { pluralize } from '@shared/lib';

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
      <div className='p-2'>
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
        <ToggleButton value='all'>Все</ToggleButton>
        <ToggleButton value='active'>Активные</ToggleButton>
        <ToggleButton value='completed'>Выполненные</ToggleButton>
      </ToggleButtonGroup>
      <Button size='medium' onClick={handleClearCompleted}>
        Удалить выполненные
      </Button>
    </CardActions>
  );
};
