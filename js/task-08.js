/*Задание 8
Напиши скрипт управления формой логина.

<form class="login-form">
  <label>
    Email
    <input type="email" name="email" />
  </label>
  <label>
    Password
    <input type="password" name="password" />
  </label>
  <button type="submit">Login</button>
</form>
Обработка отправки формы form.login-form должна быть по событию submit.
При отправке формы страница не должна перезагружаться.
Если в форме есть незаполненные поля, выводи alert с предупреждением о том, что все поля должны быть заполнены.
Если пользователь заполнил все поля и отправил форму, собери значения полей в обьект, где имя поля будет именем свойства, 
а значение поля - значением свойства. Для доступа к элементам формы используй свойство elements.
Выведи обьект с введенными данными в консоль и очисти значения полей формы методом reset.
*/


const form = document.querySelector('.login-form');
const inputEmail = form.elements.email;
const inputPassword = form.elements.password;
let dataForm = {};
form.addEventListener("submit", (event) => {
    event.preventDefault();
    if (inputEmail.value == '' || inputPassword.value == '') {
        alert('Все поля должны быть заполнены!'); 
    } else {
        dataForm = {
            email: inputEmail.value,
            password: inputPassword.value,
        };
        inputEmail.value = '';
        inputPassword.value = '';
        console.log(dataForm);
    }
});



/*
const form = document.querySelector('.login-form');
const inputs = form.elements;
let dataForm = {};
form.addEventListener("submit", (event) => {
    event.preventDefault();
   
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].type != "submit") {
            let attrName = inputs[i].name;
            dataForm[attrName] = inputs[i].value;
           
        }
    }
    let allfieldsFilled = "yes";
    for (let i = 0; i < inputs.length; i++) {
        if (inputs[i].type != "submit") {
            if (inputs[i].value == '') {
                alert('Все поля должны быть заполнены!');
                allfieldsFilled = "no";
                break;
            }
        }
    }
    if (allfieldsFilled == "yes") {
        console.log(dataForm);
        for (let i = 0; i < inputs.length; i++) {
            inputs[i].value = '';
        }
    }
});
*/



