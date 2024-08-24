// CategoryManager.jsx
import React, { useState } from 'react';

const CategoryManager = () => {
  const [categories, setCategories] = useState([]);

  const addCategory = (category) => {
    setCategories([...categories, category]);
  };

  return (
    <div>
      <input
        type="text"
        placeholder="New Category"
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            addCategory(e.target.value);
            e.target.value = '';
          }
        }}
      />
      <ul>
        {categories.map((category, index) => (
          <li key={index}>{category}</li>
        ))}
      </ul>
    </div>
  );
};

export default CategoryManager;
