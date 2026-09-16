import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { afterEach, describe, expect, it, vi } from 'vitest';
import ContactPage from './ContactPage';

describe('ContactPage', () => {
  afterEach(() => {
    vi.unstubAllEnvs();
    vi.restoreAllMocks();
  });

  it('validates fields while typing and enables submit only for valid input', () => {
    render(<ContactPage />);

    expect(screen.getByRole('button', { name: /send message/i })).toBeDisabled();

    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'D' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'bad-email' } });
    fireEvent.change(screen.getByLabelText(/project details/i), { target: { value: 'too short' } });

    expect(screen.getByText(/please enter your full name/i)).toBeInTheDocument();
    expect(screen.getByText(/please enter a valid email address/i)).toBeInTheDocument();
    expect(screen.getByText(/please provide at least 20 characters/i)).toBeInTheDocument();

    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'Daniel Huasco' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'DANIEL@example.com' } });
    fireEvent.change(screen.getByLabelText(/phone/i), { target: { value: '+1 (555) 123-4567' } });
    fireEvent.change(screen.getByLabelText(/project details/i), {
      target: { value: 'I would like to discuss a web application project with you.' },
    });

    expect(screen.getByRole('button', { name: /send message/i })).toBeEnabled();
  });

  it('posts sanitized valid form data and resets after success', async () => {
    vi.stubEnv('VITE_CONTACT_API_URL', 'https://api.example.test/contact');
    const fetchMock = vi.spyOn(globalThis, 'fetch').mockResolvedValue(new Response(null, { status: 204 }));

    render(<ContactPage />);
    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: '  Daniel Huasco  ' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: ' DANIEL@example.com ' } });
    fireEvent.change(screen.getByLabelText(/phone/i), { target: { value: ' +1 555 123 4567 ' } });
    fireEvent.change(screen.getByLabelText(/project details/i), {
      target: { value: '  I would like to discuss a web application project with you.  ' },
    });
    fireEvent.click(screen.getByRole('button', { name: /send message/i }));

    await waitFor(() => expect(fetchMock).toHaveBeenCalledWith(
      'https://api.example.test/contact',
      expect.objectContaining({
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: 'Daniel Huasco',
          email: 'daniel@example.com',
          phone: '+1 555 123 4567',
          message: 'I would like to discuss a web application project with you.',
        }),
      })
    ));

    expect(await screen.findByRole('status')).toHaveTextContent(/sent successfully/i);
    expect(screen.getByLabelText(/name/i)).toHaveValue('');
  });

  it('reports a failed backend response without crashing', async () => {
    vi.stubEnv('VITE_CONTACT_API_URL', 'https://api.example.test/contact');
    vi.spyOn(globalThis, 'fetch').mockResolvedValue(new Response(null, { status: 500 }));

    render(<ContactPage />);
    fireEvent.change(screen.getByLabelText(/name/i), { target: { value: 'Daniel Huasco' } });
    fireEvent.change(screen.getByLabelText(/email/i), { target: { value: 'daniel@example.com' } });
    fireEvent.change(screen.getByLabelText(/project details/i), {
      target: { value: 'I would like to discuss a web application project with you.' },
    });
    fireEvent.click(screen.getByRole('button', { name: /send message/i }));

    expect(await screen.findByRole('status')).toHaveTextContent(/request failed with status 500/i);
  });
});