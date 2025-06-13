
import React from 'react';
import { GoldenButton } from './GoldenButton';
import { SectionTitle } from './SectionTitle';

export const WhyChooseUs: React.FC = () => {
  return (
    <section className="bg-black py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div>
            <SectionTitle text="WHY WE CHOOSE US" className="mb-6 text-left" useGradient={false} />
            <p className="text-gray-300 mb-8 leading-relaxed">
              Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut laboreet dolore magna aliqua.Ut enim ad voluptate velit esse cillum dolore eu fugiat.Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut laboreet dolore magna aliqua.Ut enim ad voluptate velit esse cillum dolore eu fugiat.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <GoldenButton onClick={() => console.log('Why Choose Us Get Quote clicked')} className="px-8 py-3">
                Get Your free Quote
              </GoldenButton>
              <GoldenButton variant="outline-gold" onClick={() => console.log('Why Choose Us Call Now clicked')} className="px-8 py-3">
                Call Now: +1 336 300 9880
              </GoldenButton>
            </div>
          </div>
          <div className="grid grid-cols-1 grid-rows-1 gap-4 h-[400px] md:h-[500px]">
            <div className="col-span-1 row-span-1 rounded-xl overflow-hidden shadow-lg">
                <img src="/Group2.png" alt="Epoxy floor detail" className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
