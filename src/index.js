import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import {
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query';
import { Provider } from 'react-redux';
import store from './redux/store';


const queryClient = new QueryClient();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <QueryClientProvider client={queryClient}>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </QueryClientProvider>
);

