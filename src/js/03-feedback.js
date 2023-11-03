import throttle from 'lodash.throttle';

const form = document.querySelector('.feedback-form');
const FORM_DATA_KEY = 'feedback-form-state';
const { email, message } = form.elements;
const localStorGet = localStorage.getItem(FORM_DATA_KEY);

form.addEventListener('input', throttle(handlerInput, 500));
form.addEventListener('submit', handlerSubmit);

function handlerSubmit(e) {
  e.preventDefault();

  const data = {};
  const formData = new FormData(e.currentTarget);

  formData.forEach((value, name) => {
    data[name] = value;
  });

  if (data.email === '' || data.message === '') {
    return alert(
      'To send the form, you must fill in all fields. Please fill them out'
    );
  }
  console.log(data);
  form.reset();
  localStorage.removeItem(FORM_DATA_KEY);
}

function handlerInput(e) {
  const dataSubmit = { email: email.value, message: message.value };
  localStorage.setItem(FORM_DATA_KEY, JSON.stringify(dataSubmit));
}

if (localStorGet) {
  const dataInLocalStore = JSON.parse(localStorGet);
  email.value = dataInLocalStore.email;
  message.value = dataInLocalStore.message;
}
