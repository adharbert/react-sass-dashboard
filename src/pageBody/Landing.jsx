import React from 'react';

const Landing = () => {
    return (
        <div className='e-container' style={{border: '2px dashed green'}}>

            <h1>Hello, World</h1>

            <p>Lorem ipsum dolor site amet consectetur, adipisicing elit. Itaque dolorum sint beatae!</p>

            <div className="e-row" style={{ marginBottom: '20px'}}>
                <div className="e-flex-6 e-flex-3" style={{ border: '1px solid red'}}>1</div>
                <div className="e-flex-6 e-flex-3" style={{ border: '1px solid red'}}>2</div>
                <div className="e-flex-6 e-flex-3 "style={{ border: '1px solid red'}}>3</div>
                <div className="e-flex-6 e-flex-3" style={{ border: '1px solid red'}}>4</div>
            </div>

            <div className="e-offset-2" style={{ border: '1px solid blue', padding: '10px 20px'}}>Hello</div>
        </div>
        );
}

export default Landing;
