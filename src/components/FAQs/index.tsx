"use client";
import React, { useState } from "react";
import Breadcrumb from "../Common/Breadcrumb";
import { siteConfig } from "@/config/site";

const FAQs = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "What does Daily Object sell?",
      answer: "Daily Object is an Indian online store selling electronics (mobile accessories, smart gadgets, computer accessories, home electronics), books, stationery, and garments for men, women, and kids. We focus on quality and honest pricing."
    },
    {
      question: "Do you deliver across India?",
      answer: "Yes. We ship to all states and union territories in India. Delivery times vary by location—usually 3–7 business days. Free delivery is available on orders above ₹499."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept UPI, debit and credit cards (Visa, MasterCard, RuPay), net banking, and other popular Indian payment options. All payments are processed securely."
    },
    {
      question: "What is your return policy?",
      answer: "We offer a 7-day easy return policy. Items should be unused and in original packaging with tags. For full details, visit our Refund Policy or Terms and Conditions page."
    },
    {
      question: "How do I track my order?",
      answer: "After your order is shipped, you'll get an email and SMS with a tracking link. You can track your order on our website or on the courier partner's site using that link."
    },
    {
      question: "Can I cancel or change my order?",
      answer: "You can cancel or change your order before it is shipped. Contact our support as soon as possible with your order number so we can try to update it."
    },
    {
      question: "What if I receive a damaged or wrong item?",
      answer: "If you receive a damaged or incorrect product, contact us within 48 hours with your order number and photos. We will arrange a replacement or refund as per our policy."
    },
    {
      question: "Does Daily Object offer good value?",
      answer: "Yes. Daily Object focuses on value for Indian customers. We offer quality electronics, books, stationery, and garments at honest, competitive prices."
    },
    {
      question: "How do I contact Daily Object?",
      answer: `Reach us by email at ${siteConfig.brand.email.general || siteConfig.brand.email.support}, phone at ${siteConfig.brand.phone}, or the contact form on our website. We're here to help during ${siteConfig.brand.businessHours}.`
    },
    {
      question: "Do you have offers or discounts?",
      answer: "We run regular promotions and seasonal sales. Check the homepage and product pages for current offers. You can also subscribe to our newsletter for updates on deals and new arrivals."
    },
    {
      question: "Is my data safe with Daily Object?",
      answer: "We take privacy seriously. Your personal and payment information is protected. For full details on how we collect, use, and protect your data, see our Privacy Policy and Cookie Policy."
    },
    {
      question: "Where is Daily Object based?",
      answer: `Daily Object is an Indian brand. Our registered address is ${siteConfig.brand.address.full}. For business hours and contact details, visit our Contact page.`
    }
  ];

  return (
    <>
      <Breadcrumb title={"FAQs"} pages={["FAQs"]} />

      <section className="overflow-hidden border-t border-gray-3/80 bg-gray-1 py-14 sm:py-18">
        <div className="mx-auto max-w-[1170px] w-full px-4 sm:px-6 md:px-8 xl:px-0">
          <div>
            <span className="mb-2 block h-0.5 w-12 bg-[var(--color-primary)]" />
            <h2 className="font-zodiak text-2xl font-semibold text-dark sm:text-3xl">
              Frequently asked questions
            </h2>
            <p className="mt-2 text-dark-4">
              Find answers about products, shipping, returns, and more. Can&apos;t find what you need? Contact us.
            </p>
          </div>

          <div className="mt-10 space-y-0">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="border-b border-gray-3 last:border-b-0"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="flex w-full items-center justify-between py-5 text-left transition-colors hover:bg-white/50"
                >
                  <span className="font-medium text-dark pr-4">
                    {faq.question}
                  </span>
                  <svg
                    className={`h-5 w-5 shrink-0 text-[var(--color-primary)] transition-transform ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                      />
                    </svg>
                  </button>
                  {openIndex === index && (
                  <div className="pb-5 pl-0 pr-4">
                    <p className="text-dark-4 leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-14 rounded-2xl border border-gray-3 bg-white p-6 sm:p-8">
            <h3 className="font-zodiak text-lg font-semibold text-dark">
              Still have questions?
            </h3>
            <p className="mt-2 text-dark-4">
              Our team is here to help.
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-[var(--color-primary)] px-6 py-2.5 text-sm font-medium text-white hover:opacity-90"
              >
                Contact us
              </a>
              <a
                href={`mailto:${siteConfig.brand.email.support}`}
                className="inline-flex items-center justify-center rounded-full border-2 border-[var(--color-primary)] px-6 py-2.5 text-sm font-medium text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white"
              >
                Email support
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FAQs;
