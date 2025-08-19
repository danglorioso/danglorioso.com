import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Footer: React.FC = () => {
  return (
<footer className="w-full py-6 border-t border-gray-800 z-50 mt-auto bg-slate-900/80">
      <div className="max-w-7xl mx-auto px-8">
        {/* Top row: Copyright left, Social icons right */}
        <div className="flex justify-between items-center mb-1">
          <p className="text-md text-gray-300">
            Copyright © {new Date().getFullYear()}. Created by{" "}
            <a
              href="https://danglorioso.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700"
            >
              Dan Glorioso
            </a>
            .
          </p>
          
          {/* Social Icons */}
          <div className="flex space-x-5">
            <a
              href="https://github.com/danglorioso"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaGithub className="w-7 h-7" />
            </a>
            <a
              href="https://linkedin.com/in/dan-glorioso"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <FaLinkedin className="w-7 h-7" />
            </a>
          </div>
        </div>
        
        {/* Bottom row: Links left-aligned */}
        <p className="text-sm text-gray-500">
          <a
            href="https://status.danglorioso.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-gray-300 transition-colors"
          >
            System Status
          </a>
          <span className="mx-2 text-gray-600">•</span>
          <a
            href="mailto:dan@danglorioso.com"
            className="text-gray-400 hover:text-gray-300 transition-colors"
          >
            Contact
          </a>
        </p>
      </div>
      {/* <p className="text-xs text-gray-500 mt-1">Copyright © 2025. All rights reserved.</p> */}
    </footer>
  );
};

export default Footer;
