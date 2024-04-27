 
import { render } from '@testing-library/react'; 
import PortfolioSummary from '../pages/PortfolioSummary';

test('load portfolios page', () => {
const { getByText } = render(<PortfolioSummary />);

console.log(getByText);

// const messageElement = getByText(/Hello, World!/i);
// expect(messageElement).toBeInTheDocument();
});