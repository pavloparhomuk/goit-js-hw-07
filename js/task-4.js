const loginForm = document.querySelector('.login-form');

loginForm.addEventListener('submit', submitHandler);
const profile = {};

function submitHandler(e) {
  e.preventDefault();

  const email = e.currentTarget.elements.email;
  const password = e.currentTarget.elements.password;

  if (email.value === '' || password.value === '') {
    alert('Please fill in all the fields!');
  } else {
    profile.email = email.value;
    profile.password = password.value;

    console.log(profile);
  }
  e.currentTarget.reset();
}
