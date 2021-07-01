document.querySelector('.nav__burger').addEventListener('click', () => {
  document.querySelector('.nav__burger').classList.toggle('active');
  document.querySelector('.menu').classList.toggle('active');
});

const reverse = (str) => {
  let temp = '';
  for (let i = str.length - 1; i >= 0; i--) {
    temp += str[i];
  }
  return temp;
}

reverse('foo') // 'oof'
reverse('bar') // 'rab'