import React from 'react';

const BackDrop = ({handleMenu}) => {
   return (
      <div className='backdrop' onClick={handleMenu}></div>
   )
}

export {BackDrop};