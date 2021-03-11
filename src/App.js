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
import NGOSignUpBasic from "./components/NGO/NGOSignUpBasic";
import NGOSignUpAdd from "./components/NGO/NGOSignUpAdd"; 
import ProjectInfoBasic from "./components/projects/ProjectInfoBasic";
import ProjectImage from "./components/projects/ProjectImage";
import ProjectDescription from "./components/projects/ProjectDescription";
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
    ngoDetails:{
        email: "",
        password:"",
        passwordConfirm: "",
    },
    projects:{

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
                                <Route path="/ngo-sign-up1">
                                    <NGOSignUpBasic/>
                                </Route>
                                <Route path="/ngo-sign-up2" component={NGOSignUpAdd}/>
                                <Route path="/ngo-project-info-basic" component={ProjectInfoBasic}/>
                                <Route path="/ngo-project-image" component={ProjectImage}/>
                                <Route path="/ngo-project-description" component={ProjectDescription}/>
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
