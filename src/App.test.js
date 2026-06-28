// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders EthicNode title', () => {
    render(<App />);
    const titleElement = screen.getByText(/EthicNode/i);
    expect(titleElement).toBeInTheDocument();
});
