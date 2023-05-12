'use client'; // Error components must be Client Components

import React, { memo } from 'react';
import { useEffect } from 'react';

function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error.message, new Date());
  }, [error]);

  return (
    <div>
      <h2>Something went wrong!</h2>
      <button
        onClick={
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}

export default memo(Error)