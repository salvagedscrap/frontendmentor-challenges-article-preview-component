const closebtn = document.querySelector('.close')

const share = document.querySelector('.share')
const shareButton = document.querySelector('.share-button')

const showShareContainer = document.querySelector('.share-show');



// open.addEventListener('click', () => container.classList.add('show-nav'))


shareButton.addEventListener('click', () => share.classList.add('share-show'));
shareButton.addEventListener('click',() => shareButton.classList.add('share-button-dark') );

closebtn.addEventListener('click', () => share.classList.remove('share-show'));
closebtn.addEventListener('click',() => shareButton.classList.remove('share-button-dark') );
