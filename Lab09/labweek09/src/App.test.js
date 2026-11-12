import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the values passed as props', () => {
  render(<App title="Welcome" studentId="101475983" />);
  expect(screen.getByText('Welcome')).toBeInTheDocument();
  expect(screen.getByText('101475983')).toBeInTheDocument();
});
