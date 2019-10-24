import image from './restaurant.jpg';

const homepage = () => {
  const element = document.getElementById('content');
  const dynamicContent = document.createElement('div');
  dynamicContent.id = 'dynamicContent';
  dynamicContent.id = 'dynamicContent';
  const heading = document.createElement('h1');
  const info = document.createElement('p');
  heading.innerHTML = 'Welcome to Our Restaurant';
  info.innerHTML = 'Food with integrity.';

  const myImage = new Image();
  myImage.src = image;

  dynamicContent.appendChild(heading);
  dynamicContent.appendChild(info);
  dynamicContent.appendChild(myImage);

  element.appendChild(dynamicContent);
};
export default homepage;
