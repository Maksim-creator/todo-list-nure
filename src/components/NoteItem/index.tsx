import React from 'react';
import { Note } from '../../interface';
import Icon from '../Icon';

interface Props {
    item: Note;
    onDelete: (id: string) => void;
}

const NoteItem: React.FC<Props> = ({ item, onDelete }) => (
  <div style={{ maxWidth: 180, maxHeight: 60 }}>
    <Icon
      y={item.y}
      x={item.x}
      note={item}
      onDelete={onDelete}
    />
  </div>
);

export default NoteItem;
