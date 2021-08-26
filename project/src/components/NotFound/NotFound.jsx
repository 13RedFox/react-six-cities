import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div>
      <h1>
        404 <br />
        <small>Not Found</small>
      </h1>
      <Link to="/"> Go to main page</Link>
    </div>
  );
}

export default NotFound;
