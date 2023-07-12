const dismissModalButton = document.getElementById('dismiss');
const successModal = document.getElementById('success');
const signupModal = document.getElementById('newsletter');
const subscribeButton = document.getElementById('subscribe');
const inputSubHeading = document.getElementById('label-sub');
const inputField = document.getElementById('input');

dismissModalButton.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('clicked');
  successModal.classList.add('close');
  signupModal.classList.remove('close');
});

subscribeButton.addEventListener('click', function (e) {
  e.preventDefault();
  console.log('clicked');

  // Email validation regex pattern
  const emailPattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  // Check if the input value is a valid email
  if (!emailPattern.test(inputField.value)) {
    inputSubHeading.classList.remove('close');
    inputSubHeading.classList.add('error');
    inputField.classList.add('error-input');
    return;
  } else {
    inputSubHeading.classList.add('close');
    inputSubHeading.classList.remove('error');
    inputField.classList.remove('error-input');
  }

  setTimeout(function () {
    signupModal.classList.add('close');
    successModal.classList.remove('close');
  }, 1000);
});
