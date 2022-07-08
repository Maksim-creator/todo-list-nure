import React from 'react';
import Button from '../Button';
import { Note, NoteType } from '../../interface';

interface Props {
    tabs: {
        label: string;
        value: NoteType;
    }[];
    handleTabChange: (value: NoteType) => void;
    selected: string;
}

const Tabs: React.FC<Props> = ({ tabs, handleTabChange, selected }) => (
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
    {tabs.map((tab) => (
      <Button
        key={tab.label}
        label={tab.label}
        onPress={() => handleTabChange(tab.value)}
        styles={{ transition: '.5s all', backgroundColor: tab.value === selected ? '#988265' : '#DEB887' }}
      />
    ))}
  </div>
);

export default Tabs;
