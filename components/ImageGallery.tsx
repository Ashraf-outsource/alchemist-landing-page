
import React from 'react';

const imageUrls = [
  'public/image 9.png',
  'public/image 10.png',
  'public/image 11.png',
  'public/image 12.png',
  'public/image 13.png',
];

export const ImageGallery: React.FC = () => {
  return (
    <section className="bg-black py-4 md:py-8">
      <div className="container mx-auto px-0">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5">
          {imageUrls.map((url, index) => (
            <div key={index} className="aspect-w-1 aspect-h-1 overflow-hidden group">
              <img 
                src={url} 
                alt={`Gallery image ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-500 ease-in-out group-hover:scale-110"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
