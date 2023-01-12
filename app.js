const item = document.querySelector('.item');
const placeholders = document.querySelectorAll('.placeholder');


const dragStart = (evt) => {
  setTimeout(() => evt.target.classList.add('hold'), 0);
};

const dragEnd = (evt) => {
  evt.target.classList.remove('hold');
};

item.addEventListener('dragstart', dragStart);
item.addEventListener('dragend', dragEnd);

for (let placeholder of placeholders) {
  placeholder.addEventListener('dragover', (evt) => {
    evt.preventDefault();
  });
  placeholder.addEventListener('dragenter', (evt) => {
    evt.target.classList.add('hovered');
  });
  placeholder.addEventListener('dragleave', (evt) => {
    evt.target.classList.remove('hovered');
  });
  placeholder.addEventListener('drop', (evt) => {
    evt.target.append(item);
    evt.target.classList.remove('hovered');
  });
}


