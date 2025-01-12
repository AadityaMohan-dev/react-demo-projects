import React, { useState } from 'react';

function Todo() {
  const [list, setList] = useState([]);
  const [input, setInput] = useState('');

  const handleSubmit = () => {
    if (input.trim() === '') return; // Prevent adding empty todos
    setList((prevList) => [
      ...prevList,
      { text: input, id: Math.floor(Math.random() * 10000) } // Ensure a wider range for unique IDs
    ]);
    setInput('');
  };

  const removeTodo = (id) => {
    setList((prevList) => prevList.filter((t) => t.id !== id));
  };

  return (
    <>
      <div className="w-full h-screen items-center">
        <div className="bg-black w-96 h-auto rounded p-4">
          <div className="mb-4">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              className="bg-slate-100 p-2 rounded"
              placeholder="Add a todo..."
            />
            <button
              onClick={handleSubmit}
              className="ml-2 p-2 bg-slate-100 border rounded border-white"
            >
              Submit
            </button>
          </div>
          <div className="py-4 bg-slate-100 rounded">
            {list.length === 0 ? (
              <p className="text-gray-500">No todos yet. Add one!</p>
            ) : (
              <ul>
                {list.map((item) => (
                  <li
                    key={item.id}
                    className="flex justify-between items-center bg-white p-2 mb-2 rounded shadow"
                  >
                    {item.text}
                    <button
                      onClick={() => removeTodo(item.id)}
                      className="ml-4 p-1 bg-red-500 text-white rounded"
                    >
                      Remove
                    </button>
                  </li>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Todo;
