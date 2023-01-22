import React, { useEffect } from 'react';
import PropTypes from 'prop-types';

function Page({ children, pageTitle, twClasses, FULL }) {
  // Setting up mandatory Page Title in the browser
  useEffect(() => {
    document.title = `${pageTitle} | Tailwind `;
  }, [pageTitle]);

  return (
    <>
      {FULL && (
        <section
          className={`border-solid border-2 min-h-full min-w-full ${twClasses}`}
        >
          {children ? children : 'This is a Page container. Must have children'}
        </section>
      )}
      {!FULL && (
        <section
          className={`border-solid border-2 min-h-full lg:w-11/12 xl:w-4/5 ${twClasses}`}
        >
          {children ? children : 'This is a Page container. Must have children'}
        </section>
      )}
      {/* LG: 1024+ IS SET TO 91% WIDTH (w-11/12) */}
      {/* XL: 1280+ IS SET TO 80% WIDTH (w-4/5) */}
    </>
  );
}

Page.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  FULL: PropTypes.bool,
  pageTitle: PropTypes.string.isRequired,
};

export default Page;
