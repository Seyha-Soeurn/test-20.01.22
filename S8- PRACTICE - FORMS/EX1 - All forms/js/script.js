// ----------------------------------------------------------------------------
// FUNCTIONS
// ----------------------------------------------------------------------------
function submitData() {
  // 1- get values from forms
  let usernameValue = document.getElementById("username").value;
  
  let emailValue = document.getElementById("email").value;
  
  let genderValue = document.getElementById("femaleRadio").value;
  if (document.getElementById("maleRadio").checked) {
    genderValue = document.getElementById("maleRadio").value;
  }
  
  let fruitValue = document.getElementById("fruit").value;
  
  let subjectValue = document.getElementsByClassName("subject");
  let selectedSubject = "";
  for (let item of subjectValue) {
    if (item.checked) {
      selectedSubject += item.value + ", ";
    }
  }
  
  let messageValue = document.getElementById("sms").value;
  
  // 2- change labels on right side
  if (usernameValue && emailValue && selectedSubject && messageValue) {
    document.getElementById("getUsername").textContent = usernameValue;
    document.getElementById("getEmail").textContent = emailValue;
    document.getElementById("getGender").textContent = genderValue;
    document.getElementById("getFruit").textContent = fruitValue;
    document.getElementById("getSubject").textContent = selectedSubject;
    document.getElementById("getMessage").textContent = messageValue;
  } else {
    window.confirm("You must fill all information")
  }
}

// ----------------------------------------------------------------------------
// MAIN
// ----------------------------------------------------------------------------
let applyButton = document.getElementById("applyButton");
applyButton.addEventListener("click", submitData);
