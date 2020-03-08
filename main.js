const get = id => document.querySelector(id);

const newText = get('#newText');
const newBtn = get('#newBtn');
const pendingList = get('#pendingList');
const completedList = get('#completedList');

newBtn.addEventListener('click', () => {
  if (newText.value !== '') {
    const newTodo = document.createElement('li');
    newTodo.innerText = newText.value;
    newTodo.classList.add("text-center", "p-3", "bg-white", "mt-4", "rounded", "shadow-100", "cursor-pointer", "hover:bg-green-500")
    pendingList.appendChild(newTodo);
    newText.value = '';
  } else {
    alert('Please provide a task to add')
  }
});

newText.addEventListener('keyup', event => {
  if (event.keyCode === 13) {
    event.preventDefault();
    newBtn.click();
  }
})

const move = (element, destination, convertTo) => {
  element
  if (element.localName == 'li') {
    if (convertTo === 'completed') {
      element.classList.add(
        "line-through",
        "text-red-500",
        "hover:bg-red-500",
        "hover:text-white"
      );
      element.classList.remove("hover:bg-green-500")
    } else {
      element.classList.remove(
        "line-through",
        "text-red-500",
        "hover:bg-red-500",
        "hover:text-white"
      );
      element.classList.add("hover:bg-green-500")
    }
    destination.appendChild(element);
  }
};

pendingList.addEventListener('click', event => {

  move(event.target, completedList, 'completed');
});

completedList.addEventListener('click', event => {
  move(event.target, pendingList, 'pendings');
});