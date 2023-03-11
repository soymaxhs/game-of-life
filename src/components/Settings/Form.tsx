import React from 'react';

interface settings {
    setSettings: Function,
    playGame: Function,
    stopGame: Function,
    isPlaying: boolean,
}

function Form(props: settings) {
    const [sizeX, setSizeX] = React.useState<number>(32);
    const [sizeY, setSizeY] = React.useState<number>(32);
    const updateSettings = () => {
        props.setSettings({
            sizeX: sizeX,
            sizeY: sizeY,
        });
    }
    return (
        <section className='container my-2'>
            <div className="card mx-3">
                <div className="card-header">
                    <h5>Settings</h5>
                </div>
                <div className="card-body">
                    <form onSubmit={(e) => { e.preventDefault() }}>
                        <div className='row'>
                            <div className='col'>
                                <div className="mb-3">
                                    <input type="number" className="form-control" aria-describedby="size-x" value={sizeX} onChange={(e) => { setSizeX(parseInt(e.target.value)) }} />
                                    <div className="form-text">Size x</div>
                                </div>
                            </div>
                            <div className='col'>
                                <div className="mb-3">
                                    <input type="number" className="form-control" aria-describedby="size-y" value={sizeY} onChange={(e) => { setSizeY(parseInt(e.target.value)) }} />
                                    <div className="form-text">Size y</div>
                                </div>
                            </div>
                            <div className='col-1'>
                                <button type="button" className="btn btn-primary" onClick={updateSettings}>Update</button>
                            </div>
                            <div className='col-1'>
                                {
                                    !props.isPlaying ?
                                        <button type="button" className="btn btn-success" onClick={() => props.playGame()}>Play</button> :
                                        <button type="button" className="btn btn-danger" onClick={() => props.stopGame()}>Stop</button>
                                }
                            </div>
                        </div>
                    </form>
                </div>
                <div className='card-footer'>
                    <div className='row'>
                        <div className='col'>
                            <p className='text-danger'><small>Please be free to edit the board at any time even running!</small></p>
                        </div>
                        <div className='col'>
                            <p className='text-warning'><strong>You can edit the board with a simple click on any cell.</strong></p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Form;
