import { DM_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import SmoothScroll from "@/components/ui/smooth-scroll";

const DMSans = DM_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Remote Worker Pontianak",
  description:
    "A Collaborative & Supportive Circle for All Remote Workers andProfessionals in Pontianak",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={DMSans.className}>
        <SmoothScroll>
          <Navbar />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
