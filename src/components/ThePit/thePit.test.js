import React from 'react';
import {render, screen, cleanup} from '@testing-library/react';
import ThePit from './thePit';

afterEach(() => {
    cleanup();
})

it('renders without crashing', () => {
    render(<ThePit />);
    expect(screen.getByTestId('thePitTest')).toBeInTheDocument();
    expect(screen.getByTestId('calloutsListTest')).toBeInTheDocument();
    expect(screen.getByTestId('thePitMapTest')).toBeInTheDocument();
    expect(screen.getByTestId('mapTitleThePitTest')).toHaveTextContent('The Pit');
});