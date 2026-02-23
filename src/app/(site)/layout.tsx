"use client";
import { useState, useEffect } from "react";
import { DM_Sans } from "next/font/google";
import "../css/zodiak-font.css";
import "../css/style.css";
import Header from "../../components/Header";
import Footer from "../../components/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

import { ModalProvider } from "../context/QuickViewModalContext";
import { CartModalProvider } from "../context/CartSidebarModalContext";
import { ReduxProvider } from "@/redux/provider";
import { ThemeProvider } from "@/context/ThemeContext";
import QuickViewModal from "@/components/Common/QuickViewModal";
import CartSidebarModal from "@/components/Common/CartSidebarModal";
import { PreviewSliderProvider } from "../context/PreviewSliderContext";
import PreviewSliderModal from "@/components/Common/PreviewSlider";

import ScrollToTop from "@/components/Common/ScrollToTop";
import PreLoader from "@/components/Common/PreLoader";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <html lang="en" suppressHydrationWarning={true} className={dmSans.variable}>
      <body className="min-h-screen bg-gray-1">
        {loading ? (
          <PreLoader />
        ) : (
          <>
            <ThemeProvider>
              <ReduxProvider>
                <CartModalProvider>
                  <ModalProvider>
                    <PreviewSliderProvider>
                      <Header />
                      {children}

                      <QuickViewModal />
                      <CartSidebarModal />
                      <PreviewSliderModal />
                    </PreviewSliderProvider>
                  </ModalProvider>
                </CartModalProvider>
              </ReduxProvider>
              <ScrollToTop />
              <Footer />
            </ThemeProvider>
          </>
        )}
      </body>
    </html>
  );
}
