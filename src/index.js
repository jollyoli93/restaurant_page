import _ from 'lodash';
import './style.css';
import Icon from './icon.png';
import hello from './text.js';

 function component() {
   const element = document.createElement('div');

   // Lodash, now imported by this script
   element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  const myIcon = new Image();
  myIcon.src = Icon;

  element.appendChild(myIcon);

   return element;
 }

 hello('Hello you cunt');

 document.body.appendChild(component());