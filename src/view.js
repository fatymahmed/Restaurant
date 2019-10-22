import image from './restaurant.jpg';

const myView = () => {
  const element = document.getElementById('content');
  const heading = document.createElement('h1');
  const info = document.createElement('p');

  heading.innerHTML = 'Welcome to Our Restaurant';
  info.innerHTML = 'Food with integrity.';


  const myImage = new Image();
  myImage.src = image;

  element.appendChild(heading);
  element.appendChild(info);
  element.appendChild(myImage);
};

export default myView;
