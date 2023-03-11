//show text on hover from the widget "Icon-List" 


const iconListItems = document.querySelectorAll('.elementor-icon-list-item');

iconListItems.forEach(item => {
  const iconElement = item.querySelector('.elementor-icon-list-text');
  if (iconElement !== null) {
    iconElement.style.display = 'none';
  }

  item.addEventListener('mouseover', () => {
    const iconElement = item.querySelector('.elementor-icon-list-text');
    if (iconElement !== null) {
      iconElement.style.display = 'block';
    }
  });

  item.addEventListener('mouseout', () => {
    const iconElement = item.querySelector('.elementor-icon-list-text');
    if (iconElement !== null) {
      iconElement.style.display = 'none';
    }
  });
});
