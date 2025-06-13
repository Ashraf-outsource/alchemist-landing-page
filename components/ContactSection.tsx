
import React, { useState } from 'react';
import { GoldenButton } from './GoldenButton';

export const ContactSection: React.FC = () => {
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact Form Submitted:', { phone, email });
    // Add submission logic
  };

  return (
    <section className="bg-[#1C1C1C] py-16 md:py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-10">
          LET'S CONNECT TOGETHER
        </h2>
        <form onSubmit={handleSubmit} className="flex flex-col md:flex-row justify-center items-center gap-6 max-w-3xl mx-auto">
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone *"
            className="bg-[#101010] border border-gray-700 text-white rounded-full py-4 px-6 placeholder-gray-500 focus:ring-2 focus:ring-[#D1A054] focus:border-[#D1A054] outline-none w-full md:w-auto flex-1"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address *"
            className="bg-[#101010] border border-gray-700 text-white rounded-full py-4 px-6 placeholder-gray-500 focus:ring-2 focus:ring-[#D1A054] focus:border-[#D1A054] outline-none w-full md:w-auto flex-1"
            required
          />
          <GoldenButton type="submit" className="rounded-full px-10 py-4 w-full md:w-auto">
            Chat Now
          </GoldenButton>
        </form>
      </div>
    </section>
  );
};
