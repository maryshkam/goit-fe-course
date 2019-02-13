'use strict';
/*
  Создайте функцию createMovieCard(), которая 
  создает и возвращает DOM-узел карточки кинофильма.
  
  Разметка с классами есть на вкладке HTML.
  Стили на вкладке CSS.
  
  Используйте createElement для создания узлов.
  Добавьте классы и атрибуты.
*/

function createMovieCard() {
  const body = document.querySelector('body');
  const element = document.createElement('div');
  body.prepend(element);
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

createMovieCard();