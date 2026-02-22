import { useState } from 'react';
import './NoteInput.css';

export default function NoteInput({ onAddNote }) {
  const [text, setText] = useState('');

  const handleSend = () => {
    if (text.trim()) {
      onAddNote(text.trim());
      setText('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="note-input">
      <textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Enter your note..."
        rows="3"
      />
      <button
        className={`send-btn ${text.trim() ? 'active' : ''}`}
        onClick={handleSend}
        disabled={!text.trim()}
      >
        ➤
      </button>
    </div>
  );
}