'use strict';
/*
  Есть список категорий с классом categories (на вкладке HTML).
  
  Напишите код, который для каждого элемента li (первая вложенность) 
  в списке categories выведет в консоль:
  - Текст непосредственно в нём (название категории)
  - Количество всех вложенных в него элементов li
  
  К примеру:
    Категория: Животные
    Количество вложенных li: 4
*/
// let menu = document.querySelector('.categories').childNodes[0];
//   const list = document.querySelector('.categories').children[0].children.length;
//   console.log(menu, list);



  let menu = document.querySelectorAll('.categories');

  let arr = Array.from(menu);

  
  for (let i = 0; i < arr.length; i +=1) {
    const list = arr[i].children[0].children.length;
    let text = arr[i].childNodes[0];
    console.log(text, list);
  }
  // console.log(arr);
  // .childNodes[0]
    
    // console.log(menu, list);
