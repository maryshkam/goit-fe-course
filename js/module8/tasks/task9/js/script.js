'use strict';
/*
  На вкладках HTML и CSS уже готовая верстка модального окна.
  По умолчанию модальное окно скрыто классом modal-hidden.
  
  Напишите скрипт который реализует следующее поведение:
 
  - При клике на кнопке с надписью "Open Modal", модальное окно с классом modal, 
    должно появляться. Для этого необходимо убрать класс modal-hidden. 
    Для выбора модального модального окна используйте класс js-modal-backdrop
 
  - При открытом модальном окне, клик на кнопку с крестиком (data-action="close-modal")
    или на серый фон с прозрачностью (js-modal-backdrop), модальное окно должно закрываться.
*/

const button = document.querySelector('.btn');
button.addEventListener('click', handleClick);

function handleClick ()  {
  const modal = button.nextElementSibling;
  modal.classList.remove('modal-hidden');
}

const close = document.querySelector('.close-btn');
close.addEventListener('click', closeModal);



function closeModal () {
  if(event.target === closeFon || event.target === close) {
  const hidden = button.nextElementSibling;
  hidden.classList.add('modal-hidden');
}
}

const closeFon = document.querySelector('.modal');
closeFon.addEventListener('click', closeModal);