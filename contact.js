document.addEventListener('DOMContentLoaded', function () {
    const contactItems = document.querySelectorAll('.contact-item');
    let delay = 0;
    
    contactItems.forEach(item => {
      setTimeout(() => {
        item.classList.add('show');
      }, delay);
      delay += 600; 
    });
  });