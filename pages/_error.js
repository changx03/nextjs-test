import React from 'react';
import Link from 'next/link';
import Router from 'next/router';

const errorPage = () => (
  <div>
    <h1>404 Page not found!</h1>
    <Link href="/">Go to home page</Link>
  </div>
);

export default errorPage;
