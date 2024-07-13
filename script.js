const sendInput = document.querySelector('#input');
const inputForm = document.querySelector('.input-wrapper')
const groceryContainer = document.querySelector('.groceries');

sendInput.addEventListener('keydown', function(event) {
    if (event.key == 'Enter') {
        const groceriesItem = sendInput.value;

        const newItem = document.createElement('div');
        newItem.classList.add('items');
        newItem.textContent = groceriesItem;

        if (groceriesItem != '') {
            inputForm.before(newItem);
        }

        sendInput.value = '';
    }

    const elements = groceryContainer.querySelectorAll('.items');
    for (let item of elements) {
        item.addEventListener('click', function() {
            item.classList.toggle('done');

        });
    };
});