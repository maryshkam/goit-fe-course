'use strict';
/*
  Дан ul, а внутри него произвольное количество li с текстом и кнопкой. 
  Сделайте так, чтобы по нажатию на кнопку, удалялся тот li в котором
  она находится. Обязательно используйте делегирование событий.
*/

function handleClick  (event) {
  // event.preventDefault();
  const target = event.target;
  if (target.tagName === 'BUTTON') {
    target.parentElement.remove();
    // const el = target.parentElement;
    // el.remove();
    
  } 

  
}

const element = document.querySelector('.list');
element.addEventListener('click', handleClick);
