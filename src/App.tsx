import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import './styles/style.css';
import Header from "./components/Header";



function App() {
    return (
        <div>
            <Router>
                <Switch>
                    <Route path="/">
                        <Header/>
                        <Home/>
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
