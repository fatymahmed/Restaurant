const myMenu = () => {
  const dynamicContent = document.createElement('div');
  dynamicContent.id = 'dynamicContent';
  const element = document.getElementById('dynamicContent');
  element.innerHTML = '';
  element.innerHTML = '<h4>Our menu: </h4><br>';
  element.innerHTML += '<p>pizza $7</p>';
  element.innerHTML += '<p>fries $2</p>';
  element.innerHTML += '<p>beef burger $5</p>';
  element.innerHTML += '<p>chicken burger $4.50</p>';
  element.appendChild(dynamicContent);
};

export default myMenu;
