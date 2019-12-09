import React from 'react'

function KP(props){
    console.log(props.match.params.name)
    return(
        <React.Fragment>
            <div className='row'>
                <div className='col-12'>
                    <h3>KP-{props.match.params.name.toUpperCase()}</h3>
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


export default KP