'use strict';

document.addEventListener('DOMContentLoaded', () => {
  //удаляем рекламу
  document.querySelector('.adv').remove();
  //меняем фон у страницы
  document.body.style.backgroundImage = 'url(image/you-dont-know-js.jpg)';

  const blocksBook = document.querySelectorAll('.book');
  const blockBooks = document.querySelector('.books');
  const book1 = blocksBook[1];
  const book2 = blocksBook[0];
  const book3 = blocksBook[4];
  const book4 = blocksBook[3];
  const book5 = blocksBook[5];
  const book6 = blocksBook[2];

  // console.log(blocksBook);

  book1.after(book2);
  book2.after(book3);
  book3.after(book4);
  book4.after(book5);

  // Изменил заголовок в 3 книге
  const titleBook3 = book3.querySelector('h2 a');
  titleBook3.textContent = 'Книга 3. this и Прототипы Объектов';
  console.log(titleBook3);

  // Изменил оглавление в книге 2
  const listItemBook2 = book2.querySelectorAll('ul li');

  // console.log(listItemBook2);

  listItemBook2[1].after(listItemBook2[3]);
  listItemBook2[3].after(listItemBook2[6]);
  listItemBook2[6].after(listItemBook2[8]);
  listItemBook2[9].after(listItemBook2[2]);

  // Изменил оглавление в книге 5

  const listItemBook5 = book5.querySelectorAll('ul li');

  console.log(listItemBook5);

  listItemBook5[1].after(listItemBook5[9]);
  listItemBook5[9].after(listItemBook5[3]);
  listItemBook5[3].after(listItemBook5[4]);
  listItemBook5[7].after(listItemBook5[5]);

  // Добавил главу в 6 книге

  const listItemBook6 = book6.querySelectorAll('ul li');

  console.log(listItemBook6);

  listItemBook6[8].insertAdjacentHTML('afterend', '<li>Глава 8: За пределами ES6</li>');

});