function setActiveSidebarItem() {
  const currentPage = window.location.pathname.split('/').pop() || 'home.html';
  const menuItems = document.querySelectorAll('.menu-item, [class*="menu-item"]');

  menuItems.forEach(item => {
    item.classList.remove('active');

    const href = item.getAttribute('href');
    if (href && (href === currentPage || href.endsWith(currentPage))) {
      item.classList.add('active');
    }
  });
}

document.addEventListener('DOMContentLoaded', setActiveSidebarItem);
