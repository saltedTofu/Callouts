import React from 'react';
import {render, screen, cleanup} from '@testing-library/react';
import Narrows from './narrows';

afterEach(() => {
    cleanup();
})

it('renders without crashing', () => {
    render(<Narrows />);
    expect(screen.getByTestId('narrowsTest')).toBeInTheDocument();
    expect(screen.getByTestId('calloutsListTest')).toBeInTheDocument();
    expect(screen.getByTestId('narrowsMapTest')).toBeInTheDocument();
    expect(screen.getByTestId('mapTitleNarrowsTest')).toHaveTextContent('Narrows');
});