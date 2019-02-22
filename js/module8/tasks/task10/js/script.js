'use strict';
/*
  Ознакомьтесь с HTML и CSS.
  
  Есть меню навигации, необходимо написать скрипт, который
  при клике на пункт меню добавит ему класс active,
  таким образом выделив текущую (активную) ссылку,
  при этом убрав его у всех остальных элементов меню.
  
  Пунктов меню может быть произвольное количество, используйте
  прием делегирование событий. Учтите клик по самому ul, его
  необходимо игнорировать.
  
  При клике по ссылкам не должна перезагружаться страница!
*/


const click = document.querySelector('ul');
click.addEventListener('click', handleClick);

 let selectedEl = document.querySelector('.active');

  function handleClick (el) {
  const target = event.target;
  if (target !== click) {

  hightlight(target);
} 

}

function hightlight(node) {
  if (selectedEl) {
    selectedEl.classList.remove('active');
  }
  selectedEl = node;
  selectedEl.classList.add('active');
}

