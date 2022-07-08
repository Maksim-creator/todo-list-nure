import React from 'react';
import {
  Field, FieldArray, Form, Formik, FormikValues,
} from 'formik';
import Button from '../Button';
import { NoteType } from '../../interface';

interface Props {
    handleCreate: (values: FormikValues, type: string) => void
}

const UnorderedListForm: React.FC<Props> = ({ handleCreate }) => (
  <div>
    <Formik
      initialValues={{ unorderedList: [''] }}
      onSubmit={(fields: FormikValues, { resetForm }) => {
        resetForm();
        handleCreate(fields, 'unorderedList');
      }}
    >
      {({ values, handleSubmit }) => (
        <Form>
          <FieldArray
            name="unorderedList"
            render={(arrayHelpers) => (
              <ul style={{ paddingLeft: 50 }}>
                {values.unorderedList.map((item: any, index: number) => (
                  // eslint-disable-next-line react/no-array-index-key
                  <li key={index}>
                    <Field name={`unorderedList.${index}`} className="modalItem_input" />
                    {index === values.unorderedList.length - 1 ? (
                      <>
                        <Button
                          type="button"
                          onPress={() => arrayHelpers.remove(values.unorderedList.length - 1)}
                          label="-"
                          styles={{
                            paddingTop: 3, paddingBottom: 3, paddingLeft: 9, paddingRight: 9,
                          }}
                        />
                        <Button
                          type="button"
                          onPress={() => arrayHelpers.insert(values.unorderedList.length, '')}
                          label="+"
                          styles={{
                            paddingTop: 3, paddingBottom: 3, paddingLeft: 9, paddingRight: 9,
                          }}
                        />
                      </>
                    ) : null}
                  </li>
                ))}
              </ul>
            )}
          />
          <Button label="Submit" type="submit" onPress={handleSubmit} />
        </Form>
      )}
    </Formik>

  </div>
);

export default UnorderedListForm;
