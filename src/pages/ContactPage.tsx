import { type ChangeEvent, type FormEvent, useMemo, useState } from 'react';
import ContactInfo from '../components/ContactInfo';

type ContactFormState = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

type ContactFormErrors = Partial<Record<keyof ContactFormState, string>>;
type ContactField = keyof ContactFormState;

const initialFormState: ContactFormState = {
  name: '',
  email: '',
  phone: '',
  message: '',
};

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^[+]?[(\d\s().-]{7,20}$/;
const contactApiUrl = import.meta.env.VITE_CONTACT_API_URL?.trim();

const normalizeString = (value: string) => value.trim();

const validateField = (field: ContactField, value: string): string => {
  const trimmedValue = normalizeString(value);

  switch (field) {
    case 'name':
      if (trimmedValue.length < 2) {
        return 'Please enter your full name.';
      }
      return '';
    case 'email':
      if (!trimmedValue) {
        return 'Email is required.';
      }
      if (!emailPattern.test(trimmedValue)) {
        return 'Please enter a valid email address.';
      }
      return '';
    case 'phone':
      if (!trimmedValue) {
        return '';
      }
      if (!phonePattern.test(trimmedValue)) {
        return 'Please enter a valid phone number.';
      }
      return '';
    case 'message':
      if (trimmedValue.length < 20) {
        return 'Please provide at least 20 characters so I can understand your request.';
      }
      return '';
    default:
      return '';
  }
};

const validateForm = (formData: ContactFormState): ContactFormErrors => {
  const nextErrors: ContactFormErrors = {};

  (Object.keys(initialFormState) as ContactField[]).forEach((field) => {
    const fieldError = validateField(field, formData[field]);

    if (fieldError) {
      nextErrors[field] = fieldError;
    }
  });

  return nextErrors;
};

const sanitizeFormData = (formData: ContactFormState): ContactFormState => ({
  name: normalizeString(formData.name),
  email: normalizeString(formData.email).toLowerCase(),
  phone: normalizeString(formData.phone),
  message: normalizeString(formData.message),
});

function ContactPage() {
  const [formData, setFormData] = useState<ContactFormState>(initialFormState);
  const [errors, setErrors] = useState<ContactFormErrors>({});
  const [touched, setTouched] = useState<Partial<Record<ContactField, boolean>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitState, setSubmitState] = useState<'idle' | 'success' | 'error'>('idle');
  const [submitMessage, setSubmitMessage] = useState('');

  const formErrors = useMemo(() => validateForm(formData), [formData]);
  const isFormValid = Object.keys(formErrors).length === 0;

  const handleChange = (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = event.target;
    const currentField = name as ContactField;

    const nextFormData = {
      ...formData,
      [currentField]: value,
    };

    setFormData(nextFormData);
    setTouched((currentTouched) => ({
      ...currentTouched,
      [currentField]: true,
    }));
    setErrors(validateForm(nextFormData));
    setSubmitState('idle');
    setSubmitMessage('');
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const nextErrors = validateForm(formData);
    setErrors(nextErrors);
    setTouched({
      name: true,
      email: true,
      phone: true,
      message: true,
    });

    if (Object.keys(nextErrors).length > 0) {
      setSubmitState('error');
      setSubmitMessage('Please correct the highlighted fields before sending your message.');
      return;
    }

    if (!contactApiUrl) {
      setSubmitState('error');
      setSubmitMessage('Contact submissions are not configured yet. Set VITE_CONTACT_API_URL in your environment.');
      return;
    }

    setIsSubmitting(true);
    setSubmitState('idle');
    setSubmitMessage('');

    try {
      const sanitizedFormData = sanitizeFormData(formData);
      const response = await fetch(contactApiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(sanitizedFormData),
      });

      if (!response.ok) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      setSubmitState('success');
      setSubmitMessage('Thanks for reaching out. Your message has been sent successfully.');
      setFormData(initialFormState);
      setErrors({});
      setTouched({});
    } catch (error) {
      setSubmitState('error');
      setSubmitMessage(
        error instanceof Error
          ? `Something went wrong while sending your message: ${error.message}`
          : 'Something went wrong while sending your message.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const getFieldError = (field: ContactField) => (touched[field] ? errors[field] : undefined);

  return (
    <div className="mx-auto max-w-6xl">
      <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8 lg:p-10">
        <div className="mb-8">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">Contact</p>
          <h1 className="mt-2 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Let&apos;s build something meaningful.
          </h1>
          <p className="mt-3 max-w-2xl text-base leading-7 text-slate-600">
            I&apos;m always interested in thoughtful product ideas, freelance opportunities, and collaboration with teams
            that care about quality and user experience.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="space-y-6">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <h2 className="text-xl font-semibold text-slate-900">Get in touch</h2>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                Share a few details about your project, timeline, or idea, and I&apos;ll follow up as soon as I can.
              </p>
            </div>

            <ContactInfo />
          </div>

          <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <div>
              <label htmlFor="name" className="mb-2 block text-sm font-medium text-slate-700">
                Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleChange}
                aria-invalid={Boolean(getFieldError('name'))}
                required
                className={`w-full rounded-xl border bg-white px-3 py-2.5 text-slate-900 outline-none transition focus:ring-2 ${
                  getFieldError('name')
                    ? 'border-rose-300 focus:border-rose-500 focus:ring-rose-200'
                    : 'border-slate-300 focus:border-sky-500 focus:ring-sky-200'
                }`}
              />
              {getFieldError('name') ? (
                <p className="mt-2 text-sm text-rose-600">{getFieldError('name')}</p>
              ) : null}
            </div>

            <div>
              <label htmlFor="email" className="mb-2 block text-sm font-medium text-slate-700">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                aria-invalid={Boolean(getFieldError('email'))}
                required
                className={`w-full rounded-xl border bg-white px-3 py-2.5 text-slate-900 outline-none transition focus:ring-2 ${
                  getFieldError('email')
                    ? 'border-rose-300 focus:border-rose-500 focus:ring-rose-200'
                    : 'border-slate-300 focus:border-sky-500 focus:ring-sky-200'
                }`}
              />
              {getFieldError('email') ? (
                <p className="mt-2 text-sm text-rose-600">{getFieldError('email')}</p>
              ) : null}
            </div>

            <div>
              <label htmlFor="phone" className="mb-2 block text-sm font-medium text-slate-700">
                Phone
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                aria-invalid={Boolean(getFieldError('phone'))}
                className={`w-full rounded-xl border bg-white px-3 py-2.5 text-slate-900 outline-none transition focus:ring-2 ${
                  getFieldError('phone')
                    ? 'border-rose-300 focus:border-rose-500 focus:ring-rose-200'
                    : 'border-slate-300 focus:border-sky-500 focus:ring-sky-200'
                }`}
              />
              {getFieldError('phone') ? (
                <p className="mt-2 text-sm text-rose-600">{getFieldError('phone')}</p>
              ) : null}
            </div>

            <div>
              <label htmlFor="message" className="mb-2 block text-sm font-medium text-slate-700">
                Project details
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                value={formData.message}
                onChange={handleChange}
                aria-invalid={Boolean(getFieldError('message'))}
                required
                className={`w-full rounded-xl border bg-white px-3 py-2.5 text-slate-900 outline-none transition focus:ring-2 ${
                  getFieldError('message')
                    ? 'border-rose-300 focus:border-rose-500 focus:ring-rose-200'
                    : 'border-slate-300 focus:border-sky-500 focus:ring-sky-200'
                }`}
              />
              {getFieldError('message') ? (
                <p className="mt-2 text-sm text-rose-600">{getFieldError('message')}</p>
              ) : null}
            </div>

            {submitMessage ? (
              <p
                role="status"
                aria-live="polite"
                className={`text-sm ${submitState === 'success' ? 'text-emerald-700' : 'text-rose-700'}`}
              >
                {submitMessage}
              </p>
            ) : null}

            <button
              type="submit"
              disabled={isSubmitting || !isFormValid}
              className="inline-flex items-center justify-center rounded-full bg-sky-600 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-sky-700 disabled:cursor-not-allowed disabled:bg-sky-300"
            >
              {isSubmitting ? 'Sending...' : 'Send message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
