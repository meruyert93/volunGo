import React, { useState } from 'react'
import { Grid, Segment, Header, Button, Form, Progress, Divider, Image} from 'semantic-ui-react';
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import UpdateProjectAction from "../../adapters/updateProjectAction";

function ProjectImage() {
    const [selectedImage, setSelectedImage] = useState(null);   
    const { t } = useTranslation();

    const { state, actions } =  useStateMachine({ UpdateProjectAction });

    const { handleSubmit, errors, register, watch, control, setValue } = useForm({
        defaultValues: state.projects
    });

    const history = useHistory();

    const handleImagePreview = (e) => {
        setSelectedImage(URL.createObjectURL(e.target.files[0]));
    }

    const RouteChangeBack = () => {
        let path = `newpath`;
        //history.push(path);
    }

    const RouteChangeNext = (data) => {
        actions.UpdateProjectAction(data);
        console.log(data);
        let path = ``;
        //history.push(path);
        //console.log(data)
    }

    return (
        <Segment size='large' padded='very' className="height100">
            <Progress percent={33} attached='top' size='medium' color='blue'/>
            <Grid stackable verticalAlign='middle' centered>
                <Grid.Column width={16} textAlign="center">
                    <Header  as='h2' className="headingText"> 
                        {t('uploading_image')}
                    </Header>
                    <p> {t('sub_text_uploading_image')}</p>
                </Grid.Column>
                <Grid.Row>
                    <Grid.Column mobile={16} tablet={8} computer={5}>
                        <Form>
                            <Form.Field>
                                <label>{t('attach_image')}</label>
                                <input type="file" name='imageCover' ref={register} onChange={(e) => handleImagePreview(e)}/>
                            </Form.Field>
                            <Grid.Row>
                                <Grid.Column>
                                    <Image src={selectedImage} size='large'/>
                                </Grid.Column>
                            </Grid.Row>
                            <Grid.Row>
                                <Grid.Column>
                                    <Divider hidden/>
                                    <Button color="blue" onClick={RouteChangeBack}>{t('back')}</Button>
                                    <Button primary onClick={handleSubmit(RouteChangeNext)}>{t('next')}</Button>
                                </Grid.Column>
                            </Grid.Row>
                        </Form>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
    )
}

export default ProjectImage
