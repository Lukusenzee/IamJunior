import localFont from "next/font/local";
import "./globals.css";
import NavBar from "@/Components/NavBar";
import Footer from "@/Components/Footer";


export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body >
        
        <NavBar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
