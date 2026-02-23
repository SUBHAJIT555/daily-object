import React from "react";
import Breadcrumb from "../Common/Breadcrumb";
import Link from "next/link";

const Error = () => {
  return (
    <>
      <Breadcrumb title="Error" pages={["Error"]} />
      <section className="min-h-[60vh] overflow-hidden border-t border-gray-3 bg-[var(--color-dark)] py-20">
        <div className="mx-auto max-w-[1170px] px-4 text-center sm:px-6 md:px-8 xl:px-0">
          <p className="font-zodiak text-8xl font-semibold text-white/20 sm:text-9xl">404</p>
          <h2 className="mt-4 font-zodiak text-2xl font-semibold text-white sm:text-3xl">
            Page not found
          </h2>
          <p className="mx-auto mt-3 max-w-md text-gray-400">
            The page you were looking for may have been moved, deleted, or doesn’t exist.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-2 rounded-full border-2 border-white bg-transparent px-6 py-3 text-sm font-medium text-white transition-colors hover:bg-white hover:text-[var(--color-dark)]"
          >
            <span aria-hidden>←</span> Back to home
          </Link>
        </div>
      </section>
    </>
  );
};

export default Error;
