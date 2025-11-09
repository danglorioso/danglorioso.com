import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

export default function SocialIcons() {
  return (
    <div className="flex space-x-5">
        {/* LinkedIn */}
        <a
        href="/linkedin"
        target="_blank" // Open in new tab
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-white hover:scale-105 transition-colors duration-300 ease-in-out"
        aria-label="LinkedIn"
        >
        <FaLinkedin className="w-7 h-7" />
        </a>
        {/* Github */}
        <a
        href="/github"
        target="_blank" // Open in new tab
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-white hover:scale-105 transition-colors duration-300 ease-in-out"
        aria-label="GitHub"
        >
        <FaGithub className="w-7 h-7" />
        </a>
        {/* Email */}
        <a
        href="/mail"
        target="_blank" // Open in new tab
        rel="noopener noreferrer"
        className="text-gray-300 hover:text-white hover:scale-105 transition-colors duration-300 ease-in-out"
        aria-label="Email"
        >
        <FaEnvelope className="w-7 h-7" />
        </a>
    </div>
  );
}
