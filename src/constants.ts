import { NoteType } from './interface';

export const TabsValues = {
  TEXT: 'text',
  ORDERED_LIST: 'ordered-list',
  UNORDERED_LIST: 'unordered-list',
};

export const tabData: {label: string, value: NoteType}[] = [
  { label: 'Ordered list', value: 'ordered-list' },
  { label: 'Unordered list', value: 'unordered-list' },
  { label: 'Text', value: 'textarea' },
];
