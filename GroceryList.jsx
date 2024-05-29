import React, { useState } from 'react';

function GroceryList() {
  const [items, setItems] = useState([
    { id: 1, name: 'kybdskavsa', isChecked: false },
    { id: 2, name: 'dsb', isChecked: false },
    { id: 3, name: 'sdb', isChecked: false },
    { id: 4, name: 'dsb', isChecked: false },
    { id: 5, name: 'sdb', isChecked: false },
    { id: 6, name: 'dsb', isChecked: false },
    { id: 7, name: 'asvasy', isChecked: false },
  ]);
  const [newItem, setNewItem] = useState('');

  const handleInputChange = (e) => {
    setNewItem(e.target.value);66
  };

  const addItem = () => {
    if (newItem.trim() !== '') {
      const newId = items.length + 1;
      const newItemObj = { id: newId, name: newItem, isChecked: false };
      setItems([...items, newItemObj]);
      setNewItem('');
    }
  };

  const toggleCheck = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, isChecked: !item.isChecked } : item
      )
    );
  };

  const deleteItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const editItem = (id, newName) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, name: newName } : item
      )
    );
  };

  const clearAllItems = () => {
    setItems([]);
  };

  return (
    <div>
      <h1>Grocery List</h1>
      <input
        type="text"
        placeholder="Add item"
        value={newItem}
        onChange={handleInputChange}
      />
      <button onClick={addItem}>Add</button>

      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <input
              type="checkbox"
              checked={item.isChecked}
              onChange={() => toggleCheck(item.id)}
            />
            <span
              style={{ textDecoration: item.isChecked ? 'line-through' : 'none' }}
            >
              {item.name}
            </span>
            <button onClick={() => deleteItem(item.id)}>Delete</button>
            <button onClick={() => editItem(item.id, prompt('Edit Item'))}>
              Edit
            </button>
          </li>
        ))}
      </ul>
      <button onClick={clearAllItems}>Clear All Items</button>
    </div>
  );
}

export default GroceryList;