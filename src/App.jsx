import { useState } from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';
import Sidebar from './components/Sidebar';
import NotesArea from './components/NotesArea';
import './App.css';

function App() {
  const [groups, setGroups] = useLocalStorage('groups', []);
  const [selectedGroupId, setSelectedGroupId] = useState(null);

  const selectedGroup = groups.find(g => g.id === selectedGroupId) || null;

  const addNoteToGroup = (groupId, note) => {
    setGroups(prevGroups =>
      prevGroups.map(group =>
        group.id === groupId
          ? { ...group, notes: [...(group.notes || []), note] }
          : group
      )
    );
  };

  return (
    <div className="app">
      <Sidebar
        groups={groups}
        setGroups={setGroups}
        selectedGroupId={selectedGroupId}
        setSelectedGroupId={setSelectedGroupId}
      />
      <NotesArea
        selectedGroup={selectedGroup}
        addNoteToGroup={addNoteToGroup}
      />
    </div>
  );
}

export default App;