import React, {useRef} from 'react';
import { Button, Form } from 'semantic-ui-react';
import { useHistory } from "react-router-dom";
import { useTranslation } from "react-i18next";

function FileUploader({onFileSelectError, onFileSelectSuccess}) {
    const { t } = useTranslation();
    const fileInput = useRef(null)

    const handleFileInput = (e) => {
        // handle validations
        const file = e.target.files[0];
        if (file.size > 1024)
        onFileSelectError({ error: "File size cannot exceed more than 1MB" });
        else onFileSelectSuccess(file);
    }

    return (
        <Form.Field>
            <label>{t('attach_image')}</label>
            <input type="file" onChange={handleFileInput} ref={fileInput}/>
            <Button primary onClick={() => fileInput.current && fileInput.current.click()}>
            Add image
            </Button>
        </Form.Field>
    )
}

export default FileUploader
