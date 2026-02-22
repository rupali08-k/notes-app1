export default function NoteCard({ note }) {
  const date = new Date(note.createdAt);
  const formattedDate = date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  });
  const formattedTime = date.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit'
  });

  return (
    <div className="note-card">
      <p className="note-text">{note.text}</p>
      <div className="note-meta">
        <span>{formattedDate}</span>
        <span>{formattedTime}</span>
      </div>
    </div>
  );
}