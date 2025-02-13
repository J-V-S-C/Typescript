import isEmail from 'validator/lib/isEmail';

export const task2 = () => {
  const SHOW_ERRORS_MESSAGES = 'show-error-message';

  const form = document.querySelector('.form') as HTMLFormElement;
  const username = document.querySelector('.username') as HTMLInputElement;
  const email = document.querySelector('.email') as HTMLInputElement;
  const password = document.querySelector('.password') as HTMLInputElement;
  const password2 = document.querySelector('.password2') as HTMLInputElement;

  form.addEventListener('submit', function (event: Event) {
    event.preventDefault();
    hideErrorMessages(this);
    checkForEmptyFields(username, email, password, password2);
    checkEmail(email);
    checkEqualPasswords(password, password2);
    if (shouldSendForm(this)) console.log('Formulario invalido');
  });

  function checkForEmptyFields(...inputs: HTMLInputElement[]): void {
    inputs.forEach((input) => {
      if (!input.value)
        showErrorMessage(input, 'campo não pode ficar vazio asshole');
    });
  }

  function checkEmail(input: HTMLInputElement): void {
    if (!isEmail(input.value)) showErrorMessage(input, 'Email invalido');
  }

  function checkEqualPasswords(
    password: HTMLInputElement,
    password2: HTMLInputElement
  ) {
    if (password.value !== password2.value) {
      showErrorMessage(password, 'Senhas não batem');
      showErrorMessage(password2, 'Senhas não batem');
    }
  }

  function hideErrorMessages(form: HTMLFormElement): void {
    form.querySelectorAll('.' + SHOW_ERRORS_MESSAGES).forEach((item) => {
      item.classList.remove(SHOW_ERRORS_MESSAGES);

      const errorMessage = item.querySelector(
        '.error-message'
      ) as HTMLSpanElement;
      if (errorMessage) errorMessage.innerText = '';
    });
  }

  function showErrorMessage(input: HTMLElement, msg: string): void {
    const formFields = input.parentElement as HTMLDivElement;
    const errorMessage = formFields.querySelector(
      '.error-message'
    ) as HTMLSpanElement;
    errorMessage.innerText = msg;
    formFields.classList.add(SHOW_ERRORS_MESSAGES);
  }

  function shouldSendForm(form: HTMLFormElement): boolean {
    let send = true;
    form
      .querySelectorAll('.' + SHOW_ERRORS_MESSAGES)
      .forEach(() => (send = false));
    return send;
  }
};
