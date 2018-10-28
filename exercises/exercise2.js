import UserService from '../services/user_service.js';

function getFollowers(emailInput, outputTextArea, submitButton) {
  const userService = new UserService();

  submitButton.disabled = true;

  userService
    .findByEmail(emailInput.value)
    .then(({ followers }) => Promise.all(
      followers.map(followerEmail =>
        getLocation(followerEmail).then(location => `${followerEmail} (${location})`))))
    .then(followersWithLocations => {
      outputTextArea.value = followersWithLocations.join('\n');
      submitButton.disabled = false;
    });

  function getLocation(email) {
    return userService
      .findByEmail(email)
      .then(user => user.location)
      .catch(() => 'location unavailable');
  }
}

document.getElementById('ex2').addEventListener('submit', event => {
  event.preventDefault();
  getFollowers(
    document.getElementById('ex2-email'),
    document.getElementById('ex2-followers'),
    document.getElementById('ex2-submit'));
});
