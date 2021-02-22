import React, {useState} from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import {
    Segment,
    Sidebar,
  } from 'semantic-ui-react';
import Forms from "./components/Forms";
import Header from './components/Header';
import Footer from './components/Footer';
import './styles/style.css';
import SidebarMenu from './components/SidebarMenu';





function App() {
    const [visible, setVisible] = useState(false); 

    const onToggleMenu = () => {
        setVisible(!visible);
    }

    return (
        <div>
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
                                <Route path="/sign-up">
                                    <Forms/>
                                </Route>
                            </Switch>
                        </Sidebar.Pusher>
                    </Sidebar.Pushable>
                    <Footer/>
                </Segment.Group>
            </BrowserRouter>
        </div>
    );
}

export default App;
