"use client"; // Mark this component as client-side

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./components/NavBar"; // Import NavBar
import { usePathname } from "next/navigation"; // Use to get the current path

const geistSans = Geist({
    variable: "--font-geist-sans",
    subsets: ["latin"],
});

const geistMono = Geist_Mono({
    variable: "--font-geist-mono",
    subsets: ["latin"],
});

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    const currentPath = usePathname(); // Get the current path

    return (
        <html lang="en">
        <head>
            <title>Create Pets application</title>
        </head>
        <body
            className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
        {/* Conditionally render NavBar based on the current path */}
        {currentPath !== "/" && <NavBar />} {/* Hide NavBar on Home page */}

        {/* Main content (children) */}
        {children}

        {/* Footer */}
        <footer className="bg-gray-500 text-white text-center py-0.5 ">
            <p>&copy; 2025 Pet Website. All rights reserved.</p>
        </footer>
        </body>
        </html>
    );
}
