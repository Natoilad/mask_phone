document.addEventListener('DOMContentLoaded', function () {
  var phoneInput = document.getElementById('phone'); // Assumes your input has an id of 'phone'
  phoneInput.addEventListener('input', function () {
    var value = phoneInput.value;
    if (value === '30') {
      phoneInput.value = '+380';
    } else if (value === '38') {
      phoneInput.value = '+38';
    } else if (value === '+3') {
      phoneInput.value = '+3';
    } else if (value.startsWith('+')) {
      Inputmask('+99 999 999 99 99', { placeholder: '' }).mask(phoneInput);
    } else if (value.startsWith('0')) {
      Inputmask('+38 999 999 99 99', { placeholder: '+38 XXX XXX XX XX' }).mask(
        phoneInput
      );
    } else if (value.startsWith('3')) {
      console.log(phoneInput.value);
      console.log('3');
      Inputmask('+99 999 999 99 99', { placeholder: '' }).mask(phoneInput);
    } else if (value.startsWith('8')) {
      console.log('8');
      Inputmask('+39 999 999 99 99', { placeholder: '+38 XXX XXX XX XX' }).mask(
        phoneInput
      );
    }
  });
  phoneInput.addEventListener('blur', function () {
    if (phoneInput.value.trim() === '') {
      phoneInput.value = '';
      Inputmask.remove(phoneInput);
    }
  });
  phoneInput.addEventListener('keydown', function (event) {
    if (event.key === 'Backspace') {
      if (phoneInput.value === '') {
        Inputmask.remove(phoneInput);
        phoneInput.placeholder = '+38 XXX XXX XX XX';
      }
    }
  });
});
