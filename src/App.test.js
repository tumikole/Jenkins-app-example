import { render , screen} from '@testing-library/react';
import App from './App';

test('renders My name is Tumi', () => {
  render(<App />);
  screen.debug()
});
