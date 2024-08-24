// ExpenseTagger.jsx
import React, { useState } from 'react';

const ExpenseTagger = () => {
  const [tag, setTag] = useState('');

  const handleAddTag = () => {
    // Add tag to the expense
    console.log(`Tag added: ${tag}`);
    setTag('');
  };

  return (
    <div>
      <input
        type="text"
        value={tag}
        onChange={e => setTag(e.target.value)}
        placeholder="Add tag"
      />
      <button onClick={handleAddTag}>Add Tag</button>
    </div>
  );
};

export default ExpenseTagger;
