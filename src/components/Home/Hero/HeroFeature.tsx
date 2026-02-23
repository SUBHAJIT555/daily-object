import React from "react";

const featureData = [
  { title: "Free Shipping", desc: "On orders above ₹499" },
  { title: "Easy Returns", desc: "7-day return policy" },
  { title: "Secure Payments", desc: "UPI, cards & more" },
  { title: "Support", desc: "All across India" },
];

const HeroFeature = () => {
  return (
    <div className="border-y border-gray-3/80 bg-white">
      <div className="mx-auto max-w-[1170px] px-4 sm:px-6 md:px-8 xl:px-0">
        <div className="grid grid-cols-1 gap-6 py-8 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {featureData.map((item, i) => (
            <div
              key={i}
              className="flex items-start gap-4 border-l-4 border-[var(--color-primary)] pl-5"
            >
              <span className="font-zodiak text-2xl font-semibold text-gray-300">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div>
                <h3 className="font-semibold text-dark">{item.title}</h3>
                <p className="text-sm text-dark-4">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroFeature;
