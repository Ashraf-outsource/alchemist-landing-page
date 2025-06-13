import React, { useState } from 'react';
import { FaqItemData } from '../types';
import { SectionTitle } from './SectionTitle';
import { QuoteForm } from './QuoteForm';
import { ChevronDownIcon, ChevronUpIcon } from './icons';

const faqData: FaqItemData[] = [
  {
    id: '1',
    question: 'HOW TO CHANGE MY PHOTO FROM ADMIN DASHBOARD?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.',
  },
  {
    id: '2',
    question: 'HOW TO CHANGE MY PASSWORD EASILY?',
    answer: 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.',
  },
  {
    id: '3',
    question: 'HOW TO CHANGE MY SUBSCRIPTION PLAN USING PAYPAL',
    answer: 'Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit.',
  },
];

const FaqItem: React.FC<{ item: FaqItemData; isOpen: boolean; onClick: () => void }> = ({ item, isOpen, onClick }) => {
  return (
    <div className="border-b border-gray-700 last:border-b-0">
      <button
        onClick={onClick}
        className={`w-full text-left py-5 px-6 flex justify-between items-center transition-colors duration-300 rounded-t-md
                    ${isOpen 
                        ? 'bg-gradient-to-r from-[#FAF0C5] via-[#E0C083] to-[#BE9B5B] text-black font-semibold' 
                        : 'bg-[#2D2D2D] hover:bg-[#3a3a3a] text-white'}`}
        aria-expanded={isOpen}
        aria-controls={`faq-answer-${item.id}`}
      >
        <span className="text-sm font-semibold">{item.question}</span>
        {isOpen ? <ChevronUpIcon className="w-5 h-5 text-black" /> : <ChevronDownIcon className="w-5 h-5 text-gray-400" />}
      </button>
      {isOpen && (
        <div id={`faq-answer-${item.id}`} className="p-6 bg-[#1C1C1C] text-gray-300 text-sm leading-relaxed rounded-b-md">
          {item.answer}
        </div>
      )}
    </div>
  );
};

export const FaqSection: React.FC = () => {
  const [openFaqId, setOpenFaqId] = useState<string | null>(faqData[0]?.id || null);

  const handleToggle = (id: string) => {
    setOpenFaqId(openFaqId === id ? null : id);
  };

  return (
    <section className="bg-[#101010] py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          <div>
            <SectionTitle text="FREQUENTLY ASKED QUESTIONS" className="mb-10 text-left" useGradient={false} />
            <div className="space-y-1 rounded-md overflow-hidden shadow-lg">
              {faqData.map((item) => (
                <FaqItem
                  key={item.id}
                  item={item}
                  isOpen={openFaqId === item.id}
                  onClick={() => handleToggle(item.id)}
                />
              ))}
            </div>
          </div>
          <div className="mt-12 lg:mt-0 flex justify-center lg:justify-end">
             <QuoteForm
              title="GET A QUOTE NOW!"
              formContext="faq"
            />
          </div>
        </div>
      </div>
    </section>
  );
};