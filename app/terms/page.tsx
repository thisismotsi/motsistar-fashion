"use client";

const TermsPage: React.FC = () => {
  return (
    <section className="w-full min-h-screen bg-ivory py-12 sm:py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 sm:p-12">
        {/* Page Title */}
        <h1 className="text-3xl sm:text-4xl font-heading font-bold text-navy mb-6">
          Terms of Service
        </h1>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Welcome to <span className="font-semibold text-navy">MOTSISTAR</span>.  
          By accessing and using our website, services, and content, you agree to comply with 
          the following Terms of Service. Please read them carefully, as they establish the 
          legal framework governing your use of our platform.
        </p>

        {/* Section 1 */}
        <h2 className="text-xl font-semibold text-navy mt-8 mb-3">
          1. Acceptance of Terms
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          By engaging with our site, you confirm that you are at least 18 years old or accessing 
          the platform under the supervision of a legal guardian. If you do not agree with these 
          terms, you must discontinue use immediately.
        </p>

        {/* Section 2 */}
        <h2 className="text-xl font-semibold text-navy mt-8 mb-3">
          2. Use of Our Services
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Our services are provided solely for lawful purposes. You agree not to misuse the 
          website, interfere with its functionality, attempt unauthorized access, or engage in 
          activities that may harm MOTSISTAR, its users, or affiliates.
        </p>

        {/* Section 3 */}
        <h2 className="text-xl font-semibold text-navy mt-8 mb-3">
          3. Intellectual Property
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          All trademarks, logos, content, design elements, and intellectual property displayed 
          on this site are the exclusive property of MOTSISTAR unless otherwise noted. 
          Unauthorized reproduction, modification, or distribution of our materials is strictly prohibited.
        </p>

        {/* Section 4 */}
        <h2 className="text-xl font-semibold text-navy mt-8 mb-3">
          4. Affiliate Relationships
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          MOTSISTAR participates in affiliate programs and may earn commissions on qualifying 
          purchases made through our referral links. These partnerships do not influence our 
          reviews or recommendations, which remain unbiased and authentic.
        </p>

        {/* Section 5 */}
        <h2 className="text-xl font-semibold text-navy mt-8 mb-3">
          5. Limitation of Liability
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          While we strive to provide accurate and reliable information, MOTSISTAR makes no 
          guarantees regarding product performance, merchant reliability, or third-party services. 
          We are not liable for any direct, indirect, or incidental damages resulting from your 
          use of our website or reliance on its content.
        </p>

        {/* Section 6 */}
        <h2 className="text-xl font-semibold text-navy mt-8 mb-3">
          6. Changes to Terms
        </h2>
        <p className="text-gray-700 leading-relaxed">
          MOTSISTAR reserves the right to update or revise these Terms of Service at any time, 
          without prior notice. Continued use of our website constitutes acceptance of the 
          updated terms.
        </p>
      </div>
    </section>
  );
};

export default TermsPage;
