export const siteConfig = {
  url: "https://daily-object.com",
  brand: {
    name: "Daily Object",
    domain: "daily-object.com",
    url: "https://daily-object.com",
    tagline: "Everyday essentials, just for you",
    email: {
      general: "info@daily-object.com",
      support: "info@daily-object.com",
      privacy: "info@daily-object.com",
      legal: "info@daily-object.com",
    },
    phone: "+91 98765 43210",
    address: {
      street: "12, MG Road",
      city: "Bengaluru",
      state: "Karnataka",
      zip: "560001",
      full: "12, MG Road, Bengaluru, Karnataka 560001, India",
      location: "Bengaluru, Karnataka, India",
    },
    businessHours: "Mon - Sat: 10 AM - 6 PM",
  },
  seo: {
    defaultTitle:
      "Daily Object | Online Shopping for Electronics, Books, Stationery & Garments",
    titleTemplate: "%s | Daily Object",
    defaultDescription:
      "Daily Object is India's trusted online store for electronics, books, stationery, and garments. Honest prices, fast delivery across India, and support made for Indian shoppers.",
    keywords: [
      "Daily Object",
      "daily-object",
      "online shopping India",
      "electronics",
      "books",
      "stationery",
      "garments",
      "e-commerce India",
    ],
  },
} as const;
