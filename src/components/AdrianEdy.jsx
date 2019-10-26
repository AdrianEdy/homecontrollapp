import React, { useState } from 'react';

function AdrianEdy() {
  const [ fullName, showFullName ] = useState(false);

  return (
    <div>
        <h3>
            Hello, my name is { fullName ? "Adrian" : "I Gede Adrian Edy Pratama" }
        </h3>
        <button onClick={ () => showFullName(!fullName) }>
            { fullName ? "Show" : "Hide" } Full Name
        </button>
    </div>
  );
}

export default AdrianEdy;
