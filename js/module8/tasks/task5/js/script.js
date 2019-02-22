/*
  Дан список изображений. Сделайте так, чтобы по клику на картинку 
  алертом выводился ее src. Обязательно используйте делегирование событий.
*/


function handleClick  (event) {
  // event.preventDefault();
  const target = event.target;
  if (target.tagName === 'IMG') {
    
    alert(event.target.src);
  } 

  
}

const element = document.querySelector('.images');
element.addEventListener('click', handleClick);
