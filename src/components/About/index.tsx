import React from "react";
import Breadcrumb from "../Common/Breadcrumb";
import { siteConfig } from "@/config/site";
import Link from "next/link";

const About = () => {
  return (
    <>
      <Breadcrumb title="About Us" pages={["About Us"]} />

      {/* Full-width intro strip */}
      <section className="bg-[var(--color-dark)] py-16 sm:py-20">
        <div className="mx-auto max-w-[1170px] px-4 sm:px-6 md:px-8 xl:px-0">
          <h1 className="font-zodiak text-3xl font-semibold text-white sm:text-4xl md:text-5xl">
            Welcome to {siteConfig.brand.name}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-400">
            Daily Object is your trusted everyday store for electronics, stationery, books, and garments. We focus on quality, honest pricing, and reliable service for customers across India.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-[1170px] px-4 py-14 sm:px-6 sm:py-18 md:px-8 xl:px-0">
        <span className="mb-2 block h-0.5 w-12 bg-[var(--color-primary)]" />
        <h2 className="font-zodiak text-2xl font-semibold text-dark sm:text-3xl">
          Our story
        </h2>
        <div className="mt-8 max-w-3xl space-y-6 text-dark-4">
          <p>
            Daily Object started with a simple idea: a one-stop shop for everyday needs—electronics, stationery, books, and fashion—at honest prices. We built our catalog and service around what Indian customers want: quality products, clear pricing, and a team that puts customers first.
          </p>
          <p>
            We partner with trusted suppliers to offer mobile accessories, smart gadgets, computer and home electronics, books, stationery, and apparel for the whole family. Every item is selected with Indian homes and budgets in mind, so you get real value without compromise.
          </p>
          <p>
            Daily Object is built for India: reliable delivery nationwide, straightforward returns, secure payments including UPI and cards, and support when you need it. We’re here to serve you, one order at a time.
          </p>
        </div>
      </section>

      {/* Mission & Values: two full-width strips */}
      <section className="border-y border-gray-3 bg-gray-1 py-14 sm:py-18">
        <div className="mx-auto max-w-[1170px] px-4 sm:px-6 md:px-8 xl:px-0">
          <div className="grid gap-12 md:grid-cols-2">
            <div className="border-l-4 border-[var(--color-primary)] pl-6">
              <h3 className="font-zodiak text-xl font-semibold text-dark">Our mission</h3>
              <p className="mt-3 text-dark-4">
                To be your trusted everyday store—offering quality electronics, stationery, books, and garments with honest pricing, safe payments, and service that puts customers first.
              </p>
            </div>
            <div className="border-l-4 border-[var(--color-primary)] pl-6">
              <h3 className="font-zodiak text-xl font-semibold text-dark">Our values</h3>
              <ul className="mt-3 list-inside list-disc space-y-2 text-dark-4">
                <li>Built for real needs—products and service designed for our customers</li>
                <li>Quality and value—curated range at honest prices</li>
                <li>Transparency and trust—clear pricing, no hidden charges</li>
                <li>Reliable delivery and easy returns across India</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose: simple list with accent */}
      <section className="mx-auto max-w-[1170px] px-4 py-14 sm:px-6 sm:py-18 md:px-8 xl:px-0">
        <span className="mb-2 block h-0.5 w-12 bg-[var(--color-primary)]" />
        <h2 className="font-zodiak text-2xl font-semibold text-dark sm:text-3xl">
          Why choose Daily Object?
        </h2>
        <ul className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { title: "Quality guaranteed", text: "Every product meets Daily Object’s quality standards." },
            { title: "Easy returns", text: "7-day return policy and simple process for your peace of mind." },
            { title: "Delivery across India", text: "We ship nationwide. Free delivery on orders above ₹499." },
            { title: "Secure payments", text: "Pay safely with UPI, cards, and more. Your data is protected." },
            { title: "Customer support", text: "Our team is here to help with orders, returns, or any questions." },
            { title: "Honest prices", text: "Fair value for every customer. Clear pricing on every product." },
          ].map((item, i) => (
            <li key={i} className="border-l-4 border-gray-4 pl-4">
              <h3 className="font-semibold text-dark">{item.title}</h3>
              <p className="mt-1 text-sm text-dark-4">{item.text}</p>
            </li>
          ))}
        </ul>
      </section>

      {/* Get in touch: horizontal bar */}
      <section className="border-t border-gray-3 bg-gray-1 py-14 sm:py-18">
        <div className="mx-auto max-w-[1170px] px-4 sm:px-6 md:px-8 xl:px-0">
          <h2 className="font-zodiak text-2xl font-semibold text-dark sm:text-3xl">
            Get in touch
          </h2>
          <p className="mt-3 max-w-xl text-dark-4">
            We’d love to hear from you. The Daily Object team is here to help—reach out anytime.
          </p>
          <div className="mt-10 grid gap-8 sm:grid-cols-3">
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-dark-4">Email</p>
              <a href={`mailto:${siteConfig.brand.email.general}`} className="mt-1 block font-medium text-[var(--color-primary)] hover:underline">
                {siteConfig.brand.email.general}
              </a>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-dark-4">Phone</p>
              <a href={`tel:${siteConfig.brand.phone.replace(/\s/g, "")}`} className="mt-1 block font-medium text-dark hover:underline">
                {siteConfig.brand.phone}
              </a>
            </div>
            <div>
              <p className="text-xs font-medium uppercase tracking-wider text-dark-4">Address</p>
              <p className="mt-1 text-dark">{siteConfig.brand.address.full}</p>
              <p className="mt-1 text-sm text-dark-4">{siteConfig.brand.businessHours}</p>
            </div>
          </div>
          <Link
            href="/contact"
            className="mt-10 inline-block rounded-full border-2 border-[var(--color-primary)] bg-transparent px-6 py-3 text-sm font-medium text-[var(--color-primary)] transition-colors hover:bg-[var(--color-primary)] hover:text-white"
          >
            Contact us
          </Link>
        </div>
      </section>
    </>
  );
};

export default About;
