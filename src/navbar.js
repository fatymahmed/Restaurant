const myView = () => {
  const element = document.getElementById('content');
  const navbar = document.createElement('div');
  navbar.id = 'tab';

  const homeBtn = document.createElement('button');
  homeBtn.id = 'home-btn';
  homeBtn.textContent = 'About us';
  homeBtn.className = 'button';
  const menuBtn = document.createElement('button');
  menuBtn.id = 'menu-btn';
  menuBtn.textContent = 'Menu';
  menuBtn.className = 'button';
  const contactBtn = document.createElement('button');
  contactBtn.id = 'contact-btn';
  contactBtn.textContent = 'Contact Us';
  contactBtn.className = 'button';

  navbar.appendChild(homeBtn);
  navbar.appendChild(menuBtn);
  navbar.appendChild(contactBtn);
  element.appendChild(navbar);
};

export default myView;
