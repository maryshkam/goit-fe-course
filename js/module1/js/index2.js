'use strict';

let groupSharm = 15;
let groupHurgada = 25;
let groupTaba = 6;

// input number place for tour

let num = prompt('Введіть число необхідної кількості місць');
// проверка условий
if (num === null) {
  alert('Нам очень жаль, приходите еще!');
} else if (Number.isInteger(+num) && num > 0) {
  if (num <= groupHurgada) {
    if (confirm('Есть место в групе Hurgada, согласны ли Вы быть в этой групе?"')) {
      alert('Приятного путешествия в группе Hurgada');
    } else if (num <= groupSharm) {
      if (confirm('Есть место в групе Sharm, согласны ли Вы быть в этой групе?"')) {
        alert('Приятного путешествия в группе Sharm');
      } else if (num <= groupTaba) {
        if (confirm('Есть место в групе Taba, согласны ли Вы быть в этой групе?"')) {
          alert('Приятного путешествия в группе Taba');
        } else {
          alert('Нам очень жаль, приходите еще!');
        }
      } else {
        alert('Извините, столько мест нет в другой группе!');
      }
    } else {
      alert('Извините, столько мест нет в другой группе!');
    }
  } else {
    alert('Извините, столько мест нет ни в одной группе!');
  }

} else {
  alert('Ошибка ввода.');
}