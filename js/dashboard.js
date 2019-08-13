const l = document.querySelector('#expense-table-plus-sign');
const m = document.querySelector('#income-table-plus-sign');


l.addEventListener('click', function() {
     body.classList.add('pop-up-expense');
});
m.addEventListener('click', function() {
     body.classList.add('pop-up-income');
});
