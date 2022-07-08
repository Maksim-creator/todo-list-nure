import React, { useEffect, useState } from 'react';
import './app.css';
import Header from '../components/Header';
import { Note } from '../interface';
import NoteItems from '../components/NoteItems';
import ModalItem from '../components/ModalItem';
import Icon from '../components/Icon';
import sleep from '../helpers';

const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [data, setData] = useState<Note[]>([]);

  const [isDrugging, setIsDrugging] = useState(false);
  const [location, setLocation] = useState<{x?: number, y?: number}>({
    x: undefined,
    y: undefined,
  });
  const [druggedNote, setDruggedNote] = useState<Note | undefined>();

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  useEffect(
    () => {
      const update = (e: any) => {
        setLocation({ x: e.pageX - 130, y: e.pageY - 80 });
      };
      window.addEventListener('mousemove', update);
      window.addEventListener('touchmove', update);
      return () => {
        window.removeEventListener('mousemove', update);
        window.removeEventListener('touchmove', update);
      };
    },
    [location],
  );

  useEffect(() => {
    const storageData = localStorage.getItem('notes');
    if (storageData) {
      const parsed = JSON.parse(storageData);
      setData((prevData) => [...prevData, ...parsed]);
    } else {
      localStorage.setItem('notes', '[]');
    }
  }, []);

  const onDelete = async (id: string) => {
    const withUnpinnedData = data.map(
      (item) => (item.id === id ? { ...item, pinned: false } : item),
    );
    setData(withUnpinnedData);
    const withDeletePending = withUnpinnedData.map(
      (item) => (item.id === id ? { ...item, deletePending: true } : item),
    );
    setData(withDeletePending);
    const newData = withDeletePending.filter((item) => item.id !== id);
    await sleep(1000);
    setData(newData);
  };

  return (
    <div className="app_container">
      <Header openModal={handleOpen} />
      <NoteItems
        data={data}
        druggedNote={druggedNote}
        isDrugging={isDrugging}
        setData={setData}
        setIsDrugging={setIsDrugging}
        onDelete={onDelete}
      />
      <ModalItem
        isOpen={isOpen}
        closeModal={handleClose}
        setIsDrugging={setIsDrugging}
        setDruggedNote={setDruggedNote}
      />
      {isDrugging
          && location.x
          && location.y
          && (
          <Icon
            note={druggedNote}
            x={location.x}
            y={location.y - 520}
            onDelete={onDelete}
          />
          )}
    </div>
  );
};

export default App;
