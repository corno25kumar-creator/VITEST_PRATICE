import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { expect, test, vi } from 'vitest';
import Onsave from './Onsave';

test('integration: fills out form, triggers validation, and submits successfully', async () => {
  // 1. Setup
  const user = userEvent.setup();
  const mockSave = vi.fn(); // Create a spy/mock function
  render(<Onsave onSave={mockSave} />);

  const input = screen.getByLabelText(/username/i);
  const checkbox = screen.getByRole('checkbox', { name: /accept terms/i });
  const submitBtn = screen.getByRole('button', { name: /register/i });

  // 2. Test Validation (Username too short)
  await user.type(input, 'ab');
  await user.click(submitBtn);
  
  
  const errorMsg = screen.getByRole('alert');
  expect(errorMsg).toHaveTextContent(/too short/i);
  expect(mockSave).not.toHaveBeenCalled(); // Ensure form didn't submit

  // 3. Fix the input (Clear and type longer name)
  await user.clear(input);
  await user.type(input, 'JaneDoe');
  
  // 4. Toggle the checkbox
  await user.click(checkbox);
  expect(checkbox).toBeChecked();

  // 5. Final Submission
  await user.click(submitBtn);

  // 6. Assertions
  expect(mockSave).toHaveBeenCalledTimes(1);
  expect(mockSave).toHaveBeenCalledWith({
    username: 'JaneDoe',
    agreed: true
  });
});