import SecondaryButton from 'components/SecondaryButton';
import { render, fireEvent } from 'lib/test-utils';

describe('SecondaryButton', () => {
  it('renders without crashing', () => {
    const { getByText } = render(<SecondaryButton>Test</SecondaryButton>);
    expect(getByText('Test')).toBeInTheDocument();
  });

  it('should accept onClick callback', () => {
    const onClick = jest.fn();
    const { getByText } = render(<SecondaryButton onClick={onClick}>Test</SecondaryButton>);
    fireEvent.click(getByText('Test'));

    expect(onClick).toHaveBeenCalled();
  });
});
