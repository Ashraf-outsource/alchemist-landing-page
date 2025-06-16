import React from 'react';
import { GoldenButton } from './GoldenButton';
import { QuoteForm } from './QuoteForm';

export const Hero: React.FC = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center bg-cover bg-center bg-no-repeat pt-20 md:pt-0"
      style={{ backgroundImage: "url('/Group1.png')" }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-70"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16 items-center">
          <div className="text-center md:text-left py-12 md:py-0">
            <h1 className="text-4xl sm:text-5xl lg:text-5xl font-bold text-white leading-tight mb-6">
              WELCOME TO 
              <br/>
              ALCHEMIST RESIN
            </h1>
            <p className="text-lg text-gray-300 mb-10 max-w-x2 mx-auto md:mx-0">
              Our skilled team takes pride in delivering exceptional garage epoxy finishes that not only elevate the appearance of your space but also provide unmatched durability. At ALCHEMIST Resin, we understand the importance of protecting and enhancing your concrete surfaces, which is why we offer professional concrete sealing services. 
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <GoldenButton onClick={() => console.log('Hero Get a Quote clicked')} className="px-10 py-4 text-base">
                Get a Quote
              </GoldenButton>
              <GoldenButton onClick={() => console.log('Hero Call Now clicked')} className="px-10 py-4 text-base">
                Call Now: +1 (929) 520-0087
              </GoldenButton>
            </div>
          </div>
          <div className="flex justify-center md:justify-end">
            <QuoteForm
              title="Get A FREE Quote!"
              subtitle=" We need to change what ever I below ”Get a quote ”"
              note=""
              formContext="hero"
            />
          </div>
        </div>
      </div>
    </section>
  );
};