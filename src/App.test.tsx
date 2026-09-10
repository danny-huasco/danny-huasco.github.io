import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import App from './App';
import { aboutParagraphs } from './content/homeContent';
import ContactPage from './pages/ContactPage';

describe('App', () => {
  it('renders the real home page structure and main resume entry point', () => {
    render(<App />);

    expect(screen.getByRole('link', { name: /danny huasco/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /daniel huasco miranda/i })).toBeInTheDocument();
    expect(screen.getByText(aboutParagraphs[0])).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /experience/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /skills/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /preview resume/i })).toBeInTheDocument();
  });

  it('opens the resume preview modal with both download options', () => {
    render(<App />);

    fireEvent.click(screen.getByRole('button', { name: /preview resume/i }));

    expect(screen.getByRole('heading', { name: /resume preview/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /download \.docx/i })).toHaveAttribute(
      'href',
      expect.stringContaining('Software%20Developer%20Resume%20-%20Daniel%20Huasco%20Miranda.docx')
    );
    expect(screen.getByRole('link', { name: /download \.pdf/i })).toHaveAttribute(
      'href',
      expect.stringContaining('Software Developer Resume - Daniel Huasco Miranda.pdf')
    );
    expect(screen.getByTitle('Resume preview')).toBeInTheDocument();
  });

  it('shows real-time validation on the contact form and enables submit once the fields are valid', () => {
    render(<ContactPage />);

    expect(screen.getByRole('heading', { name: /let's build something meaningful/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /send message/i })).toBeDisabled();

    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'D' } });
    expect(screen.getByText(/please enter your full name/i)).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'bad-email' } });
    expect(screen.getByText(/please enter a valid email address/i)).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText(/project details/i), { target: { value: 'too short' } });
    expect(screen.getByText(/please provide at least 20 characters/i)).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'Daniel Huasco' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'daniel@example.com' } });
    fireEvent.change(screen.getByLabelText(/phone/i), { target: { value: '+1 (555) 123-4567' } });
    fireEvent.change(screen.getByLabelText(/project details/i), {
      target: {
        value: 'I would like to discuss a project about a web app and a modern contact flow.',
      },
    });

    expect(screen.getByRole('button', { name: /send message/i })).toBeEnabled();
  });
});
