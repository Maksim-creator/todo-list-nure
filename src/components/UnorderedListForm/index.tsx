import React from 'react';
import {
  Field, FieldArray, Form, Formik, FormikValues,
} from 'formik';
import Button from '../Button';

interface Props {
    handleCreate: (values: FormikValues) => void
}

const UnorderedListFrom: React.FC<Props> = ({ handleCreate }) => (
  <Formik
    initialValues={{ unorderedList: [''] }}
    onSubmit={(fields: FormikValues, { resetForm }) => {
      resetForm();
      handleCreate(fields);
    }}
  >
    {({ values, handleSubmit }) => (
      <Form>
        <FieldArray
          name="unorderedList"
          render={(arrayHelpers) => (
            <ol>
              {values.orderedList.map((item: any, index: number) => (
                // eslint-disable-next-line react/no-array-index-key
                <li className="modalItem_inputWrapper" key={index}>
                  <Field name={`orderedList.${index}`} className="modalItem_input" />
                  <button
                          type="button"
                          onClick={() => arrayHelpers.remove(index)}
                        >
                                          -
                        </button>
                  <button
                          type="button"
                          onClick={() => arrayHelpers.insert(values.orderedList.length, '')}
                        >
                                          +
                        </button>
                </li>
              ))}
            </ol>
          )}
        />
        <Button label="Submit" type="submit" onPress={handleSubmit} />
      </Form>
    )}
    {/* <div className="modalItem_wrapper"> */}
    {/*  {type === TabsValues.TEXT && ( */}
    {/*  <div className="modalItem_form"> */}
    {/*    <textarea rows={20} cols={50} onChange={handleTextAreaChange} /> */}
    {/*  </div> */}
    {/*  )} */}
    {/*  {type === TabsValues.ORDERED_LIST && ( */}
    {/*  <div className="modalItem_form"> */}
    {/*    <ol id="ordered-list"> */}
    {/*      <FieldArray */}
    {/*        name="ordered-list" */}
    {/*        render={(arrayHelpers) => ( */}
    {/*          <li> */}
    {/*            <input onChange={handleTextAreaChange} className="modalItem_input" /> */}
    {/*          </li> */}
    {/*        )} */}
    {/*      /> */}
    {/*    </ol> */}
    {/*    <Button */}
    {/*      type="button" */}
    {/*      label="Add point" */}
    {/*      onPress={handleAddExtraInput('ol')} */}
    {/*    /> */}
    {/*  </div> */}
    {/*  )} */}

  </Formik>
);

export default UnorderedListFrom;
