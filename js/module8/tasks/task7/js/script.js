'use strict';
/*
  Дан набор инпутов. Сделайте так, чтобы при потере фокуса все 
  инпуты проверяли свое содержимое на правильное количество символов. 
  
  - Сколько символов должно быть в инпуте, указывается в атрибуте data-length. 
  - Если введено подходящее количество, то outline инпута становится зеленым, 
    если неправильное - красным. Для добавления стилей, на вкладке CSS есть стили valid и invalid
*/

const element = document.querySelector(".input-list");
element.addEventListener("blur", myBlurFunction);

function myBlurFunction() {
  const target = event.target;
  if ( target.value.length === Number(target.dataset.length) ) {
    if (target.classList.contains('invalid')) {
      target.classList.remove('invalid');
    }
    target.classList.add('valid');
// console.log(true);
} else {
  target.classList.add('invalid');

}

// console.log(false);
}