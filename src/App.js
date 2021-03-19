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
import VolunteerSignIn from "./components/Volunteers/VolunteerSignIn";
import VolunteersProjectDetails from "./components/Volunteers/VolunteersProjectDetails";
import VolJoinedProject from './components/Volunteers/Components/VolJoinedProject';
import NGOSignIn from "./components/NGO/NGOSignIn";
import NGOProjectRegistration from "./pages/NGOProjectRegistration";
import NGODashboardProjects from "./pages/NGODashboardProjects";
import Error from './pages/Error';
import LandingNGO from "./pages/LandingNGO";
import { StateMachineProvider, createStore } from "little-state-machine";
import Temporary from "./components/Draft.js/Temporary";
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
    },
    projects:{
        requirements: [],
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
                                {/* <Route path="/ngo-project-info-basic" component={ProjectInfoBasic}/> */}
                                {/* <Route path="/ngo-project-image" component={ProjectImage}/> */}
                                {/* <Route path="/ngo-project-description" component={ProjectDescription}/> */}
                                {/* <Route path="/ngo-project-requirements" component={ProjectRequirements}/> */}
                                {/* <Route path="/ngo-projects" component={NGOProjects}/> */}
                                {/* <Route path="/ngo-volunteers" component={NGOVolunteers}/> */}
                                <Route path="/ngo-project-registration" component={NGOProjectRegistration}/>
                                <Route path="/organization" component={LandingNGO}/>
                                <Route path="/ngo-projects-dashboard" component={NGODashboardProjects}/>
                                <Route path="/temporary" component={Temporary}/>
                                <Route path="/volunteers-sign-in" component={VolunteerSignIn}/>
                                <Route path="/volunteers" component={Landing}/>
                                <Route path="/ngo-sign-in" component={NGOSignIn}/>
                                {/* <Route path="/volunteer-project-details" component={VolunteersProjectDetails}/> */}
                                <Route path="/volunteer-request-sent" component={VolJoinedProject}/>
                                <Route path="/error" component={Error}/>
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
