import React from "react";
import SocialIcons from "./SocialIcons3";

export default function Footer() {
  return (
    <footer className="w-full mt-8 py-6 border-t border-gray-800 z-50 mt-auto bg-slate-900/80">
      <div className="max-w-5xl mx-auto px-8">
        
        {/* MOBILE - Stack with social icons on top */}
        <div className="sm:hidden flex flex-col gap-4 items-center">
          {/* Mobile Social Icons at top */}
            <SocialIcons />

          {/* Copyright */}
          <p className="text-md text-gray-300 text-center">
            Copyright © {new Date().getFullYear()}. 
            <br></br> 
            Created by{" "}
            <a
              href="https://danglorioso.com"
              target="" // Open in same tab
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-300 transition duration-300 ease-in-out"
            >
              Dan Glorioso
            </a>
            .
          </p>
          
          {/* Status Links */}
          <div className="flex justify-center">
            <p className="text-sm text-gray-500 flex items-center">
              <a
                href="https://status.danglorioso.com"
                target="" // Open in same tab
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-300 transition duration-300 ease-in-out"
              >
                System Status
              </a>
              <span className="mx-2 text-gray-600">•</span>
              <a
                href="/contact"
                target="" // Open in same tab
                className="text-gray-400 hover:text-gray-300 transition duration-300 ease-in-out"
              >
                Contact
              </a>
            </p>
          </div>
        </div>

        {/* DESKTOP - Text left, icons right */}
        <div className="hidden sm:flex flex-row items-center justify-between">
          {/* Top row: Copyright left, Social icons right */}
          <div className="flex flex-col">
            <p className="text-md text-gray-300">
              Copyright © {new Date().getFullYear()}. Created by{" "}
              <a
                href="/"
                target="" // Open in same tab
                rel="noopener noreferrer"
                className="text-accent-primary hover:text-accent-secondary transition-all duration-300 ease-in-out"
              >
                Dan Glorioso
              </a>
              .
            </p>

            {/* Bottom row text: Links left-aligned */}
            <p className="text-sm text-gray-500">
              <a
                href="https://status.danglorioso.com"
                target="" // Open in same tab
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-300 transition-colors duration-300 ease-in-out"
              >
                System Status
              </a>
              <span className="mx-2 text-gray-600">•</span>
              <a
                href="/contact"
                target="" // Open in same tab
                className="text-gray-400 hover:text-gray-300 transition-colors duration-300 ease-in-out"
              >
                Contact
              </a>
            </p>
          </div>

          {/* Social Icons */}
          <SocialIcons />
        </div>
      </div>
    </footer>
  );
}
