import React from 'react';
import { Segment } from 'semantic-ui-react';
import NGOHero from "../components/NGO/NGOHero";
import NGOMain from "../components/NGO/NGOMain";

function LandingNGO() {
    return (
        <Segment.Group>
            <NGOHero/>
            <NGOMain/>
        </Segment.Group>
    )
}

export default LandingNGO
