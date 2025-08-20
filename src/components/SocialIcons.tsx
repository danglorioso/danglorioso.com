import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function SocialIcons() {
  return (
    <div className="flex items-center space-x-3">
      <a
        href="https://github.com/danglorioso"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-slate-800/60 transition-all duration-200 hover:scale-110"
        aria-label="GitHub"
      >
        <FaGithub className="w-5 h-5" />
      </a>
      <a
        href="https://linkedin.com/in/dan-glorioso"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-lg text-gray-400 hover:text-white hover:bg-slate-800/60 transition-all duration-200 hover:scale-110"
        aria-label="LinkedIn"
      >
        <FaLinkedin className="w-5 h-5" />
      </a>
    </div>
  );
}
