// https://www.omnicalculator.com/math/average-rate-of-change#average-rate-of-change-formula

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const v4 = document.getElementById('v4');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const averagerateofchangeRadio = document.getElementById('averagerateofchangeRadio');
const x1Radio = document.getElementById('x1Radio');
const fx1Radio = document.getElementById('fx1Radio');
const x2Radio = document.getElementById('x2Radio');
const fx2Radio = document.getElementById('fx2Radio');

let averagerateofchange;
let x1 = v1;
let fx1 = v2;
let x2 = v3;
let fx2 = v4;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');
const variable4 = document.getElementById('variable4');

averagerateofchangeRadio.addEventListener('click', function() {
  variable1.textContent = 'x₁';
  variable2.textContent = 'f(x₁)';
  variable3.textContent = 'x₂';
  variable4.textContent = 'f(x₂)';
  x1 = v1;
  fx1 = v2;
  x2 = v3;
  fx2 = v4;
  result.textContent = '';
});

x1Radio.addEventListener('click', function() {
  variable1.textContent = 'Average rate of change';
  variable2.textContent = 'f(x₁)';
  variable3.textContent = 'x₂';
  variable4.textContent = 'f(x₂)';
  averagerateofchange = v1;
  fx1 = v2;
  x2 = v3;
  fx2 = v4;
  result.textContent = '';
});

fx1Radio.addEventListener('click', function() {
  variable1.textContent = 'Average rate of change';
  variable2.textContent = 'x₁';
  variable3.textContent = 'x₂';
  variable4.textContent = 'f(x₂)';
  averagerateofchange = v1;
  x1 = v2;
  x2 = v3;
  fx2 = v4;
  result.textContent = '';
});

x2Radio.addEventListener('click', function() {
  variable1.textContent = 'Average rate of change';
  variable2.textContent = 'x₁';
  variable3.textContent = 'f(x₁)';
  variable4.textContent = 'f(x₂)';
  averagerateofchange = v1;
  x1 = v2;
  fx1 = v3;
  fx2 = v4;
  result.textContent = '';
});

fx2Radio.addEventListener('click', function() {
  variable1.textContent = 'Average rate of change';
  variable2.textContent = 'x₁';
  variable3.textContent = 'f(x₁)';
  variable4.textContent = 'x₂';
  averagerateofchange = v1;
  x1 = v2;
  fx1 = v3;
  x2 = v4;
  result.textContent = '';
});

btn.addEventListener('click', function() {
  
  if(averagerateofchangeRadio.checked)
    result.textContent = `Average rate of change = ${computeAveragerateofchange().toFixed(2)}`;

  else if(x1Radio.checked)
    result.textContent = `x₁ = ${computeX1().toFixed(2)}`;

  else if(fx1Radio.checked)
    result.textContent = `f(x₁) = ${computeFx1().toFixed(2)}`;

  else if(x2Radio.checked)
    result.textContent = `x₂ = ${computeX2().toFixed(2)}`;

  else if(fx2Radio.checked)
    result.textContent = `f(x₂) = ${computeFx2().toFixed(2)}`;
})

// calculation

function computeAveragerateofchange() {
  return (Number(fx2.value) - Number(fx1.value)) / (Number(x2.value) - Number(x1.value));
}

function computeX1() {
  return Number(x2.value) - ((Number(fx2.value) - Number(fx1.value)) / Number(averagerateofchange.value));
}

function computeFx1() {
  return Number(fx2.value) - (Number(averagerateofchange.value) * (Number(x2.value) - Number(x1.value)));
}

function computeX2() {
  return ((Number(fx2.value) - Number(fx1.value)) / Number(averagerateofchange.value)) + Number(x1.value);
}

function computeFx2() {
  return (Number(averagerateofchange.value) * (Number(x2.value) - Number(x1.value))) + Number(fx1.value);
}