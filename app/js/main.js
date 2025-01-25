document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            header.classList.add('sticky');
        } else {
            header.classList.remove('sticky');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-btn');
    const closeMenu = document.querySelector('.close-menu');
    const menuContent = document.querySelector('.menu-content');
  
    // Открыть меню
    menuBtn.addEventListener('click', () => {
      menuBtn.style.display = 'none';
      closeMenu.style.display = 'inline-block';
      menuContent.style.display = 'block';
    });
  
    // Закрыть меню
    closeMenu.addEventListener('click', () => {
      closeMenu.style.display = 'none';
      menuContent.style.display = 'none';
      menuBtn.style.display = 'inline-block';
    });
  
    // Закрыть меню при клике вне его
    document.addEventListener('click', (event) => {
      if (
        menuContent.style.display === 'block' &&
        !menuContent.contains(event.target) &&
        !menuBtn.contains(event.target) &&
        !closeMenu.contains(event.target)
      ) {
        closeMenu.style.display = 'none';
        menuContent.style.display = 'none';
        menuBtn.style.display = 'inline-block';
      }
    });
  });
  
