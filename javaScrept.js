const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  const bmi = (weight / ((height * height) / 10000)).toFixed(2);
  let underWeight = 18.6;
  let normalRange = 24.9;
  let overWeight = 24.9;
  if (height === '' || height < 0 || isNaN(height)) {
    results.innerHTML =  `Please enter a valid number ${height} `;
  } else if (weight === '' || weight < 0 || isNaN(weight)) {
    results.innerHTML = 'Please enter a valid number ';
  } else if (bmi <= underWeight){
      results.innerHTML = `<span style="color:green">${bmi} <br> This value is Under Weight</span>`;
    }
   else if (bmi < normalRange && bmi > underWeight) {
      results.innerHTML = `<span style="color:blue">${bmi} <br> This value is Normol Range</span>`;
  } else if (bmi >= normalRange && bmi<overWeight) {
    results.innerHTML = `<span>Normal BMI: ${bmi}</span>`;
  } else {
    results.innerHTML = `<span style="color:red">Overweight BMI: ${bmi}</span>`;
    
  }


});
