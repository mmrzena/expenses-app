function createLi(){
  var vydaj = document.createElement("li");
  listVydaju.appendChild(vydaj);
  toggleCategoryClass(vydaj);
  return vydaj;
}
function createValueSpan(vydaj){
  var expenseValue = document.createElement("span");
  expenseValue.innerText = allExpenses[i].value;
  vydaj.appendChild(expenseValue);
  expenseValue.className = "expenseValue";
}

function createNameSpan(vydaj){
  var name = document.createElement("span");
  name.innerText = allExpenses[i].name;
  vydaj.appendChild(name);
  name.className = "expenseName";
}
function createCategoryNameSpan(vydaj){
  var categoryName = document.createElement("span");
  categoryName.innerText = allExpenses[i].categoryName;
  vydaj.appendChild(categoryName);
  toggleSpanClass(categoryName);
}

function createRemoveButton(vydaj){
  var smazat = document.createElement("button");
  smazat.innerHTML = removeSVG;
  smazat.setAttribute("id", allExpenses[i].id);

  smazat.onclick = function() {
    removeExpense(this.id);
  }
  vydaj.appendChild(smazat);
}

function createShowButton(vydaj){
  var show = document.createElement("button");
  show.innerText = "i";
  let showObject = new Object()
  showObject.id= allExpenses[i].id;
  showObject.name= allExpenses[i].name;
  showObject.value= allExpenses[i].value;
  showObject.categoryId = allExpenses[i].categoryId;
  showObject.categoryName= allExpenses[i].categoryName;
  showObject.countryId= allExpenses[i].countryId;
  showObject.countryName= allExpenses[i].countryName;
  showObject.comment = allExpenses[i].comment;
  show.onclick = function() {
    showDetails(showObject);
  }

  vydaj.appendChild(show);
  show.className = "showDetails";
  }
