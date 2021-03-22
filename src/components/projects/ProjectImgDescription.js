import React, { useState } from 'react';
import {
  Grid,
  Segment,
  Header,
  Button,
  Form,
  Progress,
  Divider,
  Image,
} from 'semantic-ui-react';
import { useHistory } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useForm } from 'react-hook-form';
import { useStateMachine } from 'little-state-machine';
import UpdateProjectAction from '../../adapters/updateProjectAction';

function ProjectImgDescription({ activPicker }) {
  const [selectedImage, setSelectedImage] = useState(null);
  const { t } = useTranslation();

  const { state, actions } = useStateMachine({ UpdateProjectAction });

  const { handleSubmit, errors, register, watch, control, setValue } = useForm({
    //defaultValues: state.projects
  });

  const history = useHistory();

  const handleImagePreview = (e) => {
    setSelectedImage(URL.createObjectURL(e.target.files[0]));
  };

  const RouteChangeBack = () => {
    let path = `newpath`;
    activPicker(3);
    //history.push(path);
  };

  const RouteChangeNext = (data) => {
    actions.UpdateProjectAction(data);
    console.log(data);
    activPicker(5);
    let path = ``;
    //history.push(path);
    //console.log(data)
  };

  return (
    <Segment basic size="large" padded="very" className="height100">
      <Grid stackable verticalAlign="middle" centered>
        <Grid.Column width={16} textAlign="center">
          <Header as="h2" className="NGOtextDark form-title">
            {t('image_description_info')}
          </Header>
          <p className="form-subtitle"> {t('sub_text_image_description')}</p>
        </Grid.Column>
        <Grid.Row>
          <Grid.Column mobile={16} tablet={8} computer={9}>
            <Form>
              <Form.Group>
                <Form.Field width={12} required>
                  <label>{t('attach_image')}</label>
                  <input
                    type="file"
                    name="imageCover"
                    ref={register}
                    onChange={(e) => handleImagePreview(e)}
                  />
                  <Grid.Row>
                    <Grid.Column>
                      <Image src={selectedImage} size="large" />
                    </Grid.Column>
                  </Grid.Row>
                </Form.Field>
                <Form.Field width={16} required>
                  <label>{t('about_your_project')}</label>
                  <textarea
                    type="text"
                    name="description"
                    ref={register({ required: true })}
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
