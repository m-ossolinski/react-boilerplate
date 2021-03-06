import React, { FunctionComponent } from 'react';
import './index.scss';

export const App: FunctionComponent = () => (
  <div className="main">
    <div>
      <h1>React-TS-boilerplate</h1>
    </div>
    <div>
      <p>A simple React-Typescript-boilerplate without using create-react-app.</p>
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
