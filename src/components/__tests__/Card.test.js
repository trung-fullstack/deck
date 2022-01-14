import CardComponent from 'components/Card';
import { render } from 'lib/test-utils';
import Card from 'models/Card';
import { CardValue } from 'models/CardValue';
import { Suit } from 'models/Suit';

describe('Card Component', () => {
  it('renders without crashing', () => {
    const card = new Card(CardValue.Ace, Suit.Hearts);
    const { getByText } = render(<CardComponent card={card} />);
    expect(getByText('A')).toBeInTheDocument();
  });

  it('renders with right color per Suit', () => {
    const card = new Card(CardValue.Ace, Suit.Hearts);
    const { getByText } = render(<CardComponent card={card} />);
    expect(getByText('A')).toHaveClass('text-red');

    const card1 = new Card(CardValue.Jack, Suit.Clubs);
    const { getByText: getByText1 } = render(<CardComponent card={card1} />);
    expect(getByText1('J')).toHaveClass('text-black');
  });
});
