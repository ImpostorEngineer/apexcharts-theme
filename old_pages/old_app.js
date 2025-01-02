import React from 'react';
import { ThemeProvider } from './ThemeContext';
import YourComponent from './YourComponent';

const App = () => {
  return (
    <ThemeProvider>
      <YourComponent />
    </ThemeProvider>
  );
};

export default App;
