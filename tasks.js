export class TasksList {
  list = [];
  ul;

  constructor(e) {
    this.ul = e;
    this.read();
    this.render();
  }

  save() {
    localStorage.setItem('tasks', JSON.stringify(this.list));
  }

  read() {
    let saved = localStorage.getItem('tasks');
    if (saved) {
      this.list = JSON.parse(saved);
    }
  }

  add(task) {
    this.list.push(task);
    this.render();
    this.save();
  }

  remove(task) {
    var cont = this.list.indexOf(task);
    if (cont >= 0) {
      this.list.splice(cont, 1);
      this.render();
      this.save();
    }
  }

  render() {
    this.ul.innerHTML = '';
    this.list.forEach((task) => {
      const listCreate = document.createElement('li');
      const buttonCreate = document.createElement('button');
      buttonCreate.innerText = 'remove';
      buttonCreate.addEventListener('click', () => {
        this.remove(task);
      });
      listCreate.innerText = task;
      listCreate.appendChild(buttonCreate);
      this.ul.appendChild(listCreate);
    });
  }
}
