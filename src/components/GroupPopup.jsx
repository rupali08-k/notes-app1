import { useState, useRef, useEffect } from 'react';
import './GroupPopup.css';

export default function GroupPopup({ onClose, onCreate }) {
  const [groupName, setGroupName] = useState('');
  const [selectedColor, setSelectedColor] = useState('#B38BFA');
  const popupRef = useRef();

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (popupRef.current && !popupRef.current.contains(e.target)) {
        onClose();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [onClose]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const success = onCreate(groupName, selectedColor);
    if (success) {
      setGroupName('');
      onClose();
    }
  };

  const colors = ['#B38BFA', '#FF79F2', '#43E6FC', '#F19576', '#0047FF', '#6691FF'];

  return (
    <div className="popup-overlay">
      <div className="popup" ref={popupRef}>
        <h3>Create new group</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Group Name</label>
            <input
              type="text"
              value={groupName}
              onChange={(e) => setGroupName(e.target.value)}
              placeholder="Enter group name"
              autoFocus
            />
          </div>
          <div className="form-group">
            <label>Choose colour</label>
            <div className="color-picker">
              {colors.map(color => (
                <div
                  key={color}
                  className={`color-option ${selectedColor === color ? 'selected' : ''}`}
                  style={{ backgroundColor: color }}
                  onClick={() => setSelectedColor(color)}
                />
              ))}
            </div>
          </div>
          <button type="submit" className="create-btn">Create</button>
        </form>
      </div>
    </div>
  );
}