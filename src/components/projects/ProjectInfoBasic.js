import React from 'react'
import { Grid, Segment, Header, Button, Form, Progress} from 'semantic-ui-react';
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import UpdateProjectAction from "../../adapters/updateProjectAction";

function ProjectInfoBasic() {
    const { t } = useTranslation();
    const { state, actions } =  useStateMachine({ UpdateProjectAction });
    const { handleSubmit, errors, register, watch } = useForm({
        defaultValues: state.ngoDetails
    });

    const history = useHistory();

    const RouteChangeBack = () => {
        let path = `newpath`;
        //history.push(path);
    }

    const RouteChangeNext = (data) => {
        actions.updateNGOAction(data);
        let path = ``;
        //history.push(path);
        //console.log(data)
    }

    return (
        <Segment>
            
        </Segment>
    )
}

export default ProjectInfoBasic
