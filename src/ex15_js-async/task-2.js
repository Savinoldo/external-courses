function debounce(cb, delay) {
  let isCooldown = false;

  return function () { //eslint-disable-line
    if (isCooldown) return;

    isCooldown = true;
    setTimeout(() => {
      isCooldown = false;
      cb.apply(this, arguments); //eslint-disable-line
    }, delay);
  };
}

const input = document.querySelector('input');
const text = document.getElementById('text');

input.oninput = debounce((event) => {
  text.innerHTML = event.target.value;
}, 1000);
