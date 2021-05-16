import React from 'react';

const Alert = ({ children }) => {
  return (
    <li className={'alert'}>
      {children}
      <span>
        <i className="fas fa-exclamation-triangle"></i>
      </span>
    </li>
  );
};

export default Alert;
