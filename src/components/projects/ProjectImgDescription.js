
import React, { useState } from 'react'
import { Grid, Segment, Header, Button, Form, Divider, Image} from 'semantic-ui-react';
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useForm } from "react-hook-form";
import { useStateMachine } from "little-state-machine";
import UpdateProjectAction from "../../adapters/updateProjectAction";
import { createProject } from "../../adapters/projectAPI";



function ProjectImgDescription({ activPicker }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const { t } = useTranslation();

  const { state, actions } = useStateMachine({ UpdateProjectAction });


    const { handleSubmit, register } = useForm({
        // defaultValues: state.projects
    });

  const history = useHistory();

  const handleImagePreview = (e) => {
    setSelectedImage(URL.createObjectURL(e.target.files[0]));
  };


    const RouteChangeBack = () => {
        activPicker(3)
    }

    const RouteChangeNext =  async (data) => {
        actions.UpdateProjectAction(data);
        Object.assign(state.projects, data);
        const { 
                city, 
                companyName, 
                contactPersonEmail, 
                contactPersonName,
                description,
                endDate,
                endTime,
                images,
                locationType,
                numberOfVolunteers,
                postalCode,
                requirements,
                startDate,
                startTime,
                streetAddress,
                title,
                weekdays
            } = state.projects;
        const formData = new FormData();
        console.log(images[0]);
        formData.append('images', images[0]);
        formData.append('title', title);
        formData.append('city', city);
        formData.append('companyName', companyName);
        formData.append('contactPersonEmail', contactPersonEmail);
        formData.append('contactPersonName', contactPersonName);
        formData.append('description', description);
        formData.append('endTime', endTime);
        formData.append('endDate', endDate);
        formData.append('locationType', locationType);
        formData.append('numberOfVolunteers', numberOfVolunteers);
        formData.append('postalCode', postalCode);
        // formData.append('requirements', requirements);
        formData.append('startDate', startDate);
        formData.append('startTime', startTime);
        formData.append('streetAddress', streetAddress);
        formData.append('weekdays', weekdays);
        const response = await createProject(formData);
        console.log(response);
        if (response.status === 'success') {
            return activPicker(5)
        }
        history.push('error');
    }

    return (
        <Segment basic size='large' padded='very' className="height100">
            <Grid stackable verticalAlign='middle' centered>
                <Grid.Column width={16} textAlign="center">
                    <Header  as='h2' className="NGOtextDark form-title"> 
                        {t('image_description_info')}
                    </Header>
                    <p className="form-subtitle"> {t('sub_text_image_description')}</p>
                </Grid.Column>
                <Grid.Row>
                    <Grid.Column mobile={16} tablet={8} computer={9}>
                        <Form encType="multipart/form-data">
                            <Form.Group>
                                <Form.Field width={12} required>
                                    <label>{t('attach_image')}</label>
                                    <input type="file" name='images' ref={register} onChange={(e) => handleImagePreview(e)}/>
                                        <Grid.Row>
                                        <Grid.Column>
                                            <Image src={selectedImage} size='large'/>
                                        </Grid.Column>
                                        </Grid.Row>
                                </Form.Field>
                                <Form.Field  width={16} required>
                                    <label>{t('about_your_project')}</label>
                                    <textarea
                                        type="text" 
                                        name="description"
                                        ref={register({ required: true})}
                                        placeholder={t('tell_us_about_project')} 
                                    />
                                </Form.Field>
                            </Form.Group>
                      <Grid centered>
                <Grid.Column
                  mobile={16}
                  tablet={8}
                  computer={6}
                  textAlign="center"
                >
                  <Button.Group widths="2" className="btn-group">
                    <Button
                      className="btn btn-secondary btn-secondary-ngo"
                      onClick={RouteChangeBack}
                    >
                      {t('back')}
                    </Button>
                    <Button
                      className="btn btn-primary-ngo"
                      onClick={handleSubmit(RouteChangeNext)}
                    >
                      {t('next')}
                    </Button>
                  </Button.Group>
                </Grid.Column>
              </Grid>
                        </Form>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

export default ProjectImgDescription;
