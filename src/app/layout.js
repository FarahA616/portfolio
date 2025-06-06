import { Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar"; 
import Footer from "@/components/Footer";

export const metadata = {
  title: "My Portfolio",
  description: "Welcome to my portfolio website.",
};

const roboto = Roboto({
  weight: ["400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        {/* ✅ Render Navbar at the top of every page */}
        <Navbar
          options={[
            { path: "/", label: "Home" },
            { path: "/about", label: "About" },
            { path: "/projects", label: "Projects" },
            { path: "/uses", label: "Uses" },
          ]}
        />
        <div className="flex flex-col min-h-screen">
          <main className="flex-grow">{children}</main>
          <Footer
            links={[
              { title: "Home", url: "/" },
              { title: "About", url: "/about" },
              { title: "Projects", url: "/projects" },
              { title: "Contact", url: "/contact" },
            ]}
            year={`© ${new Date().getFullYear()} Farah Alabdulrazzak. All rights reserved.`}
          />
        </div>
      </body>
    </html>
  );
}