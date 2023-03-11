import React from 'react';
import Nav from './components/Header/Nav';
import Settings from './components/Settings/Form';

function App() {
  const [settings, setSettings] = React.useState<object>({
    sizeX: 128,
    sizeY: 128,
  });
  return (
    <>
      <header>
        <Nav></Nav>
      </header>
      <main>
        <Settings putSettings={setSettings}></Settings>
      </main>
    </>
  );
}

export default App;
