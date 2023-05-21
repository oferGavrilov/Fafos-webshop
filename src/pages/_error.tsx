'use client' 

import React , { useEffect }from 'react';

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
      <button type='button'
        onClick={
          () => reset()
        }
      >
        Try again
      </button>
    </div>
  );
}

export default React.memo(Error)
