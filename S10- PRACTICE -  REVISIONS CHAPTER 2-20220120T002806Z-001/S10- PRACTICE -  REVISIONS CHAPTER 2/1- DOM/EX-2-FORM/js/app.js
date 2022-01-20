function getValueFromInput(event) {
	// 0. Prevent default form behavior
    event.preventDefault()
    // 1. Get value from input type color that have id name "#colorId"
    let getColor = document.getElementById("colorId").value;
    // 2. Get value from input type file that have id name "#fileId"
    let getFile = document.getElementById("fileId").value;
    // 3. Get value from input type date that have id name "#dateId"
    let getDate = document.getElementById("dateId").value;
    // 4. Get value from input type range that have id name "#rangeId"
    let getRange = document.getElementById("rangeId").value;
    // output
    const result = document.querySelector('span');
    result.textContent = getColor + " | " + getFile + " | " + getDate + " | " + getRange;
    // Look on slide result we want
}
const btn = document.querySelector('button');

btn.addEventListener('click', getValueFromInput);
