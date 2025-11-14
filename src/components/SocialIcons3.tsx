import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function SocialIcons() {
  return (
    <div className="flex flex-row justify-end gap-4">
        {/* LinkedIn */}
        <a
          href="/linkedin"
          target="_blank" // Open in new tab
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white hover:scale-105 transition duration-300"
          aria-label="LinkedIn"
          >
          <FaLinkedin className="w-7 h-7" />
        </a>
        
        {/* Github */}
        <a
          href="/github"
          target="_blank" // Open in new tab
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white hover:scale-105 transition duration-300"
          aria-label="GitHub"
          >
          <FaGithub className="w-7 h-7" />
        </a>
        
        {/* Email */}
        <a
          href="/mail"
          target="_blank" // Open in new tab
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white hover:scale-105 transition duration-300"
          aria-label="Email"
          >
          <FaEnvelope className="w-7 h-7" />
        </a>
    </div>
  );
}
