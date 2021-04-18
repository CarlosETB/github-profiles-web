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

function Routes() {
    return (
        <Router>
            <Switch>
                <Route path='/' component={Home} exact />
                <Route path='/:username/' component={Detail} exact />
            </Switch>
        </Router>
    )
}

export default Routes