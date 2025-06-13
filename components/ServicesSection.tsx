
import React from 'react';
import { Service } from '../types';
import { SectionTitle } from './SectionTitle';
import { ArrowRightIcon, TelescopeIcon } from './icons';

const servicesData: Service[] = [
  {
    id: '1',
    imageSrc: 'public/Group 4.png',
    title: '24 YEARS',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.',
  },
  {
    id: '2',
    imageSrc: 'public/Group 3.png',
    title: 'EXPERIENCED',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.',
    highlighted: true,
  },
  {
    id: '3',
    imageSrc: 'public/Group 5.png',
    title: '24 YEARS EXPERIENCED',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.',
  },
];

const ServiceCard: React.FC<{ service: Service }> = ({ service }) => {
  return (
    <div className={`bg-[#1C1C1C] p-6 rounded-2xl shadow-xl flex flex-col transition-all duration-300 hover:shadow-[#D1A054]/30 ${service.highlighted ? 'border-2 border-[#D1A054]' : 'border-2 border-transparent'}`}>
      <img src={service.imageSrc} alt={service.title} className="w-full h-48 object-cover rounded-lg mb-6" />
      <h3 className="text-xl font-semibold text-[#D1A054] mb-3">{service.title}</h3>
      <p className="text-gray-400 text-sm mb-6 flex-grow">{service.description}</p>
      <a href="#" className="text-[#D1A054] hover:text-yellow-300 font-medium flex items-center group">
        Learn More
        <ArrowRightIcon className="w-4 h-4 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" />
      </a>
    </div>
  );
};

export const ServicesSection: React.FC = () => {
  return (
    <section className="bg-[#101010] py-16 md:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 md:mb-16">
          <div className="flex justify-center items-center mb-4">
            <TelescopeIcon className="w-12 h-12 text-[#D1A054]" />
          </div>
          <SectionTitle text="CHECK OUR SERVICES" className="mb-4" useGradient={false}/>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Lorem ipsum dolor sit amet consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim ad voluptate velit esse cillum dolore eu fugiat.
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
        <div className="flex justify-center mt-12 space-x-2">
            <button className="w-3 h-3 bg-gray-500 rounded-full focus:outline-none focus:bg-[#D1A054]"></button>
            <button className="w-3 h-3 bg-[#D1A054] rounded-full focus:outline-none"></button> {/* Active state */}
            <button className="w-3 h-3 bg-gray-500 rounded-full focus:outline-none focus:bg-[#D1A054]"></button>
        </div>
      </div>
    </section>
  );
};
