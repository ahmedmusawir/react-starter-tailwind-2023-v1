import React from 'react';

function Main({ childern }) {
  return (
    <main className="min-w-full border-solid border-4 border-indigo-600 flex-grow">
      {childern}
    </main>
  );
}

export default Main;
