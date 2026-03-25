import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event'; // Real interaction ke liye
import { describe, test, expect, vi } from 'vitest';
import { UserCard } from './UserCard';
import { Greeting } from './Greeting';

describe('UserCard Component Props Handling', () => {
  // Common Mock Data
  const mockUser = {
    name: 'Sam',
    email: 'sam@example.com'
  };

  test("should show all the elements with correct text content", () => {
    // 1. Arrange
    render(<UserCard user={mockUser} isAdmin={false} />);

    // 2. Act (Finding elements)
    const nameHeading = screen.getByTestId('heading_name');
    const emailPara = screen.getByTestId('para_email');

    // 3. Assert
    expect(nameHeading).toHaveTextContent(/sam/i); // Case insensitive check
    expect(emailPara).toHaveTextContent(mockUser.email);
  });

  test("should have correct background class based on isAdmin prop", () => {
    // Test for Admin: False (Black)
    const { rerender } = render(<UserCard user={mockUser} isAdmin={false} />);
    expect(screen.getByTestId('div')).toHaveClass('bg-black');

    // Test for Admin: True (Slate-100)
    rerender(<UserCard user={mockUser} isAdmin={true} />);
    expect(screen.getByTestId('div')).toHaveClass('bg-slate-100');
  });

  test("should call onUpdateRole when the update button is clicked", async () => {
    // Arrange
    const user = userEvent.setup(); // High-level simulation
    const updateSpy = vi.fn();
    render(<UserCard user={mockUser} isAdmin={true} onUpdateRole={updateSpy} />);

    // Act
    const updateBtn = screen.getByTestId('update_btn');
    await user.click(updateBtn);

    // Assert
    expect(updateSpy).toHaveBeenCalledOnce();
    expect(updateSpy).toHaveBeenCalledWith(mockUser.name);
  });


  test('should update message when user types and clicks button', async () => {
    // 1. Arrange (Setup the environment)
    const user = userEvent.setup(); 
    render(<Greeting />);

    const input = screen.getByPlaceholderText(/enter your name/i);
    const button = screen.getByRole('button', { name: /show greeting/i });

    // Initial state check (Message nahi hona chahiye)
    expect(screen.queryByTestId('message')).not.toBeInTheDocument();

    // 2. Act (User interactions)
    await user.type(input, 'Chandan'); // Input mein type kiya
    await user.click(button);           // Button click kiya

    // 3. Assert (Check results)
    const message = screen.getByTestId('message');
    expect(message).toBeInTheDocument();
    expect(message).toHaveTextContent('Hello, Chandan!');
  });

});