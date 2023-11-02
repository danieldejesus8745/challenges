const form = document.getElementById('form');
const recipients = document.getElementById('recipients');

form.addEventListener('submit', e => {
  e.preventDefault();
});

recipients.addEventListener('blur', e => {
  if (recipients.value.length === 0) {
    recipients.classList.add('red-border');
  } else {
    recipients.classList.remove('red-border');
  }
});