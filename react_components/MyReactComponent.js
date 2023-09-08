import React, { useState } from 'react';

function App() {
   const [items, setItems] = useState([]);
   const [text, setText] = useState('');

   const addItem = () => {
      if (text.trim() !== '') {
         setItems([...items, text]);
         setText('');
      }
   };

   return (
      <div className="ship-list">
         <h1>Список покупок</h1>
         <div>
            <input
               type="text"
               placeholder="+ що купити"
               value={text}
               onChange={(e) => setText(e.target.value)}
            />
            <button onClick={addItem}>Додати</button>
         </div>
         <ul>
            {items.map((item, index) => (
               <li key={index}>{item}</li>
            ))}
         </ul>
      </div>
   );
}

export default App;