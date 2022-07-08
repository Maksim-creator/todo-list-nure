export type NoteType = ('ordered-list' | 'unordered-list' | 'textarea')

export interface Note {
    id: string;
    text: {text: string}[];
    x?: number;
    y?: number;
    pinned: boolean;
    deletePending: boolean;
    type: string;
}
