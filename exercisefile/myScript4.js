function calculateAge(birthYear, currentYear) {


  var age = currentYear - birthYear;

  document.write("<h2>Your age is either " + age + " or " + (age - 1) + "</h2>");
}

// invoke calculateAge
calculateAge(1986, 2016);
