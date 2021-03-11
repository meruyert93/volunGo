import React, { useState } from 'react';
import { Grid, Segment, Header, Button, Step } from 'semantic-ui-react';
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import NGOStepsForReg from "../components/NGO/NGOStepsForReg";

import ProjectRegistrationHolder from "../components/NGO/ProjectRegistrationHolder";

function NGORegistration() {
    const [active, setActive] = useState(1);

    const activPicker = (num) => {
        setActive(num)
        console.log(num);
        console.log(active);
    }

    return (
        <>
            <NGOStepsForReg activPicker={activPicker}/>
            <ProjectRegistrationHolder active={active}/>
        </>
    )
}

export default NGORegistration
