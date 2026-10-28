const name = '민지성';
const hour = new Date().getHours();

function greet(name) {
  return `안녕하세요, ${name}님!`;
}

function hello(hour) {
  if (hour >= 12) {
    return '좋은 오후입니다.';
  } else {
    return '좋은 아침입니다.';
  }
}

const message = `${greet(name)} ${hello(hour)}`;

console.log(hour);
console.log(message);

const greetingBox = document.querySelector('#greeting');
if (greetingBox) {
  greetingBox.textContent = message;
}

const visitorCount = document.querySelector('#visitor-count');
const visitorBtn = document.querySelector('#visitor-btn');

if (visitorBtn && visitorCount) {
  let visitorNumber = 0;

  visitorBtn.addEventListener('click', function () {
    visitorNumber = visitorNumber + 1;
    visitorCount.textContent = visitorNumber;
  });
}