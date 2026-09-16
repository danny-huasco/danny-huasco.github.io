import { useEffect, useRef, useState, type RefObject } from 'react';

type ResumePreviewModalProps = {
  isOpen: boolean;
  onClose: () => void;
  pdfUrl: string;
  docxUrl: string;
  returnFocusRef?: RefObject<HTMLElement>;
};

function ResumePreviewModal({ isOpen, onClose, pdfUrl, docxUrl, returnFocusRef }: ResumePreviewModalProps) {
  const closeButtonRef = useRef<HTMLButtonElement>(null);
  const [pdfLoadFailed, setPdfLoadFailed] = useState(false);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const triggerElement = returnFocusRef?.current;
    closeButtonRef.current?.focus();

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      triggerElement?.focus();
    };
  }, [isOpen, onClose, returnFocusRef]);

  if (!isOpen) {
    return null;
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 p-4">
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="resume-preview-title"
        className="w-full max-w-4xl rounded-[2rem] border border-slate-200 bg-white shadow-2xl"
      >
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-4 sm:px-6">
          <h3 id="resume-preview-title" className="text-xl font-semibold text-slate-900">
            Resume Preview
          </h3>
          <button
            type="button"
            onClick={onClose}
            ref={closeButtonRef}
            aria-label="Close resume preview"
            className="rounded-full border border-slate-300 px-3 py-1.5 text-sm font-medium text-slate-700 transition hover:border-slate-400 hover:text-slate-900"
          >
            Close
          </button>
        </div>

        <div className="p-4 sm:p-6">
          <div className="mb-4 flex flex-wrap gap-3">
            <a
              href={docxUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full bg-sky-600 px-4 py-2 text-sm font-semibold text-white transition hover:bg-sky-700"
            >
              Download .docx
            </a>
            <a
              href={pdfUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center rounded-full border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-slate-700 transition hover:border-sky-600 hover:text-sky-700"
            >
              Download .pdf
            </a>
          </div>

          {pdfLoadFailed ? (
            <p role="alert" className="rounded-xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
              The PDF preview could not be loaded. Use the download link above to open the resume.
            </p>
          ) : (
            <iframe
              title="Resume preview"
              src={pdfUrl}
              onError={() => setPdfLoadFailed(true)}
              className="h-[70vh] w-full rounded-xl border border-slate-200 bg-slate-50"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default ResumePreviewModal;
