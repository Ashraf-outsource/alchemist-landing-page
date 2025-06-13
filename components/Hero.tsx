import React from 'react';
import { GoldenButton } from './GoldenButton';
import { QuoteForm } from './QuoteForm';

export const Hero: React.FC = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat pt-20 md:pt-0"
      style={{ backgroundImage: "url('https://picsum.photos/seed/hero/1920/1080?grayscale&blur=1')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="text-center md:text-left py-12 md:py-0">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
              LOREM IPSUM DOLOR SIT AMET CONSECTETUR!
            </h1>
            <p className="text-lg text-gray-300 mb-10 max-w-xl mx-auto md:mx-0">
              Lorem ipsum dolor sit amet consectetur Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <GoldenButton onClick={() => console.log('Hero Get a Quote clicked')} className="px-10 py-4 text-base">
                Get a Quote
              </GoldenButton>
              <GoldenButton onClick={() => console.log('Hero Call Now clicked')} className="px-10 py-4 text-base">
                Call Now: +1 566 300 8780
              </GoldenButton>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <QuoteForm
              title="Get A FREE Quote!"
              subtitle="Lorem ipsum dolor sit amet consectetur."
              note="*Note: Bundle ends in two weeks from now."
              formContext="hero"
            />
          </div>
        </div>
      </div>
    </section>
  );
};