import { useCallback } from 'react';
import { useCookies } from 'react-cookie';
import type { ITask } from './type';

export const useTaskList = () => {
  const [{ taskList }, setCookie] = useCookies<
    'taskList',
    {
      taskList?: ITask[];
    }
    >(['taskList']);
  
  const setTaskList = useCallback((list: ITask[] | null | undefined) => {
    setCookie('taskList', list);
  }, [setCookie])
  
  return { taskList, setTaskList };
}