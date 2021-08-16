'use strict';
class First {
  constructor(name) {
    this.hello = function () {
      console.log('Привет, я метод родителя');
    };
  }
}

const hel = new First();


class Second extends First {
  constructor(name) {
    super(name);
    this.hello1 = function () {
      this.hello();
      console.log('Привет, а я наследуемый метод');

    };
  }
}

const hel1 = new Second();

hel1.hello1();