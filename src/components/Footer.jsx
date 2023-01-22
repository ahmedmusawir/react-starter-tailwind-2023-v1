import React from 'react';

function Footer({ childern, twClasses }) {
  return (
    <footer className={`min-w-full border-solid border-2 h-10 ${twClasses}`}>
      {childern}
    </footer>
  );
}

export default Footer;
