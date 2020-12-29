import React from 'react';
import { render } from '@testing-library/react';
import './__mocks__/matchMedia';
import { Content, Footer } from './components/'

test('renders name: Vlad Danilov', () => {
    const { getByText } = render(<Content />);
    const linkElement = getByText('Vlad Danilov');
    expect(linkElement).toBeInTheDocument();
});

test('renders title: Software Engineer', () => {
    const { getByText } = render(<Content />);
    const linkElement = getByText('Software Engineer');
    expect(linkElement).toBeInTheDocument();
});

test('renders creator: Vlad Danilov', () => {
    const { getByText } = render(<Footer />);
    const linkElement = getByText(/Vlad Danilov/i);
    expect(linkElement).toBeInTheDocument();
});

// global.matchMedia = media => ({
//     addListener: () => { },
//     removeListener: () => { },
//     matches: media === '(max-device-width: 820px) and (-webkit-min-device-pixel-ratio: 2)',
// });

// test('renders hyperlink to source', () => {
//     matchMedia('(max-device-width: 820px) and (-webkit-min-device-pixel-ratio: 2)')
//     const { getByText } = render(<Footer />);
//     const linkElement = getByText(/Source/i);
//     expect(linkElement).toBeInTheDocument();
// });