import React, { useState } from 'react';

function App() {
   return (
      <>
         <button class="language-btn">УКР</button>
         <img
            src="https://i.imgur.com/MK3eW3Am.jpg"
            alt="Katherine Johnson"
         />
         <button class="language-btn">РУС</button>
      </>
   );
}

export default function ReactApp() {
   return (
      <>
         <App />
         <App />
         <img
            src="https://i.imgur.com/MK3eW3Am.jpg"
            alt="Katherine Johnson"
         />
      </>
   )
};