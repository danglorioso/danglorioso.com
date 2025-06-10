import React from "react";

const Footer: React.FC = () => {
  return (
<footer className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-lg text-center py-3 border-t border-gray-800 z-50">
      <p className="text-md text-gray-400">
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
      {/* <p className="text-xs text-gray-500 mt-1">Copyright © 2025. All rights reserved.</p> */}
    </footer>
  );
};

export default Footer;
