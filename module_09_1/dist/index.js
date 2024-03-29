"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var validator = require('validator');

var greeter = require('./greetier');

greeter("Hello Mnago!");

var validateEmail = function validateEmail(email) {
  return validator.isEmail(email);
};

console.log('Is mango@mail.com a valid email?: ', validateEmail('mango@mail.com'));
console.log('Is Mangozedog.com a valid email?: ', validateEmail('Mangozedog.com'));

var User = /*#__PURE__*/function () {
  // static hello = 'hi!';
  function User(name) {
    _classCallCheck(this, User);

    this._name = name;
  }

  _createClass(User, [{
    key: "name",
    get: function get() {
      return this._name;
    }
  }]);

  return User;
}();

var mango = new User("Mango");
console.log(mango.name);