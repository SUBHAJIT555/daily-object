import React from "react";
import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/config/site";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="overflow-hidden border-t-2 border-[var(--color-primary)] bg-[var(--color-dark)] text-white">
      <div className="mx-auto max-w-[1170px] px-4 sm:px-6 md:px-8 xl:px-0">
        {/* <!-- footer menu start --> */}
        <div className="flex flex-wrap xl:flex-nowrap gap-10 xl:gap-19 xl:justify-between pt-14 sm:pt-17.5 xl:pt-22.5 pb-10 xl:pb-15">
          <div className="max-w-[330px] w-full">
            <div className="mb-7.5">
              <Image
                src="/images/logo/logo.png"
                alt="Daily Object"
                width={152}
                height={135}
                className="mb-4 h-14 w-auto"
              />

            </div>

            <p className="mb-7.5 text-gray-400">
              Daily Object is your curated space for everyday essentials—electronics, books, stationery, and garments. Thoughtful selection, honest prices, and reliable delivery.
            </p>
          </div>

          <div className="w-full sm:w-auto">
            <h2 className="mb-7.5 text-sm font-semibold uppercase tracking-wider text-gray-400">
              Quick links
            </h2>

            <ul className="flex flex-col gap-3.5">
              <li>
                <Link className="text-white hover:text-[var(--color-primary-light-3)]" href="/">
                  Home
                </Link>
              </li>
              <li>
                <Link className="text-white hover:text-[var(--color-primary-light-3)]" href="/shop">
                  Shop
                </Link>
              </li>
              <li>
                <Link className="text-white hover:text-[var(--color-primary-light-3)]" href="/about">
                  About
                </Link>
              </li>
              <li>
                <Link className="text-white hover:text-[var(--color-primary-light-3)]" href="/contact">
                  Contact
                </Link>
              </li>
              <li>
                <Link className="text-white hover:text-[var(--color-primary-light-3)]" href="/cart">
                  Cart
                </Link>
              </li>
              <li>
                <Link className="text-white hover:text-[var(--color-primary-light-3)]" href="/faqs">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full sm:w-auto">
            <h2 className="mb-7.5 text-sm font-semibold uppercase tracking-wider text-gray-400">
              Legal
            </h2>

            <ul className="flex flex-col gap-3.5">
              <li>
                <Link className="text-white hover:text-[var(--color-primary-light-3)]" href="/privacy-policy">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link className="text-white hover:text-[var(--color-primary-light-3)]" href="/cookie-policy">
                  Cookie Policy
                </Link>
              </li>
              <li>
                <Link className="text-white hover:text-[var(--color-primary-light-3)]" href="/terms-of-use">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link className="text-white hover:text-[var(--color-primary-light-3)]" href="/refund-policy">
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full sm:w-auto">
            <h2 className="mb-7.5 text-sm font-semibold uppercase tracking-wider text-gray-400 lg:text-right">
              Contact
            </h2>

            <div className="flex flex-col gap-4 lg:text-right">
              <p className="text-gray-400">
                {siteConfig.brand.address.street}<br />
                {siteConfig.brand.address.city}, {siteConfig.brand.address.state} {siteConfig.brand.address.zip}
              </p>

              <div className="flex items-center gap-3 lg:justify-end">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[var(--color-primary-light-3)]"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                    <path d="M9 11a3 3 0 1 0 6 0a3 3 0 0 0 -6 0" />
                    <path d="M17.657 16.657l-4.243 4.243a2 2 0 0 1 -2.827 0l-4.244 -4.243a8 8 0 1 1 11.314 0" />
                  </svg>
                </span>
                <span className="text-white">{siteConfig.brand.address.location}</span>
              </div>

              <div className="flex items-start gap-3 lg:justify-end">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 22 22"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[var(--color-primary-light-3)]"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M9.11365 2.97913H12.8837C14.5684 2.97911 15.9027 2.9791 16.947 3.1195C18.0217 3.26399 18.8916 3.56843 19.5776 4.25443C20.2636 4.94043 20.568 5.8103 20.7125 6.88502C20.8529 7.9293 20.8529 9.26363 20.8529 10.9482V11.0517C20.8529 12.7363 20.8529 14.0706 20.7125 15.1149C20.568 16.1896 20.2636 17.0595 19.5776 17.7455C18.8916 18.4315 18.0217 18.7359 16.947 18.8804C15.9027 19.0208 14.5684 19.0208 12.8837 19.0208H9.11366C7.42904 19.0208 6.09471 19.0208 5.05043 18.8804C3.97571 18.7359 3.10584 18.4315 2.41984 17.7455C1.73384 17.0595 1.4294 16.1896 1.28491 15.1149C1.14451 14.0706 1.14452 12.7363 1.14453 11.0517V10.9482C1.14452 9.26363 1.14451 7.9293 1.28491 6.88502C1.4294 5.8103 1.73384 4.94043 2.41984 4.25443C3.10584 3.56843 3.97571 3.26399 5.05043 3.1195C6.09471 2.9791 7.42904 2.97911 9.11365 2.97913ZM5.23364 4.48224C4.31139 4.60623 3.78005 4.83876 3.39211 5.2267C3.00417 5.61465 2.77164 6.14599 2.64764 7.06824C2.52099 8.01026 2.51953 9.25204 2.51953 11C2.51953 12.7479 2.52099 13.9897 2.64764 14.9317C2.77164 15.8539 3.00417 16.3853 3.39211 16.7732C3.78005 17.1612 4.31139 17.3937 5.23364 17.5177C6.17567 17.6443 7.41745 17.6458 9.16536 17.6458H12.832C14.58 17.6458 15.8217 17.6443 16.7638 17.5177C17.686 17.3937 18.2173 17.1612 18.6053 16.7732C18.9932 16.3853 19.2258 15.8539 19.3498 14.9317C19.4764 13.9897 19.4779 12.7479 19.4779 11C19.4779 9.25204 19.4764 8.01026 19.3498 7.06824C19.2258 6.14599 18.9932 5.61465 18.6053 5.2267C18.2173 4.83876 17.686 4.60623 16.7638 4.48224C15.8217 4.35559 14.58 4.35413 12.832 4.35413H9.16537C7.41745 4.35413 6.17567 4.35559 5.23364 4.48224ZM4.97055 6.89317C5.21362 6.60148 5.64713 6.56207 5.93883 6.80514L7.91781 8.4543C8.77303 9.16697 9.36678 9.66017 9.86807 9.98258C10.3533 10.2947 10.6824 10.3994 10.9987 10.3994C11.315 10.3994 11.6441 10.2947 12.1293 9.98258C12.6306 9.66017 13.2244 9.16697 14.0796 8.4543L16.0586 6.80514C16.3503 6.56207 16.7838 6.60148 17.0269 6.89317C17.2699 7.18486 17.2305 7.61837 16.9388 7.86145L14.9254 9.53932C14.1129 10.2164 13.4543 10.7652 12.8731 11.139C12.2677 11.5284 11.678 11.7744 10.9987 11.7744C10.3194 11.7744 9.72973 11.5284 9.12428 11.139C8.54306 10.7652 7.88452 10.2164 7.07203 9.53933L5.05857 7.86145C4.76688 7.61837 4.72747 7.18486 4.97055 6.89317Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <a href={`mailto:${siteConfig.brand.email.general}`} className="text-white hover:text-[var(--color-primary-light-3)]">
                  {siteConfig.brand.email.general}
                </a>
              </div>

              <div className="flex items-start gap-3 lg:justify-end">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white/10">
                  <svg
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="text-[var(--color-primary-light-3)]"
                  >
                    <path
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M4.7177 3.0919C5.94388 1.80096 7.9721 2.04283 8.98569 3.47641L10.2467 5.25989C11.0574 6.40656 10.9889 8.00073 10.0214 9.0194L9.7765 9.27719C9.77582 9.27897 9.7751 9.2809 9.77436 9.28299C9.76142 9.31935 9.7287 9.43513 9.7609 9.65489C9.82765 10.1104 10.1793 11.0361 11.607 12.5392C13.0391 14.0469 13.9078 14.4023 14.3103 14.4677C14.484 14.4959 14.5748 14.4714 14.6038 14.4612L15.0124 14.031C15.8862 13.111 17.2485 12.9298 18.347 13.5621L20.2575 14.6617C21.8904 15.6016 22.2705 17.9008 20.9655 19.2747L19.545 20.7703C19.1016 21.2371 18.497 21.6355 17.75 21.7092C15.9261 21.8893 11.701 21.6548 7.27161 16.9915C3.13844 12.64 2.35326 8.85513 2.25401 7.00591L2.92011 6.97016L2.25401 7.00591C2.20497 6.09224 2.61224 5.30855 3.1481 4.7444L4.7177 3.0919ZM7.7609 4.34237C7.24855 3.61773 6.32812 3.57449 5.80528 4.12493L4.23568 5.77743C3.90429 6.12632 3.73042 6.52621 3.75185 6.92552C3.83289 8.43533 4.48307 11.8776 8.35919 15.9584C12.4234 20.2373 16.1676 20.3581 17.6026 20.2165C17.8864 20.1885 18.1783 20.031 18.4574 19.7373L19.8779 18.2417C20.4907 17.5965 20.3301 16.4342 19.5092 15.9618L17.5987 14.8621C17.086 14.567 16.4854 14.6582 16.1 15.064L15.6445 15.5435L15.1174 15.0428C15.6445 15.5435 15.6438 15.5442 15.6432 15.545L15.6417 15.5464L15.6388 15.5495L15.6324 15.556L15.6181 15.5701C15.6078 15.5801 15.5959 15.591 15.5825 15.6028C15.5556 15.6264 15.5223 15.6533 15.4824 15.6816C15.4022 15.7384 15.2955 15.8009 15.1606 15.8541C14.8846 15.963 14.5201 16.0214 14.0699 15.9483C13.1923 15.8058 12.0422 15.1755 10.5194 13.5722C8.99202 11.9642 8.40746 10.7645 8.27675 9.87234C8.21022 9.41827 8.26346 9.05468 8.36116 8.78011C8.40921 8.64508 8.46594 8.53742 8.51826 8.45566C8.54435 8.41489 8.56922 8.38075 8.5912 8.35298C8.60219 8.33909 8.61246 8.32678 8.62182 8.31603L8.63514 8.30104L8.64125 8.29441L8.64415 8.2913L8.64556 8.2898C8.64625 8.28907 8.64694 8.28835 9.17861 8.79333L8.64695 8.28834L8.93376 7.98637C9.3793 7.51731 9.44403 6.72292 9.02189 6.12586L7.7609 4.34237Z"
                      fill="currentColor"
                    />
                  </svg>
                </span>
                <div className="flex flex-col">
                  <span className="text-white">{siteConfig.brand.phone}</span>
                  <span className="text-sm text-gray-400">{siteConfig.brand.businessHours}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <!-- footer menu end --> */}
      </div>

      {/* <!-- footer bottom start --> */}
      <div className="border-t border-white/10 py-5 xl:py-7.5">
        <div className="mx-auto max-w-[1170px] px-4 sm:px-6 md:px-8 xl:px-0">
          <div className="flex flex-wrap items-center justify-between gap-5">
            <p className="text-gray-400">
              &copy; {year} {siteConfig.brand.name}. All rights reserved.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <p className="text-sm text-gray-400">We accept:</p>

              <div className="flex flex-wrap items-center gap-6">
                <p className="cursor-pointer" aria-label="payment system with visa card">
                  <Image
                    src="/images/payment/payment-01.svg"
                    alt="visa card"
                    width={66}
                    height={22}
                  />
                </p>
                <p className="cursor-pointer" aria-label="payment system with paypal">
                  <Image
                    src="/images/payment/payment-02.svg"
                    alt="paypal"
                    width={18}
                    height={21}
                  />
                </p>
                <p className="cursor-pointer" aria-label="payment system with master card">
                  <Image
                    src="/images/payment/payment-03.svg"
                    alt="master card"
                    width={33}
                    height={24}
                  />
                </p>
                <p className="cursor-pointer" aria-label="payment system with apple pay">
                  <Image
                    src="/images/payment/payment-04.svg"
                    alt="apple pay"
                    width={52.94}
                    height={22}
                  />
                </p>
                <p className="cursor-pointer" aria-label="payment system with google pay">
                  <Image
                    src="/images/payment/payment-05.svg"
                    alt="google pay"
                    width={56}
                    height={22}
                  />
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- footer bottom end --> */}
    </footer>
  );
};

export default Footer;
