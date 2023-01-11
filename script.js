'use strict';


const ul = document.createElement('ul');
const getUl = () => document.querySelector('ul');
const newLi = () => document.createElement('li');

const getText = () => {
  const text = prompt('Введите элемент списка:');
  return text;
};


const listClear = () => {
  const ul = getUl();
  ul.textContent = '';
};


const listPop = () => {
  const liList = document.querySelectorAll('li');
  const i = liList.length - 1;
  liList[i].remove();
};


const setUl = (li) => {
  const ul = getUl();
  ul.insertAdjacentElement('beforeend', li);
}


const listGenerator = () => {
  const li = newLi();
  const text = getText();

  if (text === null || text === 'exit') {
    return 'exit';
  }

  if (text.trim() === '') {
    return listGenerator();
  }

  if (text === 'del') {
    listPop();
    return listGenerator();
  }

  if (text === 'clear') {
    listClear();
    return listGenerator();
  }

  li.textContent = text;
  setUl(li);
  return listGenerator();
};


document.body.append(ul);
listGenerator();
