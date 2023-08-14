const button = document.querySelector('.btn');
const input = document.querySelector('.input');
const container = document.querySelector('.search')


container.addEventListener('click', () => {
    container.classList.toggle('active');
    input.focus();
})

// button.addEventListener('click', () => {
//     if(button.classList.contains('active')) {
//         container.classList.remove('active');
//     } else {
//         container.classList.add('active');
//     }
// });