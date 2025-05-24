import React from 'react';

const TermsOfUse = () => {
  return (
    <div className="max-w-[80%] bg-green-50/60 mx-auto rounded-2xl px-4 py-8 mb-8 mt-5  ">
      <h1 className="text-3xl font-bold mb-4 text-[#22461b]">Terms of Use</h1>

      <p className="mb-4 text-[#22461b]">
        Welcome to <strong>Verdent Vibe</strong>. By accessing or using our platform, you agree to be bound by these Terms of Use. Please read them carefully.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-[#22461b]">1. User Conduct</h2>
      <p className="mb-4 text-[#22461b]">
        You agree to use Verdent Vibe in a respectful and lawful manner. You must not post or share:
        <ul className="list-disc list-inside mt-2 text-[#22461b]">
          <li>Offensive or inappropriate content</li>
          <li>Spam or misleading information</li>
          <li>Unauthorized promotional materials</li>
        </ul>
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-[#22461b]">2. Account Responsibility</h2>
      <p className="mb-4 text-[#22461b]">
        You are responsible for maintaining the confidentiality of your account and any activity under your account.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-[#22461b]">3. Content Ownership</h2>
      <p className="mb-4 text-[#22461b]">
        You retain rights to the content you share. However, by posting, you grant Verdent Vibe a non-exclusive license to use, display, and distribute your content within the platform for community growth and engagement.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-[#22461b]">4. Termination</h2>
      <p className="mb-4 text-[#22461b]">
        Verdent Vibe reserves the right to suspend or terminate your access if you violate these terms or engage in harmful behavior.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-[#22461b]">5. Changes to Terms</h2>
      <p className="mb-4 text-[#22461b]">
        We may update these terms occasionally. Continued use of the platform constitutes acceptance of any changes.
      </p>

      <h2 className="text-xl font-semibold mt-6 mb-2 text-[#22461b]">6. Contact Us</h2>
      <p className="text-[#22461b]">
        If you have questions or concerns about these Terms of Use, please contact us at <a href="mailto:support@verdentvibe.com" className="text-[#22461b] underline">support@verdentvibe.com</a>.
      </p>
    </div>
  );
};

export default TermsOfUse;
