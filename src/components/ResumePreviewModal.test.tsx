import { fireEvent, render, screen } from '@testing-library/react';
import { describe, expect, it, vi } from 'vitest';
import ResumePreviewModal from './ResumePreviewModal';

describe('ResumePreviewModal', () => {
  it('exposes the resume preview as an accessible dialog with both downloads', () => {
    render(
      <ResumePreviewModal
        isOpen
        onClose={vi.fn()}
        pdfUrl="/resume.pdf"
        docxUrl="/resume.docx"
      />
    );

    expect(screen.getByRole('dialog', { name: /resume preview/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /download \.pdf/i })).toHaveAttribute('href', '/resume.pdf');
    expect(screen.getByRole('link', { name: /download \.docx/i })).toHaveAttribute('href', '/resume.docx');
  });

  it('closes when Escape is pressed', () => {
    const onClose = vi.fn();

    render(
      <ResumePreviewModal
        isOpen
        onClose={onClose}
        pdfUrl="/resume.pdf"
        docxUrl="/resume.docx"
      />
    );

    fireEvent.keyDown(document, { key: 'Escape' });

    expect(onClose).toHaveBeenCalledTimes(1);
  });
});