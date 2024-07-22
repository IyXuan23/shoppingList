function createListing(input) {

    const theList = document.getElementById('lst');

    const listing = document.createElement('li');

    //create name of ingredient
    const name = document.createElement('span');
    name.textContent = input;
    name.style.float = 'left';
    name.style.fontSize = '20px';

    //create delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.style.float = 'left';
    deleteButton.style.paddingLeft = '16px';
    deleteButton.style.paddingRight = '16px';

    deleteButton.addEventListener('click', function() {
        const parentLi = this.parentNode;
        parentLi.parentNode.removeChild(parentLi);
    });

    //append to li
    listing.appendChild(name);
    listing.appendChild(deleteButton);
    theList.appendChild(listing);
}

function addItem() {

    const inputBox = document.getElementById('item');

    //gets value and emptys the box
    const input = inputBox.value;
    inputBox.value = '';

    //returns null if the input is empty
    if (input == "") {
        return null;
    }

    else {
        createListing(input);
    }

    inputBox.focus();
}

const addItemButton = document.querySelector('#addItem');

addItemButton.addEventListener('click', addItem);