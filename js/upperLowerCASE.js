
function setCase(caseSelection) {
  if (caseSelection == "upper") {
    document.form1.firstName.value = document.form1.firstName.value.toUpperCase();
    document.form1.lastName.value = document.form1.lastName.value.toUpperCase();
  } else {
    document.form1.firstName.value = document.form1.firstName.value.toLowerCase();
    document.form1.lastName.value = document.form1.lastName.value.toLowerCase();
  }
}
