var $ = function (id) {
	return document.getElementById(id);
};

let totalCreditHours = 0;
let totalGradePoints = 0;

function calculateGPA() {

  const creditHours1 = parseInt(document.getElementById('course1').value);
  const letterGrade1 = document.getElementById('course1grade').value.toUpperCase();

  const creditHours2 = parseInt(document.getElementById('course2').value);
  const letterGrade2 = document.getElementById('course2grade').value.toUpperCase();

  const creditHours3 = parseInt(document.getElementById('course3').value);
  const letterGrade3 = document.getElementById('course3grade').value.toUpperCase();



  const creditHours4 = parseInt(document.getElementById('course4').value);
  const letterGrade4 = document.getElementById('course4grade').value.toUpperCase();


  const creditHours5 = parseInt(document.getElementById('course5').value);
  const letterGrade5 = document.getElementById('course5grade').value.toUpperCase();

  // Ensure that the user has entered values for a minimum of three courses
  if (isNaN(creditHours1) || isNaN(creditHours2) || isNaN(creditHours3) ||
	  creditHours1 < 1 || creditHours1 > 5 || creditHours2 < 1 || creditHours2 > 5|| creditHours3 < 1 || creditHours3 > 5
	  ||  !/^[A-Da-dFf]$/.test(letterGrade1) || !/^[A-Da-dFf]$/.test(letterGrade2) ||
	  !/^[A-Da-dFf]$/.test(letterGrade3)) {
	alert('Please enter valid values (credit hours between 1 and 4, letter grade A, B, C, D, or F) for a minimum of three courses.');
	return;
  }

  var totalCreditHours =0;
  var totalGradePoints=0;

  if(isNaN(creditHours4)==false && isNaN(creditHours5)==false)
  {
	 // Ensure that the user has entered valid values 
	 if (creditHours4 < 1 || creditHours4 > 5 || creditHours5 < 1 || creditHours5 > 5
	 ||  !/^[A-Da-dFf]$/.test(letterGrade4) || !/^[A-Da-dFf]$/.test(letterGrade4)) {
   alert('Please enter valid values (credit hours between 1 and 4, letter grade A, B, C, D, or F) for a minimum of three courses.');
   return;
	 }
  // Calculate GPA
   totalCreditHours = creditHours1 + creditHours2 + creditHours3 + creditHours4+ creditHours5;
   totalGradePoints = calculateGradePoints(letterGrade1) * creditHours1 +
   calculateGradePoints(letterGrade2) * creditHours2 +
   calculateGradePoints(letterGrade3) * creditHours3 +
   calculateGradePoints(letterGrade4) * creditHours4 +
   calculateGradePoints(letterGrade5) * creditHours5;
  }

  if(isNaN(creditHours4) && isNaN(creditHours5))
  {
  // Calculate GPA
   totalCreditHours = creditHours1 + creditHours2 + creditHours3;
   totalGradePoints = calculateGradePoints(letterGrade1) * creditHours1 +
   calculateGradePoints(letterGrade2) * creditHours2 +
   calculateGradePoints(letterGrade3) * creditHours3;
  }

  if(isNaN(creditHours4)==false && isNaN(creditHours5))
  {
	 // Ensure that the user has entered valid values 
	 if (creditHours4 < 1 || creditHours4 > 5 
		||  !/^[A-Da-dFf]$/.test(letterGrade4)) {
	  alert('Please enter valid values (credit hours between 1 and 4, letter grade A, B, C, D, or F) for a minimum of three courses.');
	  return;
		}
  // Calculate GPA
   totalCreditHours = creditHours1 + creditHours2 + creditHours3+ creditHours4;
   totalGradePoints = calculateGradePoints(letterGrade1) * creditHours1 +
   calculateGradePoints(letterGrade2) * creditHours2 +
   calculateGradePoints(letterGrade3) * creditHours3 +
   calculateGradePoints(letterGrade4) * creditHours4;
  }

  const gpa = (totalGradePoints / totalCreditHours).toFixed(2);

  // Display result
  const resultDiv = document.getElementById('avggpa');
  resultDiv.value = gpa;

}

function calculateGradePoints(letterGrade)
 {
    switch (letterGrade) {
	case 'A': return 4.0;
	case 'B': return 3.0;
	case 'C': return 2.0;
	case 'D': return 1.0;
	case 'F': return 0.0;
	default: return 0.0;
  }
}

function displayResult() {
  const resultDiv = document.getElementById('result');
  const gpa = (totalGradePoints / totalCreditHours).toFixed(2);

  resultDiv.innerHTML = `Your GPA is: ${gpa}`;
};

function resetInputs() {
	document.getElementById('course1').value = '';
  document.getElementById('course1grade').value = '';
  document.getElementById('course2').value = '';
  document.getElementById('course2grade').value = '';
  document.getElementById('course3').value = '';
  document.getElementById('course3grade').value = '';
  document.getElementById('course4').value = '';
  document.getElementById('course4grade').value = '';
  document.getElementById('course5').value = '';
  document.getElementById('course5grade').value = '';
  document.getElementById('avggpa').value = '';
};

window.onload=function(){
	$("reset").onclick = resetInputs;
	$("button").onclick = calculateGPA;
};