import React from 'react';
import Header from './Header';
import UserContext from './UserContext';

export const buttonThemes = {
  blue: {
    color: 'white',
    backgroundColor: 'blue'
  },
  black: {
    color: 'white',
    backgroundColor: 'black'
  },
};

function App() {
  return (
    <UserContext.Provider value={buttonThemes}> 
    <Header /> 
    </UserContext.Provider>
  );
}

export default App;
