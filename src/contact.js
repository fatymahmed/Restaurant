const myContact = () => {
  const dynamicContent = document.createElement('div');
  dynamicContent.id = 'dynamicContent';
  const element = document.getElementById('dynamicContent');
  element.innerHTML = '';
  element.innerHTML = '<h4>contact us on :</h4><br>';
  element.innerHTML += '<p>phone number: 047471739731727</p>';
  element.innerHTML += '<p>email address: restaurant@gmail.com</p>';
  element.appendChild(dynamicContent);

};

export default myContact;
