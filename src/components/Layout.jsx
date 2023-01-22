import React from 'react';

function Layout({ children }) {
  return <section className="flex flex-col min-h-screen">{children}</section>;
}

export default Layout;
