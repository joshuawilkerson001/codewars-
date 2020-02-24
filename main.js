//Grade book
//Complete the function so that it finds the mean of the three scores passed to it and returns the letter value associated with that grade.

//Numerical Score	Letter Grade
//90 <= score <= 100	'A'
//80 <= score < 90	'B'
//70 <= score < 80	'C'
//60 <= score < 70	'D'
//0 <= score < 60	'F'
//Tested values are all between 0 and 100. Theres is no need to check for negative values or values greater than 100.

alert("hi")



function getGrade (s1, s2, s3) {
  let sum = s1 + s2 + s3;
  let val = sum / 3; // calculated mean here.

  if (val >= 90 && val <= 100){
    console.log("A")
    return "A"
    }
 else if (val >= 80 && val < 90){
   console.log("B")
    return "B"
    }
  else if (val >= 70 && val < 80){
    console.log("C")
    return "C"
    }
  else if (val >= 60 && val < 70){
    console.log("D")
    return "D"
    }
  else if (val >= 0 && val < 60){
    console.log("F")
    return "F"
  }
}


//describe('grade book', function () {

    getGrade(95,90,93)//, 'A')
    getGrade(100,85,96)//, 'A')
    getGrade(92,93,94)//, 'A')


    getGrade(70,70,100)//, 'B')
    getGrade(82,85,87)//, 'B')
    getGrade(84,79,85)///, 'B')
    getGrade(89,89,90)///, 'B')


    getGrade(70,70,70)///, 'C')
    getGrade(75,70,79)////, 'C')
    getGrade(60,82,76)///, 'C')


    getGrade(65,70,59)///, 'D')
    getGrade(66,62,68)///, 'D')
    getGrade(58,62,70)///, 'D')


    getGrade(44,55,52)  ///, 'F')
    getGrade(48,55,52)//, 'F')
    getGrade(58,59,60)//, 'F')
