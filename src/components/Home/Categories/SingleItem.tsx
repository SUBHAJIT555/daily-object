import { Category } from "@/types/category";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const SingleItem = ({ item }: { item: Category }) => {
  return (
    <Link
      href={`/shop?category=${item.slug}`}
      className="group relative block aspect-[3/4] w-full overflow-hidden rounded-md border bg-gray-2 sm:aspect-[4/5]"
    >
      <Image
        src={item.img}
        alt={item.title}
        fill
        className="object-cover transition-transform duration-300 group-hover:scale-105"
        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 16vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-4">
        <h3 className="font-semibold text-white drop-shadow-sm">
          {item.title}
        </h3>
        
      </div>
    </Link>
  );
};

export default SingleItem;
