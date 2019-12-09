import React from 'react'

function Other(){
    return(
        <React.Fragment>
            <div className='row'>
                <div className='col-12'>
                    <h3>Другие объекты</h3>
                </div>
            </div>
            <div className='row'>
                <div className="col-4">
                    <button className="btn btn-danger">Случайная поломка</button>
                </div>  
                <div className='col'>text</div>  
            </div>    
        </React.Fragment>
    )
}



export default Other