import React from 'react'

// Native
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'

// Pages
import Home from 'pages/Home'
import Detail from 'pages/Detail'
import Error from 'pages/Error'

function Routes() {
    return (
        <Router>
            <Switch>
                <Route path='/' component={Home} exact />
                <Route path='/user/:username/' component={Detail} exact />
                <Route path='' component={Error} exact />
            </Switch>
        </Router>
    )
}

export default Routes