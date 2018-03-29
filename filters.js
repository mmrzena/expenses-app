let bodyTag = document.getElementsByTagName("BODY")[0];
let filterButton = document.getElementById('filterButton');


function filterCategory(nameOfCategory, nameOfCountry) {
  filteredExpenses = allExpenses.filter(function(data) {
    if (nameOfCountry === 'ALL' && nameOfCategory != 'ALL') {
      return nameOfCategory == data.categoryName;
    } else if (nameOfCategory === 'ALL' && nameOfCountry != 'ALL') {
      return nameOfCountry == data.countryName;
    } else if (nameOfCountry === 'ALL' && nameOfCategory === 'ALL') {
      return nameOfCountry != data.countryName;
    } else {
      return nameOfCategory == data.categoryName && nameOfCountry == data.countryName;
    }
  });

}


function createFilterDropdown(modalContentDiv) {
  let categoryDropdown = document.createElement('select');
  let countryDropdown = document.createElement('select');
  categoryDropdown.setAttribute("id", 'categoryDropdown');
  countryDropdown.setAttribute("id", 'countryDropdown');

  modalContentDiv.appendChild(categoryDropdown);
  modalContentDiv.appendChild(countryDropdown);
  renderDropdown(categoryDropdown, category);
  renderDropdown(countryDropdown, country);
  let optionCountry = document.createElement('option');
  optionCountry.innerHTML = "ALL";
  optionCountry.value = "all";
  let optionCategory = document.createElement('option');
  optionCategory.innerHTML = "ALL";
  optionCategory.value = "all";
  categoryDropdown.appendChild(optionCategory);
  countryDropdown.appendChild(optionCountry);
}

function createApplyFilterButton(modalContentDiv, filterUl) {
  let applyFitler = document.createElement('button');
  modalContentDiv.appendChild(applyFitler);
  applyFitler.className = "applyFitler";
  applyFitler.innerText = "apply";
  applyFitler.onclick = function() {
    let countryDropdown = document.getElementById('countryDropdown');
    let categoryDropdown = document.getElementById('categoryDropdown');
    let nameOfCountry = countryDropdown.options[countryDropdown.selectedIndex].text;
    var nameOfCategory = categoryDropdown.options[categoryDropdown.selectedIndex].text;
    // console.log(nameOfCountry, nameOfCategory)
    filterCategory(nameOfCategory, nameOfCountry);
    renderFiltered(filterUl, nameOfCountry, nameOfCategory);
    // console.log(filteredExpenses)
    if (!document.getElementById('orderByValueAsc')){
      const orderDiv = createOrderDiv(modalContentDiv);
      createOrderButtonByValueAsc(orderDiv, filterUl, nameOfCountry, nameOfCategory);
      createOrderButtonByValueDesc(orderDiv, filterUl, nameOfCountry, nameOfCategory);
      createOrderButtonByDateAsc(orderDiv, filterUl, nameOfCountry, nameOfCategory);
      createOrderButtonByDateDesc(orderDiv, filterUl, nameOfCountry, nameOfCategory)
    }
  }
}

function createOrderDiv(modalContentDiv){
  let orderDiv = document.createElement('div');
  modalContentDiv.insertBefore(orderDiv, modalContentDiv.childNodes[3]);
  return orderDiv;
}

function createOrderButtonByValueAsc(orderDiv, filterUl, nameOfCountry, nameOfCategory){
  let orderby = document.createElement('button');
  orderDiv.appendChild(orderby);
  orderby.className = "orderby";
  orderby.setAttribute("id", "orderByValueAsc");
  orderby.innerText = "valueAsc";
  orderby.onclick = function() {
    filteredExpenses.sort(function(a,b) {
      return a.value - b.value;
    });
    renderFiltered(filterUl, nameOfCountry, nameOfCategory);
  }

}
function createOrderButtonByValueDesc(orderDiv, filterUl, nameOfCountry, nameOfCategory){
  let orderby = document.createElement('button');
  orderDiv.appendChild(orderby);
  orderby.className = "orderby";
  orderby.innerText = "valueDesc";
  orderby.onclick = function() {
    filteredExpenses.sort(function(a,b) {
      return b.value - a.value;
    });
    renderFiltered(filterUl, nameOfCountry, nameOfCategory);
  }

}

function createOrderButtonByDateAsc(orderDiv, filterUl, nameOfCountry, nameOfCategory){
  let orderby = document.createElement('button');
  orderDiv.appendChild(orderby);
  orderby.className = "orderby";
  orderby.innerText = "dateAsc";
  orderby.onclick = function() {
    filteredExpenses.sort(function(a,b) {
      return a.countedDate - b.countedDate;
    });
    renderFiltered(filterUl, nameOfCountry, nameOfCategory);
  }

}
function createOrderButtonByDateDesc(orderDiv, filterUl, nameOfCountry, nameOfCategory){
  let orderby = document.createElement('button');
  orderDiv.appendChild(orderby);
  orderby.className = "orderby";
  orderby.innerText = "dateDesc";
  orderby.onclick = function() {
    filteredExpenses.sort(function(a,b) {
      return b.countedDate - a.countedDate;
    });
    renderFiltered(filterUl, nameOfCountry, nameOfCategory);
  }

}


function createFilterUl(modalContentDiv) {
  let filterUl = document.createElement('ul');
  modalContentDiv.appendChild(filterUl);
  return filterUl;
}


function createFilterDiv() {

  const modalDiv = createModalDiv('modalDiv');
  const modalContentDiv = createModalContentDiv(modalDiv, 'modalContentDiv');
  closeButton(modalDiv, modalContentDiv);
  createFilterDropdown(modalContentDiv);
  let totalFiltredSum = document.createElement('span');
  totalFiltredSum.setAttribute("id", 'totalFiltredSum');
  modalContentDiv.appendChild(totalFiltredSum);
  const filterUl = createFilterUl(modalContentDiv);
  createApplyFilterButton(modalContentDiv, filterUl);


}




function renderFiltered(filterUl, nameOfCountry, nameOfCategory) {
  filterUl.innerHTML = "";
  let totalFiltredSum = document.getElementById('totalFiltredSum');
  totalFiltredSum.innerHTML = "";
  let sum = 0;
  if (filteredExpenses.length == 0) {
    filterUl.innerText = "There is no expense!";
  } else {
    for (i = 0; i < filteredExpenses.length; i++) {

      const vydaj = createLi(filterUl, filteredExpenses);
      createNameSpan(vydaj, filteredExpenses);
      createDateSpan(vydaj, filteredExpenses);
      createValueSpan(vydaj, filteredExpenses);
      sum += parseInt(filteredExpenses[i].value);
    }
    if (nameOfCountry === 'ALL' && nameOfCategory != 'ALL') {
      totalFiltredSum.innerHTML = "You've spent " + sum + " on " + nameOfCategory;

    } else if (nameOfCategory === 'ALL' && nameOfCountry != 'ALL') {
      totalFiltredSum.innerHTML = "You've spent " + sum + " in " + nameOfCountry;

    } else if (nameOfCountry === 'ALL' && nameOfCategory === 'ALL') {
      totalFiltredSum.innerHTML = "You've spent " + sum + " in total";
    } else {
      totalFiltredSum.innerHTML = "You've spent " + sum + " on " + nameOfCategory + " in " + nameOfCountry;
    }


  }


}

filterButton.onclick = function() {
  createFilterDiv();

}
