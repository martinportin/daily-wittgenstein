import { render, screen } from '@testing-library/react';
import Home from './page';

describe('home page', () => {
  test('should render a paragraph with project name', () => {
    render(<Home />);
    expect(screen.getByText('Daily Wittgenstein')).toBeInTheDocument();
  });
});
