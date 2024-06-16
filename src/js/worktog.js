const formDom = document.querySelector('.worktog-form');
const iconSuccessForm = document.querySelector('.worktog-form-icon');

const backdropDom = document.querySelector('.backdrop');
const modalBtnCloseDom = document.querySelector('.worktog-modal-btn');

console.log(modalBtnCloseDom);
const pattern = /^\w+(\.\w+)?@[a-zA-Z_]+\.[a-zA-Z]{2,3}$/;
const { email, message } = formDom.elements;

const btnModalDom = document.querySelector('worktog-modal-button');
// Описаний у документації
import iziToast from 'izitoast';
// Додатковий імпорт стилів
import 'izitoast/dist/css/iziToast.min.css';

formDom.addEventListener('input', handleChange);
function handleChange(event) {
  if (event.target.name === 'email' && event.target.value) {
    if (pattern.test(`${event.target.value}`)) {
      iconSuccessForm.classList.add('valid');
    } else {
      iconSuccessForm.classList.remove('valid');
    }
  }
  if (event.target.name === 'massage' && event.target.value) {
    console.log(event.target.value);
  }
  // реба додати локалсторадж для зберігання данних
}

const BASE_URL = 'https://portfolio-js.b.goit.study/api';
const END_POPINT_GET = '/reviews';
const END_POPINT_POST = '/requests';
const curUrlGet = BASE_URL + END_POPINT_GET;
const curUrlPost = BASE_URL + END_POPINT_POST;
formDom.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  event.target.default = true;
  // треба додати локалсторадж для отримання данних
  // fetch(`${curUrlPost}`, {
  //   methon: 'PATCH',
  //   headers: {
  //     'Context-Type': 'application/json',
  //   },
  //   body: JSON.stringify({
  //     complited: true,
  //   }),
  // });

  fetch(curUrlGet)
    .then(data => {
      if (!data.ok) {
        iziToast.error({
          title: 'Warning',
          message: `Data.status is ${data.status} unseccess!`,
        });
        throw new Error(data.status);
      }
      backdropDom.classList.add('is-open');
      getModal();
    })
    .catch(error => {
      iziToast.error({
        title: 'Warning',
        message: `Get data for ${curUrlGet} unseccess!`,
      });
    })
    .finally((event.target.default = false));

  iconSuccessForm.classList.remove('valid');
  formDom.reset();
}

function getModal() {
  backdropDom.classList.add('is-open');
  document.addEventListener('keydown', handleEsc);
  backdropDom.addEventListener('click', handleClick);
}

function handleEsc(event) {
  if (event.code == 'Escape') {
    backdropDom.classList.remove('is-open');
    document.removeEventListener('keydup', handleEsc);
    backdropDom.removeEventListener('click', handleClick);
  }
}

function handleClick(event) {
  const isClickIbackdrop = backdropDom === event.target;
  const icClickBtnClose =
    event.target.closest('.worktog-modal-btn') === modalBtnCloseDom;

  if (isClickIbackdrop || icClickBtnClose) {
    backdropDom.classList.remove('is-open');
    document.removeEventListener('keydup', handleEsc);
    backdropDom.removeEventListener('click', handleClick);
  }
}
