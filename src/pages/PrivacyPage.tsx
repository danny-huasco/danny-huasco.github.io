function PrivacyPage() {
  return (
    <div className="flex justify-center">
      <div className="w-full max-w-4xl rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm sm:p-8">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900">Privacy Policy</h1>

        <div className="mt-6 space-y-4 text-base leading-7 text-slate-600">
          <p>
            This portfolio site is intended to share information about my work, experience, and contact details.
          </p>
          <p>
            I do not sell personal data, and this site does not collect or store sensitive information unless you submit
            information through the contact form.
          </p>
          <p>
            If you contact me through the provided channels, I may use that information only to respond to your inquiry or
            discuss a potential project.
          </p>
          <p>
            I may use third-party services, such as GitHub and LinkedIn, to display publicly available professional
            information. Please review those providers&apos; privacy policies for additional details.
          </p>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPage;
