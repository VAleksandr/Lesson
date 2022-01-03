const submit_todo_btn = document.getElementById('submit_todo');
const todo_title_input = document.getElementById('todo_title');
const todo_description_text_area = document.getElementById('todo_description');
const todos = [];

const initAplication = () => {
  if (localStorage.getItem('items')) {
    window.location = 'components/home/home.html';
  } else {

  } 
}

submit_todo_btn.onclick = () => {
  const todo = {
    title: todo_title_input.value,
    description: todo_description_text_area.value
  };

  if (localStorage.getItem('item') !== null) {
    localStorage.setItem('item', JSON.stringify(todo));
    window.location = 'components/home/home.html';
  }
}

const getInputs = () => {
  if (todo_title_input.value.length > 0 && todo_description_text_area.value.length > 0) {
    submit_todo_btn.removeAttribute('disabled');
  } else {
    
  }

  return null;
}

todo_title_input.oninput = () => {
  getInputs();
}

todo_description_text_area.oninput = () => {
  getInputs();
}

initAplication();
