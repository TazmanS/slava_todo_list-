import React from 'react'
import { BrowserRouter as Router, Route, Switch} from "react-router-dom"
import {connect} from 'react-redux'
import downloadCrash from '../actions/allCrash'

import Navigation from '../Navigation/Navigation'
import KP from '../KP/KP'
import Other from '../Other/Other'
import Add from '../Add/Add'

class App extends React.Component {

  componentDidMount(){
    this.props.download()
  }

  render(){
    let test = this.props.kp.map((one, index)=>{
      return(
        <p key={index}>{Object.keys(one)} - {one.user}</p>
      )
    })

    return (
      <Router>
        <div className="container App">
          <Navigation />
          {test}
          <Switch>
            <Route path="/kp-:name" component={KP}  />
            <Route path="/other" component={Other}  />
            <Route path="/add" component={Add}  />
          </Switch>
        </div>
      </Router>
    )  
  }
}

function mapStateToProps(state){
  return{
    kp: state.kpCrash.kpCrash,
    other: state.otherCrash.otherCrash
  }
}

function mapDispatchToProps(dispatch){
  return{
    download: () => dispatch( downloadCrash() )
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
