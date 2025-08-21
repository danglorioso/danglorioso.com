import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="w-full py-6 border-t border-gray-800 z-50 mt-auto bg-slate-900/80">
      <div className="max-w-7xl mx-auto px-8">
        
        {/* Mobile Layout: Stack with social icons at bottom */}
        <div className="sm:hidden flex flex-col space-y-3">
          {/* Copyright */}
          <p className="text-md text-gray-300 text-center">
            Copyright © {new Date().getFullYear()}. Created by{" "}
            <a
              href="https://danglorioso.com"
              target="" // Open in same tab
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-300 transition-all duration-300 ease-in-out"
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
                target="_blank" // Open in new tab
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-gray-300 transition-colors duration-300 ease-in-out"
              >
                System Status
              </a>
              <span className="mx-2 text-gray-600">•</span>
              <a
                href="mailto:dan@danglorioso.com"
                target="_blank" // Open in new tab
                className="text-gray-400 hover:text-gray-300 transition-colors duration-300 ease-in-out"
              >
                Contact
              </a>
            </p>
          </div>
          
          {/* Social Icons at bottom on mobile */}
          <div className="flex justify-center space-x-4">
            <a
              href="mailto:dan@danglorioso.com"
              target="_blank" // Open in new tab
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors duration-300 ease-in-out"
              aria-label="Email"
            >
              <FaEnvelope className="w-6 h-6" />
            </a>
            <a
              href="https://danglorioso.com/linkedin"
              target="_blank" // Open in new tab
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white hover:scale-105 transition-colors duration-300 ease-in-out"
              aria-label="LinkedIn"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a
              href="https://danglorioso.com/github"
              target="_blank" // Open in new tab
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white hover:scale-105 transition-colors duration-300 ease-in-out"
              aria-label="GitHub"
            >
              <FaGithub className="w-6 h-6" />
            </a>
          </div>
        </div>

        {/* Desktop Layout: Original design */}
        <div className="hidden sm:block">
          {/* Top row: Copyright left, Social icons right */}
          <div className="flex justify-between items-center mb-1">
            <p className="text-md text-gray-300">
              Copyright © {new Date().getFullYear()}. Created by{" "}
              <a
                href="/"
                target="" // Open in same tab
                rel="noopener noreferrer"
                className="text-blue-500 hover:text-blue-300 transition-all duration-300 ease-in-out"
              >
                Dan Glorioso
              </a>
              .
            </p>
            
            {/* Social Icons */}
            <div className="flex space-x-5">
              <a
                href="/mail"
                target="_blank" // Open in new tab
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors duration-300 ease-in-out"
                aria-label="Email"
              >
                <FaEnvelope className="w-7 h-7" />
              </a>
              <a
                href="/linkedin"
                target="_blank" // Open in new tab
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white hover:scale-105 transition-colors duration-300 ease-in-out"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-7 h-7" />
              </a>
              <a
                href="/github"
                target="_blank" // Open in new tab
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white hover:scale-105 transition-colors duration-300 ease-in-out"
                aria-label="GitHub"
              >
                <FaGithub className="w-7 h-7" />
              </a>
            </div>
          </div>
          
          {/* Bottom row text: Links left-aligned */}
          <p className="text-sm text-gray-500">
            <a
              href="https://status.danglorioso.com"
              target="_blank" // Open in new tab
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
      </div>
    </footer>
  );
}
