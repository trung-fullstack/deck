import CounterCard from 'components/CounterCard';
import { render } from 'lib/test-utils';

describe('CounterCard', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<CounterCard value={47} name="Card" namePlural="Cards" />);
    expect(getByText('47')).toBeInTheDocument();
  });

  it('should correctly show plural names', () => {
    const { getByText } = render(<CounterCard value={47} name="Card" namePlural="Cards" />);
    expect(getByText('Cards Left')).toBeInTheDocument();
  });

  it('should correctly show name not plural', () => {
    const { getByText } = render(<CounterCard value={1} name="Card" namePlural="Cards" />);
    expect(getByText('Card Left')).toBeInTheDocument();
  });
});
