const changeBodyColor = () => {
  const body = document.querySelector("body");
  body.style.background = "#3343ff";
};

const addElementToList = () => {
    const list = document.querySelector("#list");
    console.log(list);
    const item = document.createElement("li");
    item.innerHTML = "Soy parte de la lista";
    list.appendChild(item);
};

const hiddeParagraph = () => {
    const paragraph = document.querySelector("#paragraph");
    paragraph.style.display = paragraph.style.display === 'none' ? '' : 'none';
}

const addRowTable = () => {
  const table = document.querySelector('#table');
  const row = document.createElement('tr');
  const collumn = document.createElement('td');
  collumn.innerHTML = 'Soy una celda';
  table.appendChild(row);
  row.appendChild(collumn);
  row.appendChild(collumn);
}

const validateEmptyForm = () => {
  
  let validate = false;
  const regex = /[\s\w\d]+/;

  const form = document.querySelector('#form');
  const name = form.querySelector('#name').value.trim();
  const email = form.querySelector('#email').value.trim();

  const nameCheck = form.querySelector('.nameCheck');
  const emailCheck = form.querySelector('.emailCheck');

  const validateName = regex.test(name);
  const validateEmail = regex.test(email);

  !validateName
  ? nameCheck.style.display = 'block'
  : nameCheck.style.display = 'none';
  
  !validateEmail
  ? emailCheck.style.display = 'block'
  : emailCheck.style.display = 'none';

}
