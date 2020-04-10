import React from 'react';
import './index.scss';

export const App = () => (
  <div className="main">
    <div>
      <h1>React-boilerplate</h1>
    </div>
    <div>
      <p>A simple react-boilerplate without using create-react-app.</p>
      <span>
        <p>It contains:</p>
        <ul>
          <li>Parcel</li>
          <li>Prettier</li>
          <li>Eslint</li>
        </ul>
      </span>
      <span className="author">
        <p>
          Created by:{' '}
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/m-ossolinski"
          >
            m-ossolinski
          </a>
        </p>
      </span>
    </div>
  </div>
);
