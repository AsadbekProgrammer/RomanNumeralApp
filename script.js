
const inputVal = document.getElementById('number');
const convertBtn = document.getElementById('convert-btn');
const result = document.getElementById('output');

function convertToRoman(num) {
  let numerals = [
    { value: 1000, numeral: "M" },
    { value: 900, numeral: "CM" },
    { value: 500, numeral: "D" },
    { value: 400, numeral: "CD" },
    { value: 100, numeral: "C" },
    { value: 90, numeral: "XC" },
    { value: 50, numeral: "L" },
    { value: 40, numeral: "XL" },
    { value: 10, numeral: "X" },
    { value: 9, numeral: "IX" },
    { value: 5, numeral: "V" },
    { value: 4, numeral: "IV" },
    { value: 1, numeral: "I" }
    ];
  let result = "";

    for(let i = 0; i < numerals.length; i++) {
      while (num >= numerals[i].value) {
        result += numerals[i].numeral;
        num -= numerals[i].value;
      }
    }

 return result;
}

convertBtn.addEventListener('click', () => {

  if(parseInt(inputVal.value) <= 0) {
    result.textContent = 'Please enter a number greater than or equal to 1';
    result.classList.remove('hidden');
    result.classList.add('alert');
  } else if(!parseInt(inputVal.value)) {
     result.textContent = 'Please enter a valid number';
    result.classList.remove('hidden');
    result.classList.add('alert');
  } else if(parseInt(inputVal.value) > 3999) {
      result.textContent = 'Please enter a number less than or equal to 3999';
      result.classList.remove('hidden');
      result.classList.add('alert');
  } else{
    result.classList.remove('alert');
    result.textContent = convertToRoman(parseInt(inputVal.value));
    result.classList.remove('hidden');
  }

})