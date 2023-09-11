import React from 'react';
import { createRoot } from 'react-dom/client';
import App from '../react_components/App.jsx';

document.addEventListener("DOMContentLoaded", () => {
   // let body = document.querySelector('body');
   // let headerNav = document.querySelector('.header__nav');
   // let overlay = document.querySelector('#overlay');
   // let burgerMenu = document.querySelector('.burger__menu');
   // let closeNav = document.querySelector('.nav__close');

   // burgerMenu.addEventListener('click', () => {
   //    body.classList.add('body-block-scroll');
   //    overlay.classList.add('overlay-active');
   //    headerNav.classList.add('header__nav--active');
   // })

   // closeNav.addEventListener('click', () => {
   //    body.classList.remove('body-block-scroll');
   //    overlay.classList.remove('overlay-active');
   //    headerNav.classList.remove('header__nav--active');
   // })

   // overlay.addEventListener('click', () => {
   //    body.classList.remove('body-block-scroll');
   //    overlay.classList.remove('overlay-active');
   //    headerNav.classList.remove('header__nav--active');
   // })

   const rootElement = createRoot(document.querySelector('.container'));
   rootElement.render(<App />);
});