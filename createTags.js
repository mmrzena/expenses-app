function createLi(parent){
  var vydaj = document.createElement("li");
  parent.appendChild(vydaj);
  return vydaj;
}
function createValueSpan(vydaj, array){
  var expenseValue = document.createElement("span");
  expenseValue.innerText = array[i].value;
  vydaj.appendChild(expenseValue);
  expenseValue.className = "expenseValue";
}

function createNameSpan(vydaj, array){
  var name = document.createElement("span");
  name.innerText = array[i].name;
  vydaj.appendChild(name);
  name.className = "expenseName";
}
function createCategoryNameSpan(vydaj, array){
  var categoryName = document.createElement("span");
  categoryName.innerText = array[i].categoryName;
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

function createShowButton(vydaj, array){
  var show = document.createElement("button");
  show.innerText = "i";
  let showObject = new Object()
  showObject.id= array[i].id;
  showObject.date= array[i].date;
  showObject.name= array[i].name;
  showObject.value= array[i].value;
  showObject.categoryId = array[i].categoryId;
  showObject.categoryName= array[i].categoryName;
  showObject.countryId= array[i].countryId;
  showObject.countryName= array[i].countryName;
  showObject.comment = array[i].comment;
  show.onclick = function() {
    showDetails(showObject);
  }

  vydaj.appendChild(show);
  show.className = "showDetails";
  }

function createDateSpan(vydaj, array) {
  let dateSpan = document.createElement('span');
  let date = array[i].date;
  let formattedDate = formatDate(date)
  dateSpan.innerHTML = formattedDate;
  vydaj.appendChild(dateSpan);
  dateSpan.className = "dateSpan";
}
