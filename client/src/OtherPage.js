import React from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div>
      Just Another Useless Page

      <Link to="/">Go Back Home</Link>
    </div>
  );
};