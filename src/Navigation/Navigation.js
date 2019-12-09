import React from 'react'
import {NavLink} from 'react-router-dom'

function Navigation(){
    return(
        <div className="row justify-content-between">
            <div className="col-3">
                <NavLink to="/"> <h3>ToDoList</h3> </NavLink>
            </div>
            <div className="col-3">   
                <div className="dropdown">
                    <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Выбрать объект
                    </button>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <NavLink to="/kp-165" className="dropdown-item" > 165 </NavLink>
                        <NavLink to="/kp-173" className="dropdown-item" > 173 </NavLink>
                        <NavLink to="/kp-154" className="dropdown-item" > 154 </NavLink>
                        <NavLink to="/kp-220" className="dropdown-item" > 220 </NavLink> 
                        <NavLink to="/kp-98" className="dropdown-item" > 98 </NavLink> 
                        <NavLink to="/kp-129" className="dropdown-item" > 129 </NavLink> 
                        <NavLink to="/kp-145" className="dropdown-item" > 145 </NavLink> 
                        <NavLink to="/kp-137" className="dropdown-item" > 137 </NavLink> 
                        <NavLink to="/kp-209" className="dropdown-item" > 209 </NavLink> 
                        <NavLink to="/kp-205" className="dropdown-item" > 205 </NavLink> 
                        <NavLink to="/other" className="dropdown-item" > Other</NavLink> 
                        <NavLink to="/add" className="dropdown-item" > Добавить поломку</NavLink> 
                    </div>
                </div>   
            </div> 
        </div>
    )
}


export default Navigation