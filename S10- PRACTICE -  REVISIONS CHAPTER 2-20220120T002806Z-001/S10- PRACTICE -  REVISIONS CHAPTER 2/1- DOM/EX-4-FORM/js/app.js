function multipleValue(event) {
    event.preventDefault();

    // 1. Get element from input type radio "input[name=gender]"
    let getGender = document.getElementsByName("gender");
    // 2. Get element from input type checkbox "input[name=teacher]"
    let getTeacher = document.getElementsByName("teacher");
    // 3. Get element from multiple select "#select-meal-type option"
    let getMeal = document.querySelectorAll("#select-meal-type option");
    // Loop to get value from input radio when we checked
    let gen = "";
    for (let gender of getGender) {
        if (gender.checked) {
            gen += gender.value;
        }
    }
    // Loop to get value from input checkbox when we checked
    let teach = "";
    for (let teacher of getTeacher) {
        if (teacher.checked) {
            teach += teacher.value + ", ";
        }
    }
    // Loop to get value from multiple select when we selected
    let meal = "";
    for (let item of getMeal) {
        if (item.selected) {
            meal += item.value + ", ";
        }
    }
    // output
    const spanGender = document.querySelector('.gender');
    const spanTeacher = document.querySelector('.teacher');
    const spanMeal = document.querySelector('.meal');
    spanGender.textContent = gen;
    spanTeacher.textContent = teach;
    spanMeal.textContent = meal;
    // Look on PowerPoint slide to see the output look like
}

document.addEventListener('change', multipleValue);