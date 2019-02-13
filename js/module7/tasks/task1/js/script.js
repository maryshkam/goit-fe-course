'use strict';


let menu = document.querySelectorAll('.categories');

  let arr = Array.from(menu);

  
  for (let i = 0; i < arr.length; i +=1) {
    const list = arr[i].children[0].children.length;
    let text = arr[i].childNodes[0];
    console.log(text, list);
  }