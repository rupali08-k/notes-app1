import NoteInput from './NoteInput';
import NoteCard from './NoteCard';
import './NotesArea.css';

export default function NotesArea({ selectedGroup, addNoteToGroup }) {
  if (!selectedGroup) {
    return <div className="notes-area empty">Select a group to start adding notes</div>;
  }

  const handleAddNote = (noteText) => {
    const newNote = {
      id: Date.now().toString(),
      text: noteText,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    addNoteToGroup(selectedGroup.id, newNote);
  };

  return (
    <main className="notes-area">
      <div className="group-header">
        <div className="group-avatar" style={{ backgroundColor: selectedGroup.color }}>
          {selectedGroup.name.slice(0, 2).toUpperCase()}
        </div>
        <h2>{selectedGroup.name}</h2>
      </div>
      <div className="notes-container">
        {selectedGroup.notes && selectedGroup.notes.length > 0 ? (
          selectedGroup.notes.map(note => <NoteCard key={note.id} note={note} />)
        ) : (
          <p className="no-notes">No notes yet</p>
        )}
      </div>
      <NoteInput onAddNote={handleAddNote} />
    </main>
  );
}