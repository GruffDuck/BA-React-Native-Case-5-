type Texts = {
  originalNotes: string[];
  filteredNotes: string[];
};
export const notesList:Texts = {
  originalNotes: [],
  filteredNotes: [],
};

export function addNoteToList(note:string) {

  notesList.originalNotes.push(note);
}
export function deleteNoteToList(index: number) {
  notesList.originalNotes = notesList.originalNotes.filter((note, i) => i !== index);
}


