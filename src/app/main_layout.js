import React, { Component } from 'react'
import {
  Route,
  Router
} from 'react-router-dom'
import history from '../history'


import Home from 'routes/home'
import ReposList from 'routes/repos-list'

class MainLayout extends Component {
    render() {
        return (
            <Router history={history}>
                <div className="main-layout container">
                    <Route exact path="/" component={Home} />
                    <Route path="/repos-list" component={ReposList} />
                </div>
            </Router>
        )
    }
}

export default MainLayout