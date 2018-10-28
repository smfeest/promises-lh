const users = {
  "amy@example.com": {
    dateOfBirth: new Date(1975, 11, 12),
  },
  "bernadette@example.com": {
    dateOfBirth: new Date(1980, 5, 23),
  },
  "howard@example.com": {
  },
  "leonard@example.com": {
    dateOfBirth: new Date(1975, 3, 30),
  },
  "penny@example.com": {
    dateOfBirth: new Date(1985, 10, 30),
  },
  "rajesh@example.com": {
    dateOfBirth: new Date(1981, 3, 30),
  },
  "sheldon@example.com": {
  },
};

export default class UserService {
  findByEmail(email) {
    return randomDelay().then(() => {
      const user = users[email];

      if (!user) {
        throw new UserNotFoundError(email);
      }

      return user;
    });
  }
}

export class UserNotFoundError extends Error {
  constructor(email) {
    super(`User '${email}' not found`);
  }
}

function randomDelay() {
  return new Promise(resolve => {
    window.setTimeout(resolve, 200 + (Math.random() * 1000));
  });
}
