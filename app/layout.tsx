import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { 
  ClerkProvider,
  SignInButton,
  SignedIn,
  SignedOut
} from "@clerk/nextjs";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Car Rental",
  description: "Created by Samin Thapa",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
          <SignedOut>
          <div className="landing-container">
              <div className="content">
                <h1 className="landing-title">Welcome to Premium Car Rentals</h1>
                <p className="landing-description">
                  Rent your favorite car with just a click!
                </p>
                <SignInButton />
                
              </div>
            </div>
          </SignedOut>
          <SignedIn>
            <NavBar/>
            {children}
            <Footer/>
          </SignedIn>
        
       
      </body>
    </html>
    </ClerkProvider>
  );
}
