import UserService from '../services/user_service.js';

function getFollowers(emailInput, outputTextArea, submitButton) {
  const userService = new UserService();

  // TODO
}

document.getElementById('ex2').addEventListener('submit', event => {
  event.preventDefault();
  getFollowers(
    document.getElementById('ex2-email'),
    document.getElementById('ex2-followers'),
    document.getElementById('ex2-submit'));
});
