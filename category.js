
let category = [{ id : 1, name : 'Food'},{ id : 2, name : "Transport",},
{  id: 3,  name: "Drinks"},{  id: 4, name: "Gate-money"},{  id: 5,  name: "Accommodation"},
{  id: 6,  name: "Rent-money"},{  id: 7,  name: "Party"},{  id: 8,  name: "Groceries"},
{  id: 9,  name: "Entertainment"},{  id: 10,  name: "Other"}];

let country = [{id : 1,name : 'Thailand'},{id : 2,name : "Cambodia"},{id : 3,name : "Vietnam"
},{ id : 4,name : "Laos"},{ id : 5, name : "Myanmar"},{ id : 6, name : "Malaysia"},
{ id: 7, name: "Singapore"},{ id: 8, name: "Indonesia"},{ id: 9, name: "Philippines"},
{ id: 10, name: "Japan"}];

let selectCategory = document.getElementById('selectCategory');
let selectCountry = document.getElementById('selectCountry');


function renderDropdown(dropdown, array){
  for (let i = 0; i < array.length; i++){
    let option = document.createElement('option');
    option.innerHTML = array[i].name;
    option.value = array[i].id;
    dropdown.appendChild(option);
  }
}

renderDropdown(selectCategory, category);
renderDropdown(selectCountry, country);

function toggleCategoryClass(vydaj) {
  if(allExpenses[i].categoryId == 1) {
    vydaj.className = "food";
  } else if(allExpenses[i].categoryId == 2) {
    vydaj.className = "transport";
  }
}
function toggleSpanClass(categoryName) {
  if(allExpenses[i].categoryId == 1) {
    categoryName.className = "foodSpan";
  } else if(allExpenses[i].categoryId == 2) {
    categoryName.className = "transportSpan";
  } else if(allExpenses[i].categoryId == 3) {
    categoryName.className = "drinksSpan";
  } else if(allExpenses[i].categoryId == 4) {
    categoryName.className = "gateSpan";
  } else if(allExpenses[i].categoryId == 5) {
    categoryName.className = "accommodationSpan";
  } else if(allExpenses[i].categoryId == 6) {
    categoryName.className = "rentSpan";
  } else if(allExpenses[i].categoryId == 7) {
    categoryName.className = "partySpan";
  } else if(allExpenses[i].categoryId == 8) {
    categoryName.className = "groceriesSpan";
  } else if(allExpenses[i].categoryId == 9) {
    categoryName.className = "entertainmentSpan";
  } else if(allExpenses[i].categoryId == 10) {
    categoryName.className = "otherSpan";
  }
}
