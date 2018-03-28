
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

var categoryClasses = {
  1: "foodSpan",
  2: "transportSpan",
  3: "drinksSpan",
  4: "gateSpan",
  5: "accommodationSpan",
  6: "rentSpan",
  7: "partySpan",
  8: "groceriesSpan",
  9: "entertainmentSpan",
  10:"otherSpan",
};



function toggleSpanClass(categoryName) {
  var catId = allExpenses[i].categoryId.toString();
  categoryName.className = categoryClasses[catId];
}
