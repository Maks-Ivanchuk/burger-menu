import React, { useState } from 'react';
import { BackDrop } from '../react_components/BackDrops.jsx'

const Nav = () => {
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
            return { transform: "translateX(0)" }
         })
      }
   };

   return (
      <div className="nav">
         {isOpen ? <button className="nav__button" onClick={handleMenu}>Х</button> : <button className="nav__button" onClick={handleMenu}>Меню</button>}
         {isOpen ? <BackDrop handleMenu={handleMenu} /> : null}
         <ul className="nav__list" style={hideOrShow}>
            <li className="list__item">Головна</li>
            <li className="list__item">Контакти</li>
            <li className="list__item">Доставка</li>
            <li className="list__item">Акції</li>
            <li className="list__item">Пронос</li>
         </ul>
      </div>
   )
};


export { Nav };
