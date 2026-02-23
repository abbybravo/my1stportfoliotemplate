"use client";

import "./globals.css";
import { ThemeProvider } from "./components/ThemeContext";
import Navbar from "./components/Navbar";
import { ReactNode } from "react";

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) { 

  return (
    <html lang="en">
        <body className= "bg-blue-200 dark:bg-black">
          <ThemeProvider>
            <Navbar />
            <main className="flex min-h-screen flex-col mt-18 md:mt-22">
              {children}
            </main>
          </ThemeProvider>
        </body>
    </html>
  );
}