import React from 'react';

function Header({ childern, twClasses }) {
  return (
    <header
      className={`min-w-full border-solid border-2 h-10 min-h-max ${twClasses}`}
    >
      {childern}
    </header>
  );
}

export default Header;
