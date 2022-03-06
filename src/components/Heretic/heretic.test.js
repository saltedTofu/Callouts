import React from 'react';
import {render, screen, cleanup} from '@testing-library/react';
import Heretic from './heretic';

afterEach(() => {
    cleanup();
})

it('renders without crashing', () => {
    render(<Heretic />);
    expect(screen.getByTestId('hereticTest')).toBeInTheDocument();
    expect(screen.getByTestId('calloutsListTest')).toBeInTheDocument();
    expect(screen.getByTestId('hereticMapTest')).toBeInTheDocument();
    expect(screen.getByTestId('mapTitleHereticTest')).toHaveTextContent('Heretic');
});