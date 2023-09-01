var start, select1, select2;

start = document.querySelector('.start');
select1 = document.querySelector('.select1');
select2 = document.querySelector('.select2');

var x1, x2;

x1 = document.querySelector('.x1');
x2 = document.querySelector('.x2');

var  adunare, minus, ori, impartire, select1A, calc01, rezultat1;

adunare = document.querySelector('.adunare');
minus = document.querySelector('.minus');
ori = document.querySelector('.ori');
impartire = document.querySelector('.impartire');
select1A = document.querySelector('.select1-a');
calc01 = document.querySelector('.calc01');
rezultat1 = document.querySelector('.rezultat1');

var calc02,rezultat2;

calc02 = document.querySelector('.calc02')
rezultat2 = document.querySelector('.rezultat2');

calc02.addEventListener('click', () => {
    a1 = parseFloat(document.querySelector('.a1').value);
    let rezult2;

    if (isNaN(a1)) {
        rezultat2.innerHTML = "a";
    } else {
        rezult2 = Math.sqrt(a1);
        rezultat2.innerHTML = rezult2;
    }
});


let s = 0;
let rezult;

minus.addEventListener('click', () => {
   select1A.innerHTML = '-';
   s = 1;
});

ori.addEventListener('click', () => {
    select1A.innerHTML = 'x';
    s = 2;
}); 

adunare.addEventListener('click', () => {
    select1A.innerHTML = '+';
    s = 3;
});

impartire.addEventListener('click', () => {
    select1A.innerHTML = ':';
    s = 4;
});

calc01.addEventListener('click', () => {
    a = parseFloat(document.querySelector('.a').value);
    b = parseFloat(document.querySelector('.b').value);
    
    if (isNaN(a) || isNaN(b)) {
        rezultat1.innerHTML = "Introduceți valori numerice în câmpurile de intrare.";
    } else {
        if (s === 1) {
            rezult = a - b;
        } else if (s === 2) {
            rezult = a * b;
        } else if (s === 3) {
            rezult = a + b;
        } else if (s === 4) {
            rezult = a / b;
        }
        rezultat1.innerHTML = rezult;
    }
});


x1.addEventListener('click', () => {
    start.style.display = 'none';
    select1.style.display = 'block';
});
x2.addEventListener('click', () => {
    start.style.display = 'none';
    select2.style.display = 'block';
});