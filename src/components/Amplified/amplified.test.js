import React from 'react';
import {render, screen, cleanup} from '@testing-library/react';
import Amplified from './amplified';

afterEach(() => {
    cleanup();
})

it('renders without crashing', () => {
    render(<Amplified />);
    expect(screen.getByTestId('amplifiedTest')).toBeInTheDocument();
    expect(screen.getByTestId('calloutsListTest')).toBeInTheDocument();
    expect(screen.getByTestId('amplifiedMapTest')).toBeInTheDocument();
    expect(screen.getByTestId('mapTitleAmplifiedTest')).toHaveTextContent('Amplified');
});