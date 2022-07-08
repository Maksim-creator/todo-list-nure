import React from 'react';
import {
  FieldArray, Form, Formik, FormikValues,
} from 'formik';
import { NoteType } from '../../interface';
import Button from '../Button';

interface Props {
    handleCreate: (values: FormikValues, type: NoteType) => void;
}

const TextareaForm: React.FC<Props> = ({ handleCreate }) => (
  <Formik
    initialValues={{
      textarea: [''],
    }}
    onSubmit={(values: FormikValues, { resetForm }) => {
      resetForm();
      handleCreate(values, 'textarea');
    }}
  >
    {({ values, handleSubmit, handleChange }) => (
      <Form>
        <FieldArray
          name="textarea"
          render={(arrayHelpers) => (
            <textarea name="textarea.0" cols={60} rows={20} onChange={handleChange} />
          )}
        />
        <Button label="Submit" type="submit" onPress={handleSubmit} />
      </Form>
    )}
  </Formik>
);

export default TextareaForm;
