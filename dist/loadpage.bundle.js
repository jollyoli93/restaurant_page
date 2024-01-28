/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*************************!*\
  !*** ./src/loadpage.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   contents: () => (/* binding */ contents)
/* harmony export */ });
// const createDomElement = class(name){
//   name = this.name;

//   const element = document.createElement(name);
// }

const header = function(){
      //set header div
      const header = document.createElement('div');
      header.className = "header";
      header.textContent += "Restaurant Page"

      //set header children
       
       return header;
}

const main = function(){
  //set main div
  const main = document.createElement('div');
  main.className = "main";

  //set main children
  const siderbar = document.createElement('div');
  const hero = document.createElement('div');
  const mainContent = document.createElement('div');

  siderbar.className = 'sidebar';
  hero.className = 'hero';
  mainContent.className = 'maincontent';

  main.appendChild(siderbar);
  main.appendChild(hero);
  main.appendChild(mainContent); 

  return main;
}


const footer = function(){
    const footer = document.createElement('div');
    footer.className = "footer"
    footer.textContent ="Footer";

    //set footer children

    return footer;
}

const contents = function(){
  const content = document.querySelector('#content');

  const children = [header, main, footer];

  for (let child of children){
    content.appendChild(child());
  }

  return content;

}




/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9hZHBhZ2UuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7O1VBQUE7VUFDQTs7Ozs7V0NEQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHlDQUF5Qyx3Q0FBd0M7V0FDakY7V0FDQTtXQUNBOzs7OztXQ1BBOzs7OztXQ0FBO1dBQ0E7V0FDQTtXQUNBLHVEQUF1RCxpQkFBaUI7V0FDeEU7V0FDQSxnREFBZ0QsYUFBYTtXQUM3RDs7Ozs7Ozs7Ozs7O0FDTkE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2xvYWRwYWdlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gY29uc3QgY3JlYXRlRG9tRWxlbWVudCA9IGNsYXNzKG5hbWUpe1xuLy8gICBuYW1lID0gdGhpcy5uYW1lO1xuXG4vLyAgIGNvbnN0IGVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KG5hbWUpO1xuLy8gfVxuXG5jb25zdCBoZWFkZXIgPSBmdW5jdGlvbigpe1xuICAgICAgLy9zZXQgaGVhZGVyIGRpdlxuICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICBoZWFkZXIuY2xhc3NOYW1lID0gXCJoZWFkZXJcIjtcbiAgICAgIGhlYWRlci50ZXh0Q29udGVudCArPSBcIlJlc3RhdXJhbnQgUGFnZVwiXG5cbiAgICAgIC8vc2V0IGhlYWRlciBjaGlsZHJlblxuICAgICAgIFxuICAgICAgIHJldHVybiBoZWFkZXI7XG59XG5cbmNvbnN0IG1haW4gPSBmdW5jdGlvbigpe1xuICAvL3NldCBtYWluIGRpdlxuICBjb25zdCBtYWluID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIG1haW4uY2xhc3NOYW1lID0gXCJtYWluXCI7XG5cbiAgLy9zZXQgbWFpbiBjaGlsZHJlblxuICBjb25zdCBzaWRlcmJhciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb25zdCBoZXJvID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGNvbnN0IG1haW5Db250ZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG5cbiAgc2lkZXJiYXIuY2xhc3NOYW1lID0gJ3NpZGViYXInO1xuICBoZXJvLmNsYXNzTmFtZSA9ICdoZXJvJztcbiAgbWFpbkNvbnRlbnQuY2xhc3NOYW1lID0gJ21haW5jb250ZW50JztcblxuICBtYWluLmFwcGVuZENoaWxkKHNpZGVyYmFyKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChoZXJvKTtcbiAgbWFpbi5hcHBlbmRDaGlsZChtYWluQ29udGVudCk7IFxuXG4gIHJldHVybiBtYWluO1xufVxuXG5cbmNvbnN0IGZvb3RlciA9IGZ1bmN0aW9uKCl7XG4gICAgY29uc3QgZm9vdGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgZm9vdGVyLmNsYXNzTmFtZSA9IFwiZm9vdGVyXCJcbiAgICBmb290ZXIudGV4dENvbnRlbnQgPVwiRm9vdGVyXCI7XG5cbiAgICAvL3NldCBmb290ZXIgY2hpbGRyZW5cblxuICAgIHJldHVybiBmb290ZXI7XG59XG5cbmNvbnN0IGNvbnRlbnRzID0gZnVuY3Rpb24oKXtcbiAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNjb250ZW50Jyk7XG5cbiAgY29uc3QgY2hpbGRyZW4gPSBbaGVhZGVyLCBtYWluLCBmb290ZXJdO1xuXG4gIGZvciAobGV0IGNoaWxkIG9mIGNoaWxkcmVuKXtcbiAgICBjb250ZW50LmFwcGVuZENoaWxkKGNoaWxkKCkpO1xuICB9XG5cbiAgcmV0dXJuIGNvbnRlbnQ7XG5cbn1cblxuXG5cbmV4cG9ydCB7Y29udGVudHN9OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==