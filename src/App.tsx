import React from 'react';
import BeautifulSpreadsheet from './Spreadsheet.tsx';
import store from "./app/store.ts";
import { Provider } from "react-redux";
import './App.css';

function App() {
  return (
    <Provider store={store}>
      <BeautifulSpreadsheet />
    </Provider>
  );
}

export default App;
