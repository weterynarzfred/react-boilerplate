import React from 'react';
import ReactDOM from 'react-dom/client';

import '@/scss/index.scss';
import App from "@/components/App";
import StateProvider from "@/components/StateProvider";

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <StateProvider>
      <App />
    </StateProvider>
  </React.StrictMode>,
);
