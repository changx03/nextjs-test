import React from 'react';
import User from '../../components/User';

const authPage = () => (
  <div>
    <h1>The user page</h1>
    <User name="Luke" comment="Hello world" />
  </div>
);

authPage.getInitialProps = context => {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ isLogIn: true });
    }, 1000);
  });
  return promise;
};

export default authPage;
