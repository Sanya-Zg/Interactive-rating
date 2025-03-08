const submit = document.getElementById('sub');
const mainBlock = document.querySelector('.rating__block');
const thanksBlock = document.querySelector('.thanks__block');
const buttons = document.querySelectorAll('.num_circle');
const numRating = document.getElementById('num_rating');
let selecRating = null;

buttons.forEach(button => {
    button.addEventListener('click', (event) => {
        buttons.forEach(btn=>btn.classList.remove('white'));
        event.target.classList.add('white');
        selecRating = event.target.value;
    })
})

submit.addEventListener('click', () => {
    mainBlock.style.display = 'none';
    thanksBlock.style.display = 'block';
    numRating.textContent = selecRating;
})