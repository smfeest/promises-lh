const users = {
  "amy@example.com": {
    dateOfBirth: new Date(1975, 11, 12),
    location: "Glendale",
    followers: [
      "leonard@example.com",
      "sheldon@example.com",
    ],
  },
  "bernadette@example.com": {
    dateOfBirth: new Date(1980, 5, 23),
    location: "Cheesecake Factory",
    followers: [
      "amy@example.com",
      "howard@example.com",
      "rajesh@example.com",
    ],
  },
  "howard@example.com": {
    location: "Rather not say",
    followers: [
      "amy@example.com",
      "leonard@example.com",
      "leslie@example.com",
      "sheldon@example.com",
    ],
  },
  "leonard@example.com": {
    dateOfBirth: new Date(1975, 3, 30),
    location: "Pasadena",
    followers: [
      "bernadette@example.com",
      "howard@example.com",
      "rajesh@example.com",
    ],
  },
  "penny@example.com": {
    dateOfBirth: new Date(1985, 10, 30),
    location: "Pasadena",
    followers: [
      "leonard@example.com",
      "rajesh@example.com",
    ],
  },
  "rajesh@example.com": {
    dateOfBirth: new Date(1981, 3, 30),
    location: "New Delhi",
    followers: [
      "amy@example.com",
      "penny@example.com",
      "sheldon@example.com",
    ],
  },
  "sheldon@example.com": {
    location: "Galveston",
    followers: [
      "leonard@example.com",
      "rajesh@example.com",
    ],
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
