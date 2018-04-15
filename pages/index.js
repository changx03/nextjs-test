import React, { Component, Fragment } from 'react';
import Link from 'next/link';
import Router from 'next/router';

class IndexPage extends Component {
  static async getInitialProps(context) {
    console.log(context);
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          appName: 'My Next.js app',
        });
      }, 1000);
    });
    return promise;
  }

  render() {
    return (
      <Fragment>
        <h1>The main page of {this.props.appName}</h1>
        <div>
          <Link href="/auth">
            <a>Auth</a>
          </Link>
        </div>
        <button
          onClick={() => {
            Router.push('/auth');
          }}
        >
          Go to auth
        </button>
      </Fragment>
    );
  }
}

export default IndexPage;
