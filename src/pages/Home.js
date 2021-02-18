import React, { useState } from 'react'
import { Segment } from 'semantic-ui-react';
import Header from '../components/Header';
import Footer from '../components/Footer'
import SidebarMenu from '../components/SidebarMenu';


function Home() {
    const [visible, setVisible] = useState(false); 

    const onToggleMenu = () => {
        setVisible(!visible);
    }

    return (
        <Segment.Group>
            <Header onToggleMenu={onToggleMenu}/>
                <SidebarMenu visible={visible} setVisible={setVisible}/>
            <Footer/>
        </Segment.Group>
    )
}

export default Home
