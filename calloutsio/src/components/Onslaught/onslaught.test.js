import React from 'react';
import {render, screen, cleanup} from '@testing-library/react';
import Onslaught from './onslaught';

afterEach(() => {
    cleanup();
})

it('renders without crashing', () => {
    render(<Onslaught />);
    expect(screen.getByTestId('onslaughtTest')).toBeInTheDocument();
    expect(screen.getByTestId('calloutsListTest')).toBeInTheDocument();
    expect(screen.getByTestId('onslaughtMapTest')).toBeInTheDocument();
    expect(screen.getByTestId('mapTitleOnslaughtTest')).toHaveTextContent('Onslaught');
});