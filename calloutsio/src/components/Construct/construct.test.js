import React from 'react';
import {render, screen, cleanup} from '@testing-library/react';
import Construct from './construct';

afterEach(() => {
    cleanup();
})

it('renders without crashing', () => {
    render(<Construct />);
    expect(screen.getByTestId('constructTest')).toBeInTheDocument();
    expect(screen.getByTestId('calloutsListTest')).toBeInTheDocument();
    expect(screen.getByTestId('constructMapTest')).toBeInTheDocument();
    expect(screen.getByTestId('mapTitleConstructTest')).toHaveTextContent('Construct');
});