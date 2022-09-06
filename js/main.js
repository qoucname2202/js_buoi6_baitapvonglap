// Change open and close exercises
const buttons = document.querySelectorAll('.nav button');
buttons[0].children[0].innerHTML = '📖';
buttons.forEach((item, idx) => {
	item.addEventListener('click', e => {
		item.children[0].innerHTML = '📖';
		buttons.forEach((res, index) => {
			if (idx !== index) {
				res.children[0].innerHTML = '📒';
			}
		});
	});
});
// Exercise 1: Find even odd number less
function isEvenOrOdd(numb) {
	return numb % 2 === 0 ? true : false;
}
function printEvenOrOdd(hasName) {
	const evenList = [];
	const oddList = [];
	for (let i = 0; i < 100; i++) {
		if (isEvenOrOdd(i)) {
			evenList.push(i);
		} else {
			oddList.push(i);
		}
	}
	return hasName === 'even' ? evenList.join(' ') : oddList.join(' ');
}
document.getElementById('btnFindEvenOdd').addEventListener('click', e => {
	e.preventDefault();
	const numbEven = printEvenOrOdd('even');
	const numbOdd = printEvenOrOdd('odd');
	const icon = document.getElementById('icon');
	const res = document.getElementById('resultFind');
	// Remove icon
	icon.remove();
	// Add even number list and odd number list
	res.innerHTML = `
    <div class="col-lg-12">
      <i class="fa-solid fa-hand-point-right icon-res"></i>
      <span class="showEven mess"
        ><strong>Số chẵn: ${numbEven}</strong></span
      >
    </div>
    <div class="col-lg-12 mt-2">
      <i class="fa-solid fa-hand-point-right icon-res"></i>
      <span class="showOdd mess"><strong>Số lẻ: ${numbOdd}</strong>
      </span>
    </div>
  `;
});
// Exercise 2: Count number devide by 3
function devide3(numb) {
	if (numb < 0) return false;
	return numb % 3 === 0 ? true : false;
}
function calcCountDevide3() {
	const numbList = [];
	for (let i = 0; i < 1000; i++) {
		if (devide3(i)) {
			numbList.push(i);
		}
	}
	return numbList.length;
}
document.getElementById('btnCountDevide').addEventListener('click', e => {
	e.preventDefault();
	const result = document.querySelector('.showCountDevide');
	const value = calcCountDevide3();
	result.innerHTML = `Số chia hết cho 3 nhỏ hơn 1000: ${value} số`;
});
// Exercise 3: Find integer number min
function sumAllNumb() {
	let i = 0;
	let sum = 0;
	while (sum < 10000) {
		i++;
		sum += i;
	}
	return i;
}
document.getElementById('btnFindMin').addEventListener('click', e => {
	e.preventDefault();
	const result = document.querySelector('.showNumbMin');
	const value = sumAllNumb();
	result.innerHTML = `Số nguyên dương nhỏ nhất là: ${value}`;
});
// Exercise 4: Calculate sum
function calcSum(x, n) {
	let sum = 0;
	for (let i = 1; i <= n; i++) {
		sum += x ** i;
	}
	return sum;
}

document.getElementById('btnSum').addEventListener('click', e => {
	e.preventDefault();
	const result = document.querySelector('.showSumNumber');
	const txtX = +document.getElementById('txtX').value;
	const txtN = +document.getElementById('txtN').value;
	const value = calcSum(txtX, txtN);
	result.innerHTML = `Tổng là: ${value}`;
});
// Exercise 5: Calculate Factorial
function calcFactorial(numb) {
	let res = 1;
	for (let i = 1; i <= numb; i++) {
		res *= i;
	}
	return res;
}
document.getElementById('btnCaclFactorial').addEventListener('click', e => {
	e.preventDefault();
	const txtNumb = +document.getElementById('txtNumb').value;
	const result = document.querySelector('.showResFactorial');
	const value = calcFactorial(txtNumb);
	result.innerHTML = `Giai thừa: ${value}`;
	const formFactorial = document.getElementById('formCalcFactorial');
	setTimeout(() => {
		formFactorial.reset();
		result.innerHTML = '';
	}, 7000);
});
// Exercise 6: Craete div
function createDiv(amountDiv) {
	for (i = 1; i <= amountDiv; i++) {
		var nodes = document.createElement('div');
		if (isEvenOrOdd(i)) {
			nodes.innerText = `Div chẵn`;
			nodes.classList.add('style-even');
		} else {
			nodes.innerText = `Div lẻ`;
			nodes.classList.add('style-odd');
		}
		document.getElementById('showDiv').appendChild(nodes);
	}
}
document.getElementById('btnCreateDiv').addEventListener('click', e => {
	e.preventDefault();
	createDiv(10);
});
// Exercise 7: Print Prime Number

// check numb is Prime
function isPrime(numb) {
	if (numb === 1) return false;
	for (let i = 2; i <= Math.sqrt(numb); i++) {
		if (numb % i === 0) {
			return false;
		}
	}
	return true;
}
// print prime number
function printNumbPrime(val) {
	const primeList = [];
	for (let i = 1; i <= val; i++) {
		if (isPrime(i)) {
			primeList.push(i);
		}
	}
	return primeList.join(' ');
}
document.getElementById('btnPrintNumb').addEventListener('click', e => {
	e.preventDefault();
	const numb = +document.getElementById('txtPrime').value;
	const result = document.querySelector('.showPrimeNumb');
	const formPrime = document.getElementById('formPrintPrimeNumb');
	const val = printNumbPrime(numb);
	result.innerHTML = val;
	setTimeout(() => {
		formPrime.reset();
		result.innerHTML = '';
	}, 7000);
});
