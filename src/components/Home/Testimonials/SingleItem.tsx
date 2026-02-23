import React from "react";
import { Testimonial } from "@/types/testimonial";
import Image from "next/image";

const SingleItem = ({ testimonial }: { testimonial: Testimonial }) => {
  return (
    <div className="flex h-full flex-col rounded-2xl border border-gray-3 bg-gray-1 p-8">
      <span className="mb-4 font-zodiak text-4xl leading-none text-[var(--color-primary)] opacity-60">"</span>
      <p className="flex-1 text-dark">{testimonial.review}</p>
      <div className="mt-6 flex items-center gap-4 border-t border-gray-3 pt-6">
        <div className="relative h-12 w-12 overflow-hidden rounded-full bg-gray-3">
          <Image
            src={testimonial.authorImg}
            alt={testimonial.authorName}
            fill
            className="object-cover"
            sizes="48px"
          />
        </div>
        <div>
          <h3 className="font-semibold text-dark">{testimonial.authorName}</h3>
          <p className="text-sm text-dark-4">{testimonial.authorRole}</p>
        </div>
      </div>
    </div>
  );
};

export default SingleItem;
