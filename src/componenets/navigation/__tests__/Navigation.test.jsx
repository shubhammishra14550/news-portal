import { render } from '@testing-library/react';
import Navigation from '../Navigation';

describe('Navigation component', () => {
    it('should renders correctly', () => {
        const { asFragment } = render(<Navigation />);
        expect(asFragment()).toMatchSnapshot();
    })
})
