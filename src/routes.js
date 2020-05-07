import React from 'react'
import Home from './pages/Home'
import About from './pages/About'
import {BrowserRouter,Route,Switch} from 'react-router-dom'

export default function Routes(){
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={Home}/>
                <Route path="/home" component={Home}/>
                <Route path="/about" component={About}/>
            </Switch>
        </BrowserRouter>
    )
}