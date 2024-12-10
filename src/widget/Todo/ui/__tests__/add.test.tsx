import { render } from 'vitest-browser-react';

import { userEvent } from '@vitest/browser/context';
import { expect, test } from 'vitest';

import { TodoCard } from '../TodoCard';

test('Testing TodoCard', async () => {
  const { getByText, getByLabelText, getByTestId } = render(<TodoCard />);
  const input = getByLabelText('Что же сделать...');
  const amount = getByTestId('todo-amount');

  await userEvent.fill(input, 'teeest');
  await expect.element(input).toHaveValue('teeest');

  await userEvent.click(getByText('Добавить'));
  await expect.element(input).toHaveValue('');

  const list = getByTestId('todo-list');
  await expect.element(list.getByText('teeest')).toBeVisible();
  await expect.element(amount).toHaveTextContent(/.*\b1\b.*/);

  await userEvent.fill(input, 'test 2');
  await userEvent.click(getByText('Добавить'));
  await expect.element(amount).toHaveTextContent(/.*\b2\b.*/);
});
