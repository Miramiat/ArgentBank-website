// src/components/Button.js
import React from 'react';

import '../designs/css/main.css';

function Button({ onClick, text }) {
  return (
    <button onClick={onClick} className="sign-in-button">
      {text}
    </button>
  );
}

export default Button;
