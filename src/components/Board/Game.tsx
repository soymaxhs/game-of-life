import React from "react";

interface gameProps {
    matrix: Array<Array<boolean>> | undefined,
    updateMatrix: Function
}

const Game = (props:gameProps) => {
    return (<div className='grid-board'>
        {
            props.matrix?.map((row, iRow) => <div className='grid-board-row' key={iRow}>
                {row.map((col, iCol) => <div className='grid-board-col' key={iCol}>
                    <button className={'btn btn-grid ' + (col ? 'btn-dark' : 'btn-light')}
                        onClick={() => {
                            props.updateMatrix(iRow, iCol)
                        }}
                    >{col ? 'O' : 'X'}</button>
                </div>)}
            </div>)
        }
    </div>);
}

export default Game;