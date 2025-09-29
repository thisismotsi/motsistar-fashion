"use client";

import Image from "next/image";
import { Button } from "@/components/Button";
import { useState } from "react";
import { motion } from "framer-motion";

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    role: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill in all required fields.");
      return;
    }

    setLoading(true);
    setStatus("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus("Message sent successfully!");
        setFormData({
          name: "",
          email: "",
          company: "",
          role: "",
          message: "",
        });
      } else {
        setStatus(data.message || "Failed to send message.");
      }
    } catch (err) {
      console.error(err);
      setStatus("Failed to send message.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="w-full min-h-screen bg-ivory">

      {/* Hero */}
      <motion.div
        className="relative w-full h-72 sm:h-96 lg:h-[28rem]"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src="/images/contact/services-hero.jpg"
          alt="Contact MOTSISTAR"
          fill
          className="object-cover"
        />
        <motion.div
          className="absolute inset-0 bg-black/50 flex flex-col justify-center items-center text-center px-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-4">
            Let’s Start a Conversation
          </h1>
          <p className="text-beige max-w-2xl text-sm sm:text-base">
            Whether you represent a global enterprise or a fast-growing brand,
            we are here to listen, collaborate, and deliver trusted solutions.
          </p>
        </motion.div>
      </motion.div>

      {/* Contact Form */}
      <motion.div
        className="max-w-4xl mx-auto -mt-12 relative z-10 px-4 sm:px-6 lg:px-12"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12">
          <h2 className="text-2xl sm:text-3xl font-heading font-bold mb-6 text-center text-navy">
            Get in Touch
          </h2>
          <p className="text-gray-600 text-center mb-8">
            Have a custom request? Share your details and let us know how we can support your business.
            Responses take 1-5 business days.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Full Name *"
                className="w-full border border-gold rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-gold"
                required
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address *"
                className="w-full border border-gold rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-gold"
                required
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <input
                type="text"
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Company (optional)"
                className="w-full border border-gold rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-gold"
              />
              <input
                type="text"
                name="role"
                value={formData.role}
                onChange={handleChange}
                placeholder="Your Role (optional)"
                className="w-full border border-gold rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-gold"
              />
            </div>

            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              placeholder="Your Message *"
              rows={6}
              className="w-full border border-gold rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-gold resize-none"
              required
            />

            <Button
              type="submit"
              className="btn btn-primary mt-2"
              disabled={loading}
            >
              {loading ? "Sending..." : "Send Message"}
            </Button>
          </form>

          {status && (
            <motion.div
              className="mt-4 text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <p className="mt-4 mb-4 text-navy font-medium">{status}</p>
              <Button href="/" variant="primary" size="md">
                Go to Home Page
              </Button>
            </motion.div>
          )}
        </div>

        {/* Trust Message */}
        <motion.div
          className="mt-12 text-center text-gray-500"
          initial={{ y: 20, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p>
            Email us directly:{" "}
            <a
              href="mailto:info@motsistar.com"
              className="text-primary underline"
            >
              info@motsistar.com
            </a>
          </p>
          <p className="mt-2 italic">
            Your privacy and security are our highest priorities.
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ContactPage;
