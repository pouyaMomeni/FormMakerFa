import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/css/index.css'
import App from './App';
import { BrowserRouter as Router } from "react-router-dom";
import { QueryClient, QueryClientProvider } from 'react-query'
import { DndProvider } from 'react-dnd';
import {HTML5Backend } from 'react-dnd-html5-backend'
const root = ReactDOM.createRoot(document.getElementById('root'));
const queryClient = new QueryClient();
root.render(
  <QueryClientProvider client={queryClient}>
    <DndProvider backend={HTML5Backend}>
    <Router>
    <App />
   </Router>
   </DndProvider>
  </QueryClientProvider>

);

