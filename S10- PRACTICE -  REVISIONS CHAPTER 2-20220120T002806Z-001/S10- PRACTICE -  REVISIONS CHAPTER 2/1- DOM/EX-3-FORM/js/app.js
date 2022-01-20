function getValue(event) {

    // prevent default 
    event.preventDefault();
    // 1. Get value from input type text that have id name "#textId"
    let getName = document.getElementById("textId").value;
    // 2. Get value from input type password that have id name "#passId"
    let getPassword = document.getElementById("passId").value;
    // 3. Get value from input type email that have id name "#emailId"
    let getEmail = document.getElementById("emailId").value;
    // 4. Get value from input type number that have id name "#numId"
    let getNumber = document.getElementById("numId").value;
    // 5. Get value from textarea that have id name "#textareaId"
    let getMessage = document.getElementById("textareaId").value;
    // 6. Get value from select that have Id name "#selectId"
    let getFruit = document.getElementById("selectId").value;
    // output
    const spanInputs = document.querySelector('.inputs');
    const spanTextarea = document.querySelector('.textarea');
    const spanSelect = document.querySelector('.select');
    spanInputs.textContent = getName + " | " + getPassword + " | " + getEmail + " | " + getNumber;
    spanTextarea.textContent = getMessage;
    spanSelect.textContent = getFruit;
    // Look at powerpoint slide to see the output look like
}


const btn = document.querySelector('button');
// add event to button and call function
btn.addEventListener("click", getValue)