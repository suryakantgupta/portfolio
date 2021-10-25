import React from 'react';
import logo from './logo.svg';
import './App.css';
import { renderRoutes } from 'react-router-config';
import { BrowserRouter } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import getRoutes from './config/routes';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        {renderRoutes(getRoutes())}
      </Layout>
    </BrowserRouter>
  );
}

export default App;
