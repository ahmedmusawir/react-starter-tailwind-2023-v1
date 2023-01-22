import React from 'react';

function Box({ children, twClasses }) {
  return (
    <div
      className={`border-dotted border-2 border-orange-400 p-5 ${twClasses}`}
    >
      {children ? children : 'This is a Box container. Must have children'}
    </div>
  );
}

export default Box;
