import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function SocialIcons() {
  return (
    <div className="flex flex-row justify-end gap-1">
        {/* GitHub */}
        <a
          href="/github"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg text-gray-100 hover:text-white hover:bg-slate-800/60 transition duration-300"
          aria-label="GitHub"
        >
          <FaGithub className="w-7 h-7" />
        </a>

        {/* LinkedIn */}
        <a
          href="/linkedin"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-lg text-gray-100 hover:text-white hover:bg-slate-800/60 transition duration-300"
          aria-label="LinkedIn"
        >
          <FaLinkedin className="w-7 h-7" />
        </a>
      </div>
  );
}
