// Toggle Sidebar
const menuToggle = document.querySelector('.menu-toggle');
const sidebar = document.querySelector('.sidebar');
const closeBtn = document.querySelector('.close-btn');

// Open sidebar
menuToggle.addEventListener('click', () => {
  sidebar.style.left = '0';
});

// Close sidebar by clicking the close button
closeBtn.addEventListener('click', () => {
  sidebar.style.left = '-300px';
});

// Close sidebar if clicked outside of it
document.addEventListener('click', (event) => {
  if (!sidebar.contains(event.target) && !menuToggle.contains(event.target)) {
    sidebar.style.left = '-300px';
  }
});
