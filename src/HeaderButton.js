import React from 'react';
import ThemeContext from './ThemeContext';

function HeaderButton() {

const Context = React.useContext(ThemeContext);

  return (
    <div>
      <button style={ThemeContext.blue} >Press me</button>
    </div>
  );
}

export default HeaderButton;
