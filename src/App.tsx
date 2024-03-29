import React from "react";
import { BrowserRouter, Routes, Route, useRoutes } from 'react-router-dom';
import routes from "./Routes";
import './App.style.css';

const App = () => {
  const appContent = useRoutes(routes); 
  return appContent;
};
export default App;