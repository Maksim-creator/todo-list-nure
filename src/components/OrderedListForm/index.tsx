import React from 'react';
import {
  Field, FieldArray, Form, Formik, FormikValues,
} from 'formik';
import Button from '../Button';

interface Props {
    handleCreate: (values: FormikValues, type: string) => void;
}

const OrderedListForm: React.FC<Props> = ({ handleCreate }) => (
  (
    <Formik
      initialValues={{ orderedList: [''] }}
      onSubmit={(fields: FormikValues, { resetForm }) => {
        resetForm();
        handleCreate(fields, 'orderedList');
      }}
    >
      {({ values, handleSubmit }) => (
        <Form>
          <FieldArray
            name="orderedList"
            render={(arrayHelpers) => (
              <ol style={{ paddingLeft: 50 }}>
                {values.orderedList.map((item: any, index: number) => (
                    // eslint-disable-next-line react/no-array-index-key
                  <li key={index}>
                      <Field name={`orderedList.${index}`} className="modalItem_input" />
                      {index === values.orderedList.length - 1 ? (
                        <>
                          <Button
                            type="button"
                            onPress={() => arrayHelpers.remove(values.orderedList.length - 1)}
                            label="-"
                            styles={{
                              paddingTop: 3, paddingBottom: 3, paddingLeft: 9, paddingRight: 9,
                            }}
                          />
                          <Button
                            type="button"
                            onPress={() => arrayHelpers.insert(values.orderedList.length, '')}
                            label="+"
                            styles={{
                              paddingTop: 3, paddingBottom: 3, paddingLeft: 9, paddingRight: 9,
                            }}
                          />
                        </>
                      ) : null}
                    </li>
                ))}
              </ol>
            )}
          />
          <Button label="Submit" type="submit" onPress={handleSubmit} />
        </Form>
      )}
    </Formik>
  )
);

export default OrderedListForm;
