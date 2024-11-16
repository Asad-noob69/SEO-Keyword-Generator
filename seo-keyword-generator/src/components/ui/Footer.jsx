import React from "react";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full bg-transparent flex items-center justify-center py-2 z-10 md:justify-start">
      <div className="flex gap-8">
        {/* GitHub */}
        <a href="https://github.com/Asad-noob69" target="_blank" rel="noopener noreferrer">
          <img
            src="/images/github (1).png"
            alt="GitHub Icon"
            className="w-10 h-10 object-contain"
          />
        </a>
        
        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/asadali1234/" target="_blank" rel="noopener noreferrer">
          <img
            src="/images/linkedin.png"
            alt="LinkedIn Icon"
            className="w-10 h-10 object-contain"
          />
        </a>
        
        {/* Instagram */}
        <a href="https://www.instagram.com/asadaliabbasi_69/" target="_blank" rel="noopener noreferrer">
          <img
            src="/images/instagram.png"
            alt="Instagram Icon"
            className="w-10 h-10 object-contain"
          />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
