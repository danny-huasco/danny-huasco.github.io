import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';
import { aboutParagraphs, resumeDocument, resumePdfDocument } from './content/homeContent';
import '@testing-library/jest-dom';

describe('App', () => {
  it('renders the real home page structure and main resume entry point', () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: /daniel huasco miranda/i })).toBeInTheDocument();
    expect(screen.getByText(aboutParagraphs[0])).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /experience/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /skills/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /preview resume/i })).toBeInTheDocument();
    expect(decodeURIComponent(resumeDocument)).toContain('Software Engineer - Daniel Huasco Miranda.docx');
    expect(decodeURIComponent(resumePdfDocument)).toContain('Software Engineer - Daniel Huasco Miranda.pdf');
  });

});
