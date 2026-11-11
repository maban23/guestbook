const items = ['student01: 안녕하세요', 'student02: 고맙습니다', 'student03: 반갑습니다'];
const list = document.querySelector('#list');
const count = document.querySelector('#count');
const textInput = document.querySelector('#text');
const addButton = document.querySelector('#add');

function renderList() {
  list.innerHTML = '';

  items.forEach((item, index) => {
    const li = document.createElement('li');
    li.className = 'guestbook-item';

    const text = document.createElement('span');
    text.textContent = item;

    const deleteButton = document.createElement('button');
    deleteButton.type = 'button';
    deleteButton.textContent = '삭제';
    deleteButton.className = 'delete-btn';

    deleteButton.addEventListener('click', () => {
      items.splice(index, 1);
      renderList();
    });

    li.append(text, deleteButton);
    list.appendChild(li);
  });

  count.textContent = `${items.length}개`;
}

addButton.addEventListener('click', () => {
  const value = textInput.value.trim();
  if (!value) {
    return;
  }

  items.push(value);
  textInput.value = '';
  renderList();
});

renderList();
