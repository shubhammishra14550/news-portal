import { render } from '@testing-library/react';
import App from '../App';

describe('App tests', () => {
  it('should render correctly', () => {
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});
