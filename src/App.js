import React, {useState} from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "./pages/Landing";
import Home from "./pages/Home";
import HomeProject from "./pages/HomeProject";
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
import DetailsLocation from './components/DetailsLocation';
import DetailsActivities from './components/DetailsActivities';
import DetailsActivities2 from './components/DetailsActivities2';
import DetailsSkills from './components/DetailsSkills';
import DetailsSkillsTwo from "./components/DetailsSkillsTwo";
import { StateMachineProvider, createStore } from "little-state-machine";
import '../src/styles/style.css';

createStore({
    yourDetails: {
        email:'',
        password: '',
        passwordConfirm:'',
        firstName:'',
        lastName:'',
        yearOfBirth:'',
        gender:'',
        city:'',
        postalCode:'',
        activities: [],
        skills: [],
    },
    
    
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
                                    <Landing/>
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
                                <Route path="/details-location">
                                    <DetailsLocation/>
                                </Route>
                                <Route path="/details-activities">
                                    <DetailsActivities/>
                                </Route>
                                <Route path="/details-activities2">
                                    <DetailsActivities2/>
                                </Route>
                                <Route path="/details-skills">
                                    <DetailsSkills/>
                                </Route>
                                <Route path="/details-skills2">
                                    <DetailsSkillsTwo/>
                                </Route>
                                <Route path="/home">
                                    <Home/>
                                </Route>
                                <Route path="/projects">
                                    <HomeProject/>
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
