'use strict';

/* Clone */

/*Select all divs contained within the original-container class and assign to variable eventDiv*/
const eventDiv = document.querySelectorAll('.original-container div')
const copyArea = document.querySelector('.copy-container')

/*forEach function adds event listener to each div in eventDiv */
eventDiv.forEach(element => element.addEventListener('click', (evt) => {
    let cloneMaterial = evt.target.parentElement.outerHTML;
    copyArea.insertAdjacentHTML("beforeend", cloneMaterial);
}))

/* Delete */
const resetButton = document.querySelector('button')

resetButton.addEventListener('click', (evt) => {
    copyArea.innerHTML = '';
})
