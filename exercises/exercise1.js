import UserService from '../services/user_service.js';

function getAge(emailInput, ageInput, submitButton) {
  const userService = new UserService();

  submitButton.textContent = 'Finding age...'

  userService
    .findByEmail(emailInput.value)
    .then(({ dateOfBirth }) => {
      if (dateOfBirth) {
        return calculateAge(dateOfBirth);
      } else {
        throw Error('Age not known');
        // or Promise.reject(Error('Age not known'));
      }
    })
    .catch(error => error.message)
    .then(value => {
      ageInput.value = value;
      submitButton.textContent = 'Find age';
    });
}

function calculateAge(dateOfBirth) {
  const today = new Date();

  const years = today.getFullYear() - dateOfBirth.getFullYear();
  const months = today.getMonth() - dateOfBirth.getMonth();

  if (months < 0 || (months == 0 && today.getDate() > dateOfBirth.getDate())) {
    return years - 1;
  } else {
    return years;
  }
}

document.getElementById('ex1').addEventListener('submit', event => {
  event.preventDefault();
  getAge(
    document.getElementById('ex1-email'),
    document.getElementById('ex1-age'),
    document.getElementById('ex1-submit'));
});
