import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders the data entry form', () => {
  render(<App />);
  expect(screen.getByText(/data entry form/i)).toBeInTheDocument();
});

test('shows entered details after submit', () => {
  render(<App />);
  fireEvent.change(screen.getByLabelText('Email'), { target: { value: 'a@b.com' } });
  fireEvent.change(screen.getByLabelText('Province'), { target: { value: 'Ontario' } });
  fireEvent.click(screen.getByText('Submit'));
  expect(screen.getByText('a@b.com')).toBeInTheDocument();
  expect(screen.getByText('Full Name:')).toBeInTheDocument();
});
