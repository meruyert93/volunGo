import React, {useState} from 'react';
import { BrowserRouter, Route, Switch, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import {
    Segment,
    Sidebar,
} from 'semantic-ui-react';
import FormsBasic from "./components/FormsBasic";
import FormsAdd from "./components/FormsAdd"
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/style.css';
import SidebarMenu from './components/SidebarMenu';
import SignUpFinish from './components/SignUpFinish';
import { StateMachineProvider, createStore } from "little-state-machine";


createStore({
    yourDetails: {
        email:'',
        password: '',
        passwordConfirm:'',
        firstName:'',
        lastName:'',
        yearOfBirth:'',
        gender:''
    }
})

function App() {
    const [visible, setVisible] = useState(false); 

    const onToggleMenu = () => {
        setVisible(!visible);
    }

    return (
        <StateMachineProvider>
            <BrowserRouter>
                <Segment.Group>
                    <Header  onToggleMenu={onToggleMenu}/>
                    <Sidebar.Pushable>
                        <SidebarMenu visible={visible} setVisible={setVisible}/>
                        <Sidebar.Pusher dimmed={visible}>
                            <Switch>
                                <Route exact path="/">
                                    <Home/>
                                </Route>
                                <Route path="/sign-up1">
                                    <FormsBasic/>
                                </Route>
                                <Route path="/sign-up2">
                                    <FormsAdd/>
                                </Route>
                                <Route path="/sign-up-finish">
                                    <SignUpFinish/>
                                </Route>
                            </Switch>
                        </Sidebar.Pusher>
                    </Sidebar.Pushable>
                    <Footer/>
                </Segment.Group>
            </BrowserRouter>
        </StateMachineProvider>
    );
}

export default App;
