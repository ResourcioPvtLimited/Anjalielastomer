"use client"
import React from 'react';

interface Product {
  id: number;
  name: string;
  description: string;
  image: string;
  rating: number;
  reviewCount: number;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Air Spring',
    description:
      'Enclosed pressurised air in a predefined chamber called air spring, made up of rubber and textile',
    image: '/featuredproductsimg1.png',
    rating: 5,
    reviewCount: 156,
  },
  {
    id: 2,
    name: 'Axile Brake Disc',
    description:
      'The brake pad or shoe with the friction lining is pushed against the rotating drill.',
    image: '/featuredproductsimg2.png',
    rating: 4,
    reviewCount: 174,
  },
  {
    id: 3,
    name: 'Bolts & Nuts',
    description:
      'A fastener is used for joining, holding or assembling of a single or multiple components.',
    image: '/featuredproductsimg3.png',
    rating: 3,
    reviewCount: 43,
  },
  {
    id: 4,
    name: 'Brake Shoe Pad',
    description:
      'Found in disc brake systems, brake pads are a flat piece of steel with a thick friction material.',
    image: '/featuredproductsimg4.png',
    rating: 5,
    reviewCount: 193,
  },
  {
    id: 5,
    name: 'Bolts & Nuts 2',
    description:
      'A fastener is used for joining, holding or assembling of a single or multiple components.',
    image: '/featuredproductsimg3.png',
    rating: 3,
    reviewCount: 43,
  },
  {
    id: 6,
    name: 'Axile Brake Disc 2',
    description:
      'The brake pad or shoe with the friction lining is pushed against the rotating drill.',
    image: '/featuredproductsimg2.png',
    rating: 4,
    reviewCount: 174,
  },
];

// Helper: Generate star rating icons with SVG
const StarRating: React.FC<{ rating: number }> = ({ rating }) => {
  const totalStars = 5;
  return (
    <div className="flex space-x-0.5">
      {[...Array(totalStars)].map((_, i) => {
        const fill =
          i + 1 <= rating
            ? 'currentColor'
            : i + 0.5 === rating
              ? 'url(#half)'
              : 'none';
        const isHalfStar = i + 0.5 === rating;
        return (
          <svg
            key={i}
            className="w-4 h-4 text-orange-500 flex-shrink-0"
            fill={fill}
            stroke="currentColor"
            strokeWidth={1}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            {isHalfStar ? (
              <>
                <defs>
                  <linearGradient id="half">
                    <stop offset="50%" stopColor="currentColor" />
                    <stop offset="50%" stopColor="transparent" />
                  </linearGradient>
                </defs>
                <path
                  fill="url(#half)"
                  d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 8.63 12 2 9.19 8.63 2 9.24 7.45 13.97 5.82 21z"
                />
              </>
            ) : (
              <path
                fill={i + 1 <= rating ? 'currentColor' : 'none'}
                stroke="currentColor"
                d="M12 17.27L18.18 21 16.54 13.97 22 9.24 14.81 
                  8.63 12 2 9.19 8.63 2 9.24 7.45 13.97 5.82 21z"
              />
            )}
          </svg>
        );
      })}
    </div>
  );
};

const FeaturedProducts: React.FC = () => {
  return (
    <section className="bg-[#FFF6F0] py-12 px-4 sm:px-6 md:px-8">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-gray-900 max-w-full mx-auto">
        <span>Featured </span>
        <span className="text-orange-500">Products</span>
      </h2>


      <div className="relative overflow-hidden w-full">
        <div
          className="flex gap-6 py-2 w-max"
          style={{
            animation: 'scroll-bounce 6s linear infinite alternate',
          }}
        >
          {products.map(({ id, name, image, rating, reviewCount, description }) => (
            <article
              key={id}
              className="bg-white w-96 sm:w-80 rounded-lg shadow-sm overflow-hidden flex-shrink-0 flex flex-col"
            >
              <div className="flex justify-center h-80 md:h-60 flex-col items-center relative">
                <img
                  src={image}
                  alt={name}
                  width={400}
                  height={240}
                  className="object-cover h-full"

                />
                <h3 className="absolute bottom-1 left-6 font-semibold z-10 text-white px-2 py-1 rounded-sm w-full text-left">
                  {name}
                </h3>
              </div>

              <div className="p-4 flex flex-col flex-grow">
                <div className="flex items-center space-x-1 mb-2">
                  <StarRating rating={rating} />
                  <span className="text-gray-600 text-sm">({reviewCount})</span>
                </div>

                <p className="text-gray-700 flex-grow text-sm leading-relaxed mb-5">
                  {description}
                </p>

                <button
                  type="button"
                  className="mt-auto rounded border border-orange-500 px-4 py-2 font-semibold text-orange-600 active:bg-orange-100 transition-colors duration-600 hover:bg-orange-500 hover:text-white"
                  aria-label={`Explore product ${name}`}
                  onClick={() => alert(`Exploring product: ${name}`)}
                >
                  Explore Product
                </button>
              </div>
            </article>
          ))}
        </div>

        {/* 👇 CSS for back and forth animation */}
        <style jsx>{`
    @keyframes scroll-bounce {
      0% {
        transform: translateX(0%);
      }
      100% {
        transform: translateX(calc(-100% + 100vw));
      }
    }
  `}</style>
      </div>




      <div className="max-w-full mx-auto mt-12 text-center">
        <button
          type="button"
          className="inline-flex items-center text-orange-500 font-semibold text-lg hover:text-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400 rounded"
          aria-label="Explore all products"
          onClick={() => alert('Explore all products')}
        >
          <span>Explore All</span>
          <svg
            className="w-5 h-5 ml-1"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8l4 4m0 0l-4 4m4-4H3"
            />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default FeaturedProducts;

