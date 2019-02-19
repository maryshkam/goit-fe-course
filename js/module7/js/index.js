/*
  1. Модифицируйте готовую функцию createPostCard() из задания 
    номер 6 (https://codepen.io/goit-fe-adv/pen/MVPaeZ) так, 
    чтобы она принимала объект post с данными для заполнения полей 
    в карточке.
      
  2. Создайте функцию createCards(posts), которая принимает массив
    объектов-карточек, вызывает функцию createPostCard(post) столько
    раз, сколько объектов в массиве, сохраняя общий результат и возвращает 
    массив DOM-элементов всех постов.
    
  3. Повесьте все посты в какой-то уже существующий DOM-узел.
*/

const posts = [
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-1.com'
  },
  {
    img: "https://placeimg.com/400/150/nature",
    title: "Post title 2",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-2.com'
  },
  {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 3",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-3.com'
  }
  // {
  //   img: "https://placeimg.com/400/150/nature",
  //   title: "Post title 4",
  //   text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
  //   link: 'link-4.com'
  // }
];

const body = document.querySelector('body');
  
  const container = document.createElement('div');
  body.prepend(container);



function createPostCard(card) {
  
  // card.forEach(val => {
    
    const element = document.createElement('div');
    
    const foto = document.createElement('img');
    element.append(foto);
    foto.setAttribute('src', card.img);
    const cardTitle = document.createElement('h2');
    element.append(cardTitle);
    cardTitle.textContent = card.title;

    const text = document.createElement('p');
  element.append(text);
  text.textContent = card.text;
  const link = document.createElement('a');
  element.append(link);
  link.setAttribute('href', card.link);
  container.append(element);

  // })
  
  
}

function createCards (el) {
el.forEach(value => createPostCard(value));

}

// createPostCard(posts);
createCards(posts);