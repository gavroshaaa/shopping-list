const sendInput = document.querySelector('#input');
const itemContainer = document.querySelector('#items');

sendInput.addEventListener('keydown', function(event) {
    if (event.key == 'Enter') {
        const groceriesItem = sendInput.value;

        const newItem = document.createElement('div');
        newItem.textContent = groceriesItem;
        newItem.addEventListener('click', function() {
            newItem.classList.toggle('done');
        });

        if (groceriesItem != '') {
            itemContainer.append(newItem);
        }

        sendInput.value = '';
    };
});