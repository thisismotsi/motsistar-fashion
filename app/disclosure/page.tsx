"use client";

const DisclosurePage: React.FC = () => {
  return (
    <section className="w-full min-h-screen bg-ivory py-12 sm:py-16 px-4 sm:px-6 lg:px-12">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8 sm:p-12">
        {/* Title */}
        <h1 className="text-3xl sm:text-4xl font-heading font-bold text-navy mb-6">
          Affiliate Disclosure
        </h1>
        <p className="text-gray-600 mb-8 leading-relaxed">
          At <span className="font-semibold text-navy">MOTSISTAR</span>, we
          value transparency and integrity. This Affiliate Disclosure outlines
          how we partner with brands and how affiliate links may appear across
          our content.
        </p>

        {/* Section 1 */}
        <h2 className="text-xl font-semibold text-navy mt-8 mb-3">
          1. Affiliate Relationships
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Some links, recommendations, or promotions on this site are affiliate
          links. This means that if you click through and make a purchase, we
          may earn a small commission. Importantly, this comes at{" "}
          <span className="font-semibold text-navy">no additional cost to you</span>.
        </p>

        {/* Section 2 */}
        <h2 className="text-xl font-semibold text-navy mt-8 mb-3">
          2. Our Commitment to Honesty
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          All recommendations, product analyses, and service reviews shared on
          our platform are based on independent research, industry expertise,
          and genuine experience. Affiliate partnerships{" "}
          <span className="font-semibold text-navy">never influence</span> the
          integrity of our opinions or the quality of the insights we provide.
        </p>

        {/* Section 3 */}
        <h2 className="text-xl font-semibold text-navy mt-8 mb-3">
          3. Why We Use Affiliate Links
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Affiliate partnerships allow us to sustain the high-quality content,
          insights, and resources we deliver to our community. They help support
          our mission of connecting businesses with world-class products,
          services, and strategies.
        </p>

        {/* Section 4 */}
        <h2 className="text-xl font-semibold text-navy mt-8 mb-3">
          4. Your Choice Matters
        </h2>
        <p className="text-gray-700 mb-6 leading-relaxed">
          Using our affiliate links is entirely optional. Whether or not you
          choose to use them, our content remains freely available, accurate,
          and unbiased.
        </p>

        {/* Section 5 */}
        <h2 className="text-xl font-semibold text-navy mt-8 mb-3">
          5. Contact Us
        </h2>
        <p className="text-gray-700 leading-relaxed">
          If you have any questions about our affiliate partnerships or how they
          work, please reach out to us at{" "}
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

export default DisclosurePage;
