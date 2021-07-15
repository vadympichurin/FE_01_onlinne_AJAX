const validator = require('validator');

const greeter = require('./greetier');

greeter("Hello Mnago!");

const validateEmail = email => {
  return validator.isEmail(email);
};

console.log('Is mango@mail.com a valid email?: ', validateEmail('mango@mail.com'));
console.log('Is Mangozedog.com a valid email?: ', validateEmail('Mangozedog.com'));

class User {
  static hello = 'hi!';

  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

}

const mango = new User("Mango");
console.log(mango.name);