const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', submitHandler);
const profile = {};

function submitHandler(e) {
  e.preventDefault();

  const email = e.currentTarget.elements.email.value.trim();
  const password = e.currentTarget.elements.password.value.trim();

  if (email === '' || password === '') {
    alert('Please fill in all the fields!');
  } else {
    profile.email = email;
    profile.password = password;

    console.log(profile);
  }
  e.currentTarget.reset();
}
