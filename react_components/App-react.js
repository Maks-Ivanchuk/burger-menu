import React, { useState } from 'react';

const nav = () => {
   const [isOpen, setIsOpen] = useState(false);
   const [hideOrShow, setHideOrShow] = useState({});

   const handleMenu = () => {
      setIsOpen((prev) => !prev);

      if (isOpen) {
         setHideOrShow(() => {
            return {};
         })
      } else {
         setHideOrShow(() => {
            return { right: "0" }
         })
      }
   };

   return (
      <>
         <p>asdasdasd</p>
      </>
   )
};

function Abc() {
   const style = {
      color: "red",
      fontSize: '2rem',
   }

   return <p style={style}>asdasdasd</p>;
}

export default Abc;
