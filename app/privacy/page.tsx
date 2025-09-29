"use client";

const PrivacyPolicyPage: React.FC = () => {
  return (
    <section className="w-full min-h-screen bg-ivory py-12 sm:py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 sm:p-12">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-heading font-bold text-navy mb-6">
          Privacy Policy
        </h1>
        <p className="text-gray-600 mb-8 leading-relaxed">
          At <span className="font-semibold text-navy">MOTSISTAR</span>, your
          trust is our highest priority. This Privacy Policy explains how we
          collect, use, safeguard, and disclose your information when you engage
          with our website, services, and content. By using our platform, you
          consent to the practices described below.
        </p>

        {/* Section 1 */}
        <h2 className="text-xl font-semibold text-navy mt-8 mb-3">
          1. Information We Collect
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          We may collect personal details that you provide directly, such as
          your name, email address, company, and professional role when you
          complete forms, subscribe to updates, or contact us. We may also
          gather non-personal information such as browser type, device data, and
          usage statistics to improve our platform.
        </p>

        {/* Section 2 */}
        <h2 className="text-xl font-semibold text-navy mt-8 mb-3">
          2. How We Use Your Information
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Your information enables us to:
        </p>
        <ul className="list-disc list-inside text-gray-700 mb-6 leading-relaxed">
          <li>Provide and improve our services and recommendations.</li>
          <li>Respond to your inquiries and support requests.</li>
          <li>Communicate important updates, offers, or policy changes.</li>
          <li>Analyze site performance and enhance user experience.</li>
        </ul>
        <p className="text-gray-700 mb-6 leading-relaxed">
          We never sell or rent your personal data to unauthorized third
          parties.
        </p>

        {/* Section 3 */}
        <h2 className="text-xl font-semibold text-navy mt-8 mb-3">
          3. Cookies & Tracking Technologies
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Our website may use cookies, pixels, and similar tools to personalize
          your experience, analyze traffic, and deliver relevant content. You
          can adjust your browser settings to refuse cookies, but doing so may
          limit functionality on our site.
        </p>

        {/* Section 4 */}
        <h2 className="text-xl font-semibold text-navy mt-8 mb-3">
          4. Data Security
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          We implement industry-standard security measures to protect your data
          against unauthorized access, alteration, or disclosure. However, no
          system is entirely foolproof, and we cannot guarantee absolute
          security.
        </p>

        {/* Section 5 */}
        <h2 className="text-xl font-semibold text-navy mt-8 mb-3">
          5. Third-Party Services
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Our site may contain links to third-party websites or services. We are
          not responsible for the privacy practices or content of these
          third-party platforms. We encourage you to review their privacy
          policies before sharing personal information.
        </p>

        {/* Section 6 */}
        <h2 className="text-xl font-semibold text-navy mt-8 mb-3">
          6. Changes to This Policy
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          MOTSISTAR reserves the right to update this Privacy Policy at any
          time. Updates will be posted on this page with a revised “Last
          Updated” date. Continued use of our services after changes constitutes
          acceptance of the revised policy.
        </p>

        {/* Section 7 */}
        <h2 className="text-xl font-semibold text-navy mt-8 mb-3">
          7. Contact Us
        </h2>
        <p className="text-gray-700 leading-relaxed">
          For questions or concerns about this Privacy Policy, please reach out
          to us at{" "}
          <a
            href="mailto:info@motsistar.com"
            className="text-gold underline hover:text-navy"
          >
            info@motsistar.com
          </a>
          .
        </p>
      </div>
    </section>
  );
};

export default PrivacyPolicyPage;
