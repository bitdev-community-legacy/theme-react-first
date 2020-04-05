import React from 'react';
import './App.css';
import Notification from './components/Notification';
import changeTheme from './utils/changeTheme.js';

  let theme = 'light-theme';

  const toggleThemes = () => {
    if (theme === 'light-theme') {
      changeTheme('dark-theme');
      theme = 'dark-theme';
    } else {
      changeTheme('light-theme');
      theme = 'light-theme'
    }
  }

 const App = () =>  {
  return (
    <div id='app' className="light-theme">
      <Notification text="Click to change the theme." buttonLabel="Toggle" onClickMethod={toggleThemes} />
    </div>
  );
}

export default App;