var task = document.getElementById('expense');
var addButton = document.getElementById('add');
var listVydaju = document.getElementById('listVydaju');


addButton.addEventListener("click", function(){
  var value = document.getElementById('expense').value;
  if (value) {
  pridaniVydaje(value);
  document.getElementById('expense').value = '';
}

});

function pridaniVydaje(value) {
  var vydaj = document.createElement("li");
  vydaj.innerText = "- " + value;
  listVydaju.appendChild(vydaj);
}
