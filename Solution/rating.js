// rating.js

function showRating() {
    const selectedRating = document.querySelector('.rating .selected').textContent;
    document.getElementById('selectedRating').textContent = 'You selected ${ratingValue.value} out of 5';
    document.querySelector('.container1').style.display = 'none';
    document.querySelector('.container2').style.display = 'block';
}

const numbers = document.querySelectorAll('.rating span');
numbers.forEach(number => {
    number.addEventListener('click', () => {
        numbers.forEach(num => num.classList.remove('selected'));
        number.classList.add('selected');
    });
});