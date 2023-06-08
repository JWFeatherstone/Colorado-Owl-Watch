import React from 'react';
import Header from '../Header/Header';
import './Error.css';

const Error = () => {
    return (
      <>
        <Header />
        <main className="error-main">
          <div className="error-msg">
            <h2 className="error-header">The owls have flown off somewhere.</h2>
            <h3 className="error-sub">(there was an unexpected server error, please try that again.)</h3>
          </div>
        </main>
      </>
    )
}

export default Error;