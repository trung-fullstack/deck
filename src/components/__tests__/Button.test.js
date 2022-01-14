import Button from 'components/Button';
import { render, fireEvent } from 'lib/test-utils';

describe('Button', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<Button>Test</Button>);
    expect(getByText('Test')).toBeInTheDocument();
  });

  it('should accept onClick callback', () => {
    const onClick = jest.fn();
    const { getByText } = render(<Button onClick={onClick}>Test</Button>);
    fireEvent.click(getByText('Test'));

    expect(onClick).toHaveBeenCalled();
  });
});
