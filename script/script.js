'use strict';
class First {
  hello() {
    console.log('Привет, я метод родителя');
  }
}

const hel = new First();


class Second extends First {

  hello1() {
    super.hello();
    console.log('Привет, а я наследуемый метод');
  }
}

const hel1 = new Second();

hel1.hello1();