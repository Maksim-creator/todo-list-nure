import React, { MouseEvent } from 'react';
import { Note } from '../../interface';
import NoteItem from '../NoteItem';

interface Props {
    data: Note[];
    druggedNote?: Note
    setData: Function;
    setIsDrugging: (val: boolean) => void;
    isDrugging: boolean;
    onDelete: (id: string) => void;
}

const NoteItems: React.FC<Props> = ({
  data,
  druggedNote,
  setData,
  setIsDrugging,
  isDrugging,
  onDelete,
}) => {
  const setItem = async (e: MouseEvent) => {
    if (isDrugging) {
      setData((prevState: Note[]) => [
        ...prevState,
        {
          x: e.pageX - 130,
          y: e.pageY - 80,
          ...druggedNote,
          ...{ pinned: true },
        },
      ]);
      const storageData = localStorage.getItem('notes');
      if (storageData) {
        const parsed = JSON.parse(storageData);
        const newData = [...parsed, {
          x: e.pageX - 130,
          y: e.pageY - 80,
          ...druggedNote,
          ...{ pinned: true },
        }];
        localStorage.setItem('notes', JSON.stringify(newData));
      }

      setIsDrugging(false);
    }
  };
  return (
    // eslint-disable-next-line jsx-a11y/click-events-have-key-events
    <div
      role="button"
      tabIndex={0}
      style={{
        display: 'flex', height: 500,
      }}
      onClick={setItem}
    >
      {data.map((note, idx) => (
        <NoteItem
          key={`${note.id}-${idx}`}
          item={note}
          onDelete={onDelete}
        />
      ))}
    </div>
  );
};

export default NoteItems;
