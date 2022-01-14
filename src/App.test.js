import { render, screen } from 'lib/test-utils';
import App from './App';

describe('App', () => {
  it('renders without crashing', () => {
    render(<App />);
    expect(screen.getByTestId('App')).toBeInTheDocument();
  });
});
