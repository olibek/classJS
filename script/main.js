'use strict';
const getDate = function () {
  let dayLong = document.querySelector('#day-time'),
    dayTo = document.querySelector('#day'),
    myTime = document.querySelector('#clock'),
    newYear = document.querySelector('#new-year'),
    date = new Date(),
    seconds = date.getSeconds(),
    minutes = date.getMinutes(),
    hours = date.getHours(),
    hours12 = date.getHours() - (date.getHours() >= 12 ? 12 : 0),
    period = date.getHours() >= 12 ? 'PM' : 'AM',
    day = date.getDay(),
    dayTime = '',
    days = ['Воскресенье', 'Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота'];
  day = days[day];

  function nullCreate() {
    if (seconds < 10) {
      seconds = '0' + seconds;
    }
    if (minutes < 10) {
      minutes = '0' + minutes;
    }
    if (hours < 10) {
      hours = '0' + hours;
    }
    if (hours12 < 10) {
      hours12 = '0' + hours12;
    }
  }

  nullCreate();

  function pushClock(item) {
    if (item >= 6 && item <= 10) {
      dayTime = 'Доброе утро';
    } else if (item > 10 && item <= 17) {
      dayTime = 'Добрый день';
    } else if (item > 17 && item <= 21) {
      dayTime = 'Добрый вечер';
    } else if (item > 21 && item < 6) {
      dayTime = 'Доброй ночи';
    }
  }

  pushClock(hours);

  function getNewYear(newY) {
    let dateStop = new Date(newY).getTime(),
      dateNow = new Date().getTime(),
      newYearDays = Math.floor((dateStop - dateNow) / 1000 / 60 / 60 / 24);
    newYear.textContent = `До нового года осталось: ${newYearDays}  дней!`;
  }
  getNewYear('1 january 2022');

  dayLong.textContent = dayTime;
  dayTo.textContent = `Сегодня: ${day}`;
  myTime.textContent = `Текущее вермя  ${hours12}:${minutes}:${seconds} ${period}`;



};
setInterval(getDate, 1000);