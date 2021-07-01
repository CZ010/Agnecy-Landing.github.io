'use strict'
document.querySelectorAll('a.tabs-triggers__link').forEach((item) =>
  item.addEventListener('click', (e) => {
    e.preventDefault();
    const id = e.target.getAttribute('href').replace('#', '');

    document.querySelectorAll('.tabs-triggers__link').forEach(
      (child) => child.classList.remove('tabs-triggers__link_active'));
    document.querySelectorAll('.tabs-content__item').forEach(
      (child) => child.classList.remove('tabs-content__item_active'));

    item.classList.add('tabs-triggers__link_active');
    document.getElementById(id).classList.add('tabs-content__item_active');
  })
);

document.querySelector('.tabs-triggers__link').click();