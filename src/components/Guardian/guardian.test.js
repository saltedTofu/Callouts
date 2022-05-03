import React from 'react';
import {render, screen, cleanup} from '@testing-library/react';
import Guardian from './guardian';

afterEach(() => {
    cleanup();
})

it('renders without crashing', () => {
    render(<Guardian />);
    expect(screen.getByTestId('guardianTest')).toBeInTheDocument();
    expect(screen.getByTestId('calloutsListTest')).toBeInTheDocument();
    expect(screen.getByTestId('guardianMapTest')).toBeInTheDocument();
    expect(screen.getByTestId('mapTitleGuardianTest')).toHaveTextContent('Guardian');
});