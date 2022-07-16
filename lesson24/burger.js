console.log('Hello, JS!');

function toggleBurger() {
  // document.querySelector('.nav');
  var navigation = document.getElementById('navigation');

  if (navigation.style.display == false || navigation.style.display == 'none') {
    navigation.style.display = 'block';
  } else {
    navigation.style.display = 'none';
  }
}
