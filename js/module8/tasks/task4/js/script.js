'use strict';
/*
  Есть форма с набором радиокнопок. Пользователь выбирает вариант ответа, 
  после чего нажимает кнопку "Submit" и происходит отправка формы.
  
  При отправке формы:
    - не должна перезагружаться страница
    - необходимо получить выбранную опцию и вывести в параграф с классом .result
*/


const handleClick = () => {
  
  const input = document.querySelectorAll('input');
  let arr = Array.from(input);
  let inputs = arr.find(el => el.checked);
  // let res = document.querySelector('.result').textContent;
  let result = document.querySelector('.result');
  // result.textContent = 'Result: ';
  result.textContent =  `Result: ${inputs.value} `;
  
}
  
  const btn = document.querySelector('.btn');
  btn.addEventListener('click', handleClick);