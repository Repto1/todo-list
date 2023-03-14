import { TasksList } from './tasks.js';

const ul = document.querySelector('#tasks-list');
const input = document.querySelector('#text-input');
const button = document.querySelector('#button-input');

let tasks = new TasksList(ul);
button.addEventListener('click', () => {
  let task = input.value;
  tasks.add(task);
  input.value = '';
});
