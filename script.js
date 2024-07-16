const sendInput = document.querySelector('#input');
const Item = document.querySelector('#items');

sendInput.addEventListener('keydown', function(event) {
    if (event.key == 'Enter') {
        const groceriesItem = sendInput.value;

        const newItem = document.createElement('div');
        newItem.textContent = groceriesItem;
        newItem.addEventListener('click', function() {
            newItem.classList.toggle('done');
        });

        if (groceriesItem != '') {
            Item.append(newItem);
        }

        sendInput.value = '';
    };
});