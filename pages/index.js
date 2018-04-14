import React from 'react';
import Link from 'next/link';
import Router from 'next/router';

const indexPage = () => (
  <div>
    <h1>The main page</h1>
    <div><Link href="/auth">Auth</Link></div>
    <button onClick={() => { Router.push('/auth'); }}>Go to auth</button>
  </div>
);

export default indexPage;
