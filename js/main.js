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
// Exercise 3: Find integer number min
// Exercise 4: Calculate sum
// Exercise 5: Calculate Factorial
// Exercise 6: Craete div
// Exercise 7: Print Prime Number
