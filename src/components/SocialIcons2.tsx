import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function SocialIcons() {
  return (
    <div className="flex items-center space-x-1">
      <a
        href="/github"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-lg text-white-400 hover:text-white hover:bg-slate-800/60 hover:scale-110 transition-transform duration-200"
        aria-label="GitHub"
      >
        <FaGithub className="w-7 h-7" />
      </a>
      <a
        href="/linkedin"
        target="_blank"
        rel="noopener noreferrer"
        className="p-2 rounded-lg text-white-400 hover:text-white hover:bg-slate-800/60 hover:scale-110 transition-transform duration-200 "
        aria-label="LinkedIn"
      >
        <FaLinkedin className="w-7 h-7" />
      </a>
    </div>
  );
}
