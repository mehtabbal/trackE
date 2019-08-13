const resMenu = document.querySelector('.menu-toggle');
const a = document.querySelector('.plus-sign');
const b = document.querySelector('#wc1');
const c = document.querySelector('#add-expense-btn');
const d = document.querySelector('#wc2');
const e = document.querySelector('#add-income-btn');
const f = document.querySelector('#wc3');
const g = document.querySelector('#cancel-btn-expense');
const h = document.querySelector('#cancel-btn-income');
const i = document.querySelector('#saving-goal-btn');
const j = document.querySelector('#wc4');
const k = document.querySelector('#cancel-btn-savings');

const n = document.querySelector('.usr-logo');
const o = document.querySelector('#wc_1');
const p = document.querySelector('#cb1');
const q = document.querySelector('.pass-logo');
const r = document.querySelector('#wc_2');
const s = document.querySelector('#cb2');
const t = document.querySelector('.email-logo');
const u = document.querySelector('#wc_3');
const v = document.querySelector('#cb3');
const x = document.querySelector('.notify-logo');
const y = document.querySelector('#wc_4');
const z = document.querySelector('#cb4');



const body = document.body;



resMenu.addEventListener('click', function(){
 body.classList.toggle('menu-toggle-mobile');

});

//=================== for the pop-up menus ==================//


a.addEventListener('click', function() {
     body.classList.add('pop-up');
});

b.addEventListener('click', function() {
     body.classList.remove('pop-up');
});
c.addEventListener('click', function() {
     body.classList.add('pop-up-expense');
});
d.addEventListener('click', function() {
     body.classList.remove('pop-up-expense');
});
e.addEventListener('click', function() {
     body.classList.add('pop-up-income');
});
f.addEventListener('click', function() {
     body.classList.remove('pop-up-income');
});
g.addEventListener('click', function() {
     body.classList.remove('pop-up-expense', 'pop-up');
});
h.addEventListener('click', function() {
     body.classList.remove('pop-up-income', 'pop-up');
});
i.addEventListener('click', function() {
     body.classList.add('pop-up-savings');
});
j.addEventListener('click', function() {
     body.classList.remove('pop-up-savings');
});
k.addEventListener('click', function() {
     body.classList.remove('pop-up-savings', 'pop-up');
});


n.addEventListener('click', function() {
    body.classList = "" ;
     body.classList.add('pop-up-settings');
});
o.addEventListener('click', function() {
     body.classList.remove('pop-up-settings');
});

p.addEventListener('click', function() {
     window.alert('Username Changed');
     body.classList = " ";
});

q.addEventListener('click', function() {

     body.classList = "";
     body.classList.add('pop-up-settings_2');
});
r.addEventListener('click', function() {
     body.classList = "" ;
});
s.addEventListener('click', function() {
     window.alert('Password Changed');
     body.classList = " ";
});
t.addEventListener('click', function() {
    body.classList = "" ;
     body.classList.add('pop-up-settings_3');
});
u.addEventListener('click', function() {
body.classList.remove('pop-up-settings_3');
});
v.addEventListener('click', function() {
     window.alert('e-mail Changed');
     body.classList = " ";
});

x.addEventListener('click', function() {

     body.classList.add('pop-up-settings_4');
});
y.addEventListener('click', function() {
     body.classList.remove('pop-up-settings_4');
});
z.addEventListener('click', function() {
  window.alert('Notifications Settings Updated');
  body.classList = " ";
});











//
// const x = document.querySelector('.menu-toggle');
// const y = document.querySelector('.plus-sign');
// const z = document.querySelector('#add-expense-btn');
// const r = document.querySelector('#window-close');
// const body = document.body;
//
//
//
// x.addEventListener('click', function(){
//  body.classList.toggle('menu-toggle-mobile');
//
// });
//
// //=================== for the pop-up menus ==================//
//
//
// y.addEventListener('click', function() {
//      body.classList.toggle('pop-up');
// });
//
// z.addEventListener('click', function() {
//      body.classList.add('pop-up-expense');
// });
// r.addEventListener('click', function() {
//      body.classList.remove('pop-up-expense');
// });
