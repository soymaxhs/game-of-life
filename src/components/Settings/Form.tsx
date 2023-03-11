import React from 'react';

interface settings {
    putSettings: Function
}

function Form(props: settings) {
    const [sizeX, setSizeX] = React.useState<number>(512);
    const [sizeY, setSizeY] = React.useState<number>(512);
    const updateSettings = () => {
        props.putSettings({
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
                            <div className='col-2'>
                                <button type="button" className="btn btn-primary" onClick={updateSettings}>Update</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
}

export default Form;
