import myView from './navbar';
import './style.css';
import myMenu from './menu';
import myContact from './contact';
import homepage from './homepage';

myView();
homepage();
const homeBtn = document.getElementById('home-btn');
homeBtn.addEventListener('click', (e) => {
  const dynamicContent = document.getElementById('dynamicContent');
  dynamicContent.parentNode.removeChild(dynamicContent);
  homepage();
});

const menuBtn = document.getElementById('menu-btn');
menuBtn.addEventListener('click', (e) => {
  myMenu();
});

const contactBtn = document.getElementById('contact-btn');
contactBtn.addEventListener('click', (e) => {
  myContact();
});
