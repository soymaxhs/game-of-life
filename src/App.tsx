import React from 'react';
import Nav from './components/Header/Nav';
import Settings from './components/Settings/Form';

import './assets/css/grid.css'

interface sizes {
  sizeX: number,
  sizeY: number
}

function App() {
  const [isPlaying, setIsPlaying] = React.useState<boolean>(false);
  const [settings, setSettings] = React.useState<sizes>({
    sizeX: 16,
    sizeY: 16,
  });
  const [matrix, setMatrix] = React.useState<Array<Array<boolean>>>();

  React.useEffect(() => {
    setMatrix(Array(settings.sizeX).fill(0).map(e => Array(settings.sizeY).fill(0)));
  }, [settings]);

  const updateMatrix = (x: number, y: number) => {
    setMatrix(matrix?.map((r, iR) => r.map((c, iC) => iR === x && iC === y ? !matrix[iR][iC] : matrix[iR][iC])));
  }

  const playGame = () => {
    setIsPlaying(true);
    console.log('Running');
  }

  const stopGame = () => {
    setIsPlaying(false);
    console.log('Stoping');
  }

  React.useEffect(() => {
    let intervalId: NodeJS.Timer | null = null;

    if (isPlaying) {
      intervalId = setInterval(() => {
        setMatrix(matrix?.map((r, iR) => r.map((c, iC) => {
          const lCell = iR - 1 > 0 ? matrix[iR - 1][iC] : false;
          const rCell = iR + 1 < settings.sizeX ? matrix[iR + 1][iC] : false;
          const uCell = iC - 1 > 0 ? matrix[iR][iC - 1] : false;
          const dCell = iC + 1 < settings.sizeY ? matrix[iR][iC + 1] : false;

          const luCell = iR - 1 > 0 && iC - 1 > 0 ? matrix[iR - 1][iC - 1] : false;
          const ruCell = iR + 1 < settings.sizeX && iC - 1 > 0 ? matrix[iR + 1][iC - 1] : false;
          const ldCell = iR - 1 > 0 && iC + 1 < settings.sizeY ? matrix[iR - 1][iC + 1] : false;
          const rdCell = iR + 1 < settings.sizeX && iC + 1 < settings.sizeY ? matrix[iR + 1][iC + 1] : false;

          let counterCell = 0;

          lCell && counterCell++;
          rCell && counterCell++;
          uCell && counterCell++;
          dCell && counterCell++;

          luCell && counterCell++;
          ruCell && counterCell++;
          ldCell && counterCell++;
          rdCell && counterCell++;

          return matrix[iR][iC] ?
            !(counterCell < 2 || counterCell > 3)
            : counterCell === 3;
        })));
      }, 500);
    }

    return ()=>{
      intervalId !== null && clearInterval(intervalId);
    }
  }, [isPlaying, matrix, settings.sizeX, settings.sizeY]);

  return (
    <>
      <header>
        <Nav></Nav>
      </header>
      <main>
        <Settings setSettings={setSettings} playGame={playGame} stopGame={stopGame} isPlaying={isPlaying}></Settings>
        <div className='grid-board'>
          {
            matrix?.map((row, iRow) => <div className='grid-board-row' key={iRow}>
              {row.map((col, iCol) => <div className='grid-board-col' key={iCol}>
                <button className={'btn btn-grid ' + (col ? 'btn-dark' : 'btn-light')}
                  onClick={() => {
                    updateMatrix(iRow, iCol)
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
