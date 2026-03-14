// Document Object Model
const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

//const li = document.createElement('li');
//const deleteButt = document.createElement('button');
//li.textContent = input.value;
//deleteButt.textContent = '❌';
//li.append(deleteButt);
//list.append(li);
//deleteButt.setAttribute('aria-label', 'Close');
//deleteButt.setAttribute('id', 'close-button');

// Handling DOM Events

button.addEventListener('click', function() {
  // Code to execute when the element is clicked
if (input.value.trim() !== ''){
    const li = document.createElement('li');
    li.textContent = input.value;
    const deleteButt = document.createElement('button');
    deleteButt.textContent = '❌';
    deleteButt.addEventListener('click', function() {
        list.removeChild(li);
        input.focus();
    });
    li.append(deleteButt);
    list.append(li);
    input.value = '';
}

input.focus();
});