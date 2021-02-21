const bcrypt = require("bcrypt");
const saltrounds = 10;
const io = require("./express/express.js");
const users = require("./firebase/firebase.js");

function sessionId(length) {
  let randomChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let result = '';
  for (let i = 0; i < length; i++) {
    result += randomChars.charAt(Math.floor(Math.random() * randomChars.length));
  }
  return result;
}

