const menuItems = document.querySelectorAll('nav ul a');

menuItems.forEach(item => {
  item.addEventListener('click', e => {
    e.preventDefault();
    menuItems.forEach(item => item.classList.remove('active'));
    item.classList.add('active');
  });
});

