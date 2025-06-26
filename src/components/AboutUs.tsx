import React from 'react';

const AboutUs: React.FC = () => {
  return (
    <div className="bg-white w-full mx-auto px-6 py-12 md:py-20">
      <div className="grid grid-cols-1 md:grid-cols-5 gap-10 md:gap-16 items-start">
        {/* Images Section */}
        <div className="md:col-span-2 space-y-10">
          <img
            src="/aboutimg1.png"
            alt="Modern train front inside factory"
            className="w-full rounded-2xl object-cover shadow-md"
          />
          <img
            src="/aboutimg2.png"
            alt="Orange railway car in factory"
            className="w-full rounded-2xl object-cover shadow-md"
          />
        </div>

        {/* Text Content Section */}
        <div className="md:col-span-3 flex flex-col justify-start space-y-8">
          <div>
            <h2 className="text-3xl font-semibold text-slate-900 max-w-max font-ralewaysss">
              About <span className="text-orange-600">Us</span>
            </h2>
            <p className="mt-4 text-xl text-slate-800 max-w-xl">
              Unified in Shaping Railway&apos;s Future
            </p>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-slate-900">
            <div>
              <h3 className="font-semibold text-slate-900 mb-2">
                Our <span className="text-orange-600">Story</span>
              </h3>
              <p className="text-sm leading-relaxed text-slate-700 font-montserrat">
                Over the previous 15 years, Anjali Elastomers, which was founded in 2009, has developed from a maker of rail components to a top supplier of entire railway infrastructure.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 mb-2">
                Integrated <span className="text-orange-600">Capabilities</span>
              </h3>
              <p className="text-sm leading-relaxed text-slate-700 ">
                Bridge building, track construction, rail flash butt welding, rail turnout systems, and rail fastening systems are just a few of the railway sector disciplines in which we operate.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 mb-2">
                Manufacturing <span className="text-orange-600">Excellence</span>
              </h3>
              <p className="text-sm leading-relaxed text-slate-700 ">
                We manufacture a variety of railway track goods at our four cutting-edge production plants in Eastern India. Our plants incorporate state-of-art Technology to mobilise Good Manufacturing Practices.
              </p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 mb-2">
                Key Projects &amp; <span className="text-orange-600">Achievements</span>
              </h3>
              <p className="text-sm leading-relaxed text-slate-700 ">
                The Jiribam-Imphal Rail Link, the Udharamur-Srinagar-Baramulla Rail Link, and the 4.5 km Rail Cum Road Steel Bridge across the River Ganga near Patna are some of our noteworthy projects that demonstrate our proficiency as the top railroad manufacturing and turnkey railway infrastructure organization.
              </p>
            </div>
          </div>

          {/* Learn More Link */}
          <div>
            <a
              href="#"
              className="text-orange-600 font-semibold text-xl inline-flex items-center hover:underline focus-visible:outline-offset-2 focus-visible:outline-orange-600"
              aria-label="Learn more about us"
            >
              Learn
              <span className="ml-1 text-slate-900 font-normal">more</span>
              <svg
                className="ml-2 w-5 h-5"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
                viewBox="0 0 24 24"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;

