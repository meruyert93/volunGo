import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import './styles/style.css';
import Header from "./components/Header";
import Hero from './components/Hero';
import {  Segment } from 'semantic-ui-react';
import Main from './components/Main';



function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/">
                            <Segment.Group>
                                <Header/>
                                <Hero/>
                                <Main/>
                            </Segment.Group>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
