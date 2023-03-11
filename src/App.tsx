import React from 'react';
import Nav from './components/Header/Nav';
import Settings from './components/Settings/Form';

import './assets/css/grid.css'

interface sizes {
  sizeX: number,
  sizeY: number
}

function App() {
  const [settings, setSettings] = React.useState<sizes>({
    sizeX: 16,
    sizeY: 16,
  });
  const [matrix, setMatrix] = React.useState<Array<Array<boolean>>>();

  React.useEffect(() => {
    setMatrix(Array(settings.sizeX).fill(0).map(e => Array(settings.sizeY).fill(0)));
  }, [settings]);

  const updateMatrix = (x:number,y:number) => {
    setMatrix(matrix?.map((r, iR) => r.map((c, iC) => iR === x && iC === y ? !matrix[iR][iC] : matrix[iR][iC])));
  }

  return (
    <>
      <header>
        <Nav></Nav>
      </header>
      <main>
        <Settings putSettings={setSettings}></Settings>
        <div className='grid-board'>
          {
            matrix?.map((row,iRow) => <div className='grid-board-row' key={iRow}>
              {row.map((col, iCol) => <div className='grid-board-col' key={iCol}>
                <button className={'btn btn-grid ' + (col ? 'btn-dark' : 'btn-light')}
                  onClick={()=>{
                    updateMatrix(iRow,iCol)
                  }}
                >{col ? 'O' : 'X'}</button>
              </div>)}
            </div>)
          }
        </div>
      </main>
    </>
  );
}

export default App;
