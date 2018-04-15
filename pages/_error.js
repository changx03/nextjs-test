import React from 'react';
import Link from 'next/link';
import Router from 'next/router';

const errorPage = () => (
  <div>
    <h1>404 Page not found!</h1>
    <Link href="/"><a>Go to home page</a></Link>
  </div>
);

export default errorPage;
