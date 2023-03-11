import React from 'react';
import Nav from './components/Header/Nav';
import Settings from './components/Settings/Form';

function App() {
  const [settings, setSettings] = React.useState<object>({
    sizeX: 480,
    sizeY: 480,
  });
  return (
    <>
      <Nav></Nav>
      <Settings putSettings={setSettings}></Settings>
    </>
  );
}

export default App;
