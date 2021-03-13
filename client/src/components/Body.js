import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom'
import Home from '../components/Home';
import About from '../components/About';
import  EssaysContainer from '../containers/EssaysContainer'
import ShortEssays from '../components/ShortEssays';
import Essays from '../components/Essays';
import EssayShow from '../components/EssayShow'

class Body extends Component {
    render() {
        return (
            <Switch>
                <Route exact path="/"> <Home /> </Route>
                <Route path="/about"> <About /> </Route>
                <Route path="/short-essays"> <ShortEssays /> </Route>
                <Route exact path="/essays" render={routerProps => <EssaysContainer {...routerProps} />} />
                <Route path="/essays/:id" render={routerProps => <EssayShow {...routerProps} />} />
                {/* <Route path="/essays/:id"> <EssayShow /> </Route> */}
                {/* <Route path="/essays"> <EssaysContainer /> </Route> */}
            </Switch>
        );
    }
}

export default Body;  