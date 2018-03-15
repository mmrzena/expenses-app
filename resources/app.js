var task = document.getElementById('expense');
var addButton = document.getElementById('add');
var listVydaju = document.getElementById('listVydaju');
// var removeButton = document.getElementsByClassName('remove');
var expense = document.getElementById('expense').value;
var name = document.getElementById('name').value;

var removeSVG = '<svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 22 22" style="enable-background:new 0 0 22 22;" xml:space="preserve"><g><g><path class="st0" d="M16.1,3.6h-1.9V3.3c0-1.3-1-2.3-2.3-2.3h-1.7C8.9,1,7.8,2,7.8,3.3v0.2H5.9c-1.3,0-2.3,1-2.3,2.3v1.3c0,0.5,0.4,0.9,0.9,1v10.5c0,1.3,1,2.3,2.3,2.3h8.5c1.3,0,2.3-1,2.3-2.3V8.2c0.5-0.1,0.9-0.5,0.9-1V5.9C18.4,4.6,17.4,3.6,16.1,3.6z M9.1,3.3c0-0.6,0.5-1.1,1.1-1.1h1.7c0.6,0,1.1,0.5,1.1,1.1v0.2H9.1V3.3z M16.3,18.7c0,0.6-0.5,1.1-1.1,1.1H6.7c-0.6,0-1.1-0.5-1.1-1.1V8.2h10.6L16.3,18.7L16.3,18.7z M17.2,7H4.8V5.9c0-0.6,0.5-1.1,1.1-1.1h10.2c0.6,0,1.1,0.5,1.1,1.1V7z"/></g><g><g><path class="st0" d="M11,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6s0.6,0.3,0.6,0.6v6.8C11.6,17.7,11.4,18,11,18z"/></g><g><path class="st0" d="M8,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8C7.4,10.2,7.7,10,8,10c0.4,0,0.6,0.3,0.6,0.6v6.8C8.7,17.7,8.4,18,8,18z"/></g><g><path class="st0" d="M14,18c-0.4,0-0.6-0.3-0.6-0.6v-6.8c0-0.4,0.3-0.6,0.6-0.6c0.4,0,0.6,0.3,0.6,0.6v6.8C14.6,17.7,14.3,18,14,18z"/></g></g></g></svg>';


addButton.addEventListener("click", function() {
  var expense = document.getElementById('expense').value;
  var name = document.getElementById('name').value;
  var id;
  if (name && expense) {
    if (allExpends.length == 0) {
      id = 1;
    } else {
      id = allExpends.length + 1;
  }
    allExpends.push({id: id, name: name, value: expense});

    document.getElementById('expense').value = '';
    document.getElementById('name').value = '';
  }
  console.log(allExpends);
  renderExpenses();

});

var allExpends = [
  {
    id: "1",
    name: "First",
    value: 10
  },
  {
    id: "2",
    name: "Second",
    value: 20
  },
  {
    id: "3",
    name: "Third",
    value: 30
  },
  {
    id: "4",
    name: "Fourth",
    value: 40
  },
  {
    id: "5",
    name: "Fifth",
    value: 50
  }
];


// console.log(allExpends);




function renderExpenses() {
  const parent = document.getElementById('listVydaju').innerHTML = "";
  var sum = 0;
  var totalAmount = document.getElementById('total');
  if (allExpends.length > 0) {

    for (i = 0; i < allExpends.length; i++) {
      var vydaj = document.createElement("li");
      vydaj.innerText = "- " + allExpends[i].value;
      listVydaju.appendChild(vydaj);

      var jmeno = document.createElement("span");
      jmeno.innerText = allExpends[i].name;
      vydaj.appendChild(jmeno);

      var smazat = document.createElement("button");
      smazat.innerHTML = removeSVG;
      smazat.setAttribute("id", allExpends[i].id);

      smazat.onclick = function() {
        removeExpense(this.id);
      }
      vydaj.appendChild(smazat);

      sum += parseInt(allExpends[i].value);
    }
    totalAmount.innerHTML = "- " + sum;
    console.log(sum);
  } else {
    totalAmount.innerHTML = "";
  }

}

renderExpenses();

function removeExpense(expendId) {

  allExpends = allExpends.filter(function(expend) {
    return expendId != expend.id;
  });
  renderExpenses();
  console.log(allExpends);
};
