import React from 'react';
import Header from '../Header/Header';
import Main from '../Main/Main';
import SideBar from '../SideBar/SideBar';
import RefProvider from '../RefProvider/RefProvider';

function App() {
  return (
    <RefProvider>
      <Header />
      <Main />
      <SideBar />
    </RefProvider>
  );
}

export default App;
