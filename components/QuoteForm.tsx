
import React, { useState } from 'react';
import { GoldenButton } from './GoldenButton';
import { FormData } from '../types';

interface QuoteFormProps {
  title: string;
  subtitle?: string;
  note?: string;
  formContext: 'hero' | 'faq'; // Differentiates forms for unique IDs
}

export const QuoteForm: React.FC<QuoteFormProps> = ({ title, subtitle, note, formContext }) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(`Quote Form (${formContext}) Submitted:`, formData);
    // Add submission logic here
  };

  return (
    <div className="bg-[#1C1C1C] p-6 md:p-8 rounded-xl shadow-2xl w-full max-w-md">
      <h3 className="text-2xl font-bold text-white mb-1">{title}</h3>
      {subtitle && <p className="text-gray-400 mb-6 text-sm">{subtitle}</p>}
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <input
            type="text"
            name={formContext === 'hero' ? 'fullName' : 'name'}
            id={`${formContext}-name`}
            value={formContext === 'hero' ? formData.fullName : formData.name}
            onChange={handleChange}
            placeholder={formContext === 'hero' ? 'Your Full Name' : 'Your Name'}
            className="w-full bg-white text-gray-900 px-4 py-3 rounded-md focus:ring-2 focus:ring-[#D1A054] outline-none placeholder-gray-500"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="email"
            name="email"
            id={`${formContext}-email`}
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full bg-white text-gray-900 px-4 py-3 rounded-md focus:ring-2 focus:ring-[#D1A054] outline-none placeholder-gray-500"
            required
          />
        </div>
        <div className="mb-4">
          <input
            type="tel"
            name="phone"
            id={`${formContext}-phone`}
            value={formData.phone}
            onChange={handleChange}
            placeholder="Your Phone Number"
            className="w-full bg-white text-gray-900 px-4 py-3 rounded-md focus:ring-2 focus:ring-[#D1A054] outline-none placeholder-gray-500"
          />
        </div>
        <div className="mb-6">
          <textarea
            name="message"
            id={`${formContext}-message`}
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            rows={4}
            className="w-full bg-white text-gray-900 px-4 py-3 rounded-md focus:ring-2 focus:ring-[#D1A054] outline-none placeholder-gray-500"
            required
          ></textarea>
        </div>
        <GoldenButton type="submit" fullWidth>
          {formContext === 'hero' ? 'Get a Quote' : 'Submit'}
        </GoldenButton>
      </form>
      {note && <p className="text-xs text-gray-500 mt-4 text-center">{note}</p>}
    </div>
  );
};
