import React, {
  ChangeEvent, useEffect, useMemo, useState,
} from 'react';
import Modal from 'react-modal';
import './styles.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClose } from '@fortawesome/free-solid-svg-icons';
import {
  FormikValues, useFormik, FieldArray, Field, Formik, Form,
} from 'formik';
import { v4 as uuidv4 } from 'uuid';
import Button from '../Button';
import Tabs from '../Tabs';
import { tabData, TabsValues } from '../../constants';
import { Note, NoteType } from '../../interface';
import TimePicker from '../TimePicker';
import OrderedListForm from '../OrderedListForm';
import UnorderedListForm from '../UnorderedListForm';
import TextareaForm from '../TextareaForm';

interface Props {
  isOpen: boolean;
  closeModal: () => void;
  setIsDrugging: (val: boolean) => void;
  setDruggedNote: (val: Note) => void;
}
const customStyles = {
  content: {
    backgroundColor: '#FFE4C4',
    width: '40%',
    height: '60%',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const ModalItem: React.FC<Props> = ({
  isOpen,
  closeModal,
  setIsDrugging,
  setDruggedNote,
}) => {
  const [type, setType] = useState<NoteType>('unordered-list');
  const [selectedDate, setSelectedDate] = useState(new Date());
  const handleCreate = (vals: FormikValues, noteType: string) => {
    const textFields = vals[noteType].map((content: string) => ({ text: content }));

    if (vals) {
      const newItem = {
        id: uuidv4(),
        text: textFields,
        pinned: false,
        deletePending: false,
        type: noteType,
      };
      setDruggedNote(newItem);
      setIsDrugging(true);
      closeModal();
    }
  };

  const handleAddExtraInput = (itemType: string) => () => {
    const li = document.createElement('li');
    const input = document.createElement('input');
    input.setAttribute('class', 'modalItem_input');
    // eslint-disable-next-line no-eval
    input.setAttribute('onchange', 'handleTextAreaChange');
    li.appendChild(input);

    const parentNode = document.getElementById(`${itemType === 'ul' ? 'un' : ''}ordered-list`);
    if (parentNode) {
      parentNode.append(li);
    }
  };

  const handleTabChange = (value: NoteType) => {
    if (type !== value) {
      setType(value);
    }
  };

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  return (
    <Modal style={customStyles} isOpen={isOpen} contentLabel="Note creation" ariaHideApp={false}>
      <div className="iconWrapper">
        <FontAwesomeIcon className="closeIcon" icon={faClose} size="lg" onClick={closeModal} />
      </div>
      <div>
        <h2 className="modalItem_title">What do you want to plan?</h2>
        <Tabs
          tabs={tabData}
          handleTabChange={handleTabChange}
          selected={type}
        />
        {type === 'ordered-list' && <OrderedListForm handleCreate={handleCreate} />}
        {type === 'unordered-list' && <UnorderedListForm handleCreate={handleCreate} />}
        {type === 'textarea' && <TextareaForm handleCreate={handleCreate} />}
      </div>
    </Modal>
  );
};

export default ModalItem;
