import React from "react";
import Breadcrumb from "../Common/Breadcrumb";
import Link from "next/link";

const MailSuccess = () => {
  return (
    <>
      <Breadcrumb title="Message sent" pages={["Success"]} />
      <section className="min-h-[60vh] overflow-hidden border-t border-gray-3 bg-gray-1 py-20">
        <div className="mx-auto flex max-w-[560px] flex-col items-center px-4 text-center sm:px-6">
          <span className="mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[var(--color-primary)] text-4xl text-white">
            ✓
          </span>
          <h2 className="font-zodiak text-2xl font-semibold text-dark sm:text-3xl">
            Message sent
          </h2>
          <p className="mt-3 text-dark-4">
            Thanks for getting in touch. We check email frequently and will respond as soon as we can.
          </p>
          <Link
            href="/"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-[var(--color-dark)] px-6 py-3 text-sm font-medium text-white hover:opacity-90"
          >
            Back to home
            <span aria-hidden>→</span>
          </Link>
        </div>
      </section>
    </>
  );
};

export default MailSuccess;
