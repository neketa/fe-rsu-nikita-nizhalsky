"use strict";

function prepend(container, newElement) {
    var newText = document.createElement('li');
    newText.innerHTML = newElement;
    container.insertBefore(newText, container.children[0]);
}
prepend(list, 'Ann');