import React, { Component } from 'react'
import {
  Route,
  BrowserRouter as Router
} from 'react-router-dom'


import Home from 'routes/home'

class MainLayout extends Component {
    render() {
        return (
            <Router>
                <div className="main-layout container">
                    <Route exact path="/" component={Home} />
                </div>
            </Router>
        )
    }
}

export default MainLayout