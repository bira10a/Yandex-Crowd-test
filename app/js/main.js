"use strict";
document.addEventListener('DOMContentLoaded', () => {
  const runningLine = () => {
    const wrapper = document.querySelector('.running-line__wrapper'),
      span = document.querySelectorAll('.running-line__items span');
    let width = null;
    span.forEach((i, num) => {
      width += i.offsetWidth;
    })
    wrapper.style.width = `${width / 2}px`;
  };
  runningLine();
});