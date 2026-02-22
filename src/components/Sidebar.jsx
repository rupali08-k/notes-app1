import { useState } from 'react';
import GroupPopup from './GroupPopup';
import './Sidebar.css';

export default function Sidebar({ groups, setGroups, selectedGroupId, setSelectedGroupId }) {
  const [showPopup, setShowPopup] = useState(false);

  const handleAddGroup = () => setShowPopup(true);
  const handleClosePopup = () => setShowPopup(false);

  const createGroup = (groupName, color) => {
    if (groupName.length < 2) {
      alert('Group name must be at least 2 characters');
      return false;
    }
    if (groups.some(g => g.name.toLowerCase() === groupName.toLowerCase())) {
      alert('Group name already exists');
      return false;
    }
    const newGroup = {
      id: Date.now().toString(),
      name: groupName,
      color: color,
      notes: [],
    };
    setGroups([...groups, newGroup]);
    return true;
  };

  return (
    <aside className="sidebar">
      <h2>Notes</h2>
      <button className="add-group-btn" onClick={handleAddGroup}>+ Add Group</button>
      <ul className="group-list">
        {groups.map(group => (
          <li
            key={group.id}
            className={`group-item ${group.id === selectedGroupId ? 'active' : ''}`}
            onClick={() => setSelectedGroupId(group.id)}
          >
            <div className="group-avatar" style={{ backgroundColor: group.color }}>
              {group.name.slice(0, 2).toUpperCase()}
            </div>
            <span className="group-name">{group.name}</span>
          </li>
        ))}
      </ul>
      {showPopup && (
        <GroupPopup
          onClose={handleClosePopup}
          onCreate={createGroup}
        />
      )}
    </aside>
  );
}