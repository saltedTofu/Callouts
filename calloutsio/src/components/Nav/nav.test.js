import React from 'react';
import {render, screen, cleanup} from '@testing-library/react';
import Nav from './nav';

afterEach(() => {
    cleanup();
})

it('renders without crashing', () => {
    render(<Nav />);
    expect(screen.getByTestId('containerTest')).toBeInTheDocument();
    expect(screen.getByTestId('anchorsListTest')).toBeInTheDocument();
});