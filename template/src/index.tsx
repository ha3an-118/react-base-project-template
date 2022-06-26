import React , {Suspense} from 'react';
import { createRoot } from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import { AppContainer} from './Redux'
import Router from './Route';
import "./index.scss";

import './i18n';
import logo from './logo.svg';
const container = document.getElementById('root')!;
const root = createRoot(container);

// loading component for suspense fallback
const Loader = () => (
  <div className="App">
    <img src={logo} className="App-logo" alt="logo" />
    <div>loading...</div>
  </div>
);
root.render(
  <React.StrictMode>
    <Suspense fallback={<Loader />}>
    <AppContainer>
      <Router />
    </AppContainer>
    </Suspense>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
