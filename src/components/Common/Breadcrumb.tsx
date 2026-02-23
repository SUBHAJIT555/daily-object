import Link from "next/link";
import React from "react";

const Breadcrumb = ({ title, pages }: { title: string; pages: string[] }) => {
  return (
    <div className="border-b border-gray-3/80 bg-white pt-36 sm:pt-40 lg:pt-32 xl:pt-40">
      <div className="mx-auto max-w-[1170px] px-4 py-6 sm:px-6 sm:py-8 md:px-8 xl:px-0">
        <nav className="flex items-center gap-2 text-sm text-dark-4">
          <Link href="/" className="hover:text-[var(--color-primary)]">
            Home
          </Link>
          {pages.length > 0 && (
            <>
              <span aria-hidden>/</span>
              <span className="text-dark">{pages[pages.length - 1]}</span>
            </>
          )}
        </nav>
        <h1 className="mt-2 font-zodiak text-2xl font-semibold text-dark sm:text-3xl">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default Breadcrumb;
