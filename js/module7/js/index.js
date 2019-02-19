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
];

function createPostCard() {
  // const body = document.querySelector('body');
  const element = document.createElement('div');
  // body.prepend(element);
  element.classList.add('movie');
  const foto = document.createElement('img');
  element.append(foto);
  foto.classList.add('movie__image');
  foto.setAttribute('src', "http://image.tmdb.org/t/p/w500/rPdtLWNsZmAtoZl9PK7S2wE3qiS.jpg");
  foto.setAttribute('alt', "movie image");
 
  const movieBody = document.createElement('div');
  element.append(movieBody);
  movieBody.classList.add('movie__body');
 
  const movieTittle = document.createElement('h2');
  movieBody.append(movieTittle);
  movieTittle.classList.add('movie__title');
  movieTittle.textContent = "The Godfather";
 
  const description = document.createElement('p');
  movieBody.append(description);
  description.textContent = "Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.";
 description.classList.add('movie__description');
 
 const movieDate = document.createElement('p');
 movieDate.classList.add('movie__date');
 movieBody.append(movieDate);
 movieDate.textContent = 'Released: 1972-03-14';
 
 
 const movieRating = document.createElement('p');
 movieRating.classList.add('movie__rating');
 movieBody.append(movieRating);
 movieRating.textContent = 'Rating: 8.6';
}