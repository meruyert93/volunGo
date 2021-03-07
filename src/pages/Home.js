import React from 'react'
import { Segment, Grid } from 'semantic-ui-react';
import HeroHome from '../containers/HeroHome';
import ProjectsSection from "../components/ProjectsSection";
function Home() {
    return (
        <Segment.Group>
            <HeroHome/>
            <ProjectsSection/>
        </Segment.Group>
    )
}

export default Home
