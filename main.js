const decreaseBtn = document.getElementById('decreaseBtn');
const resetBtn = document.getElementById('resetBtn');
const increaseBtn = document.getElementById('increaseBtn');
const counterLabel = document.getElementById('counterLabel');

let count = 0;

if (decreaseBtn){
    decreaseBtn.addEventListener('click', () => {
        count--;
        counterLabel.textContent = count;
    });
}

if (resetBtn){
    resetBtn.addEventListener('click', () => {
        count = 0;
        counterLabel.textContent = count;
    })
}

if (increaseBtn){
    increaseBtn.addEventListener('click', () => {
        count++;
        counterLabel.textContent = count;
    })
}