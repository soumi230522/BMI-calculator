window.onload = () => {
   const button = document.querySelector('#btn');
   button.addEventListener('click', fun1);

}

function fun1() {
   const height = document.querySelector('#height').value;
   const weight = document.querySelector('#weight').value;
   const result = document.querySelector('#result');

   if (!height || isNaN(height) || height < 0) {
      result.innerText = "Enter valid number ";
      return;
   } else if (!weight || isNaN(weight) || weight < 0) {
      result.innerText = "Enter valid number ";
      return;
   }
   const bmi = (weight / ((height * height) / 10000)).toFixed(2);
   if (bmi < 18.5) {
      result.innerText = `Under weight: ${bmi}`;
   }
   else if (bmi >= 18.5 && bmi < 24.9) {
      result.innerText = `Normal weight: ${bmi}`;
   }
   else if (bmi >= 25 && bmi < 29.9) {
      result.innerText = `Overweight: ${bmi}`;
   }
   else {
      result.innerText = `Extreme:${bmi}`;
   }

}
