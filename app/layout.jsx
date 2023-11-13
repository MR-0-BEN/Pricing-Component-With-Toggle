import { Montserrat } from "next/font/google";
import "./globals.css";
import { Container } from "postcss";

const montserrat = Montserrat({
  weight: "700",
  subsets: ["latin"],
});

export const metadata = {
  title: "Pricing component with toggle",
  description:
    "Our Pricing Component with toggle feature simplifies plan selection, offering a seamless user experience. Easily switch between options to find the ideal pricing plan, enhancing decision-making and user satisfaction on your website.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="w-[100vw] overflow-x-hidden">
      <body className={`${montserrat.className} bg-[#f6f6fe] box-border text-[15px]  overflow-x-hidden`}>
        {children}
      </body>
    </html>
  );
}
