import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';

describe('App', () => {
  it('renders the home page navigation and main page content', () => {
    render(<App />);

    expect(screen.getByRole('link', { name: /danny huasco/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /web dev and student/i })).toBeInTheDocument();
  });
});
