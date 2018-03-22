function showDetails(showObject) {
  const modalDiv = createModalDiv();
  const modalContentDiv = createModalContentDiv(modalDiv);
  detailSpans(modalContentDiv, showObject);
  closeButton(modalDiv, modalContentDiv);


}

function createModalDiv() {
  let modalDiv = document.createElement('div');
  let bodyTag = document.getElementsByTagName("BODY")[0];
  modalDiv.className = "modalDiv";
  bodyTag.appendChild(modalDiv);
  return modalDiv;
}

function createModalContentDiv(modalDiv) {
  let modalContentDiv = document.createElement('div');
  modalDiv.appendChild(modalContentDiv);
  modalContentDiv.className = "modalContentDiv";
  return modalContentDiv
}

function createSpanText(modalContentDiv, text) {
  let spanText = document.createElement('span');
  spanText.innerText = text;
  modalContentDiv.appendChild(spanText);
  spanText.className = "spanText";
}


function detailSpans(modalContentDiv, showObject) {

  createSpanText(modalContentDiv, 'Name');

  let spanName = document.createElement('span');
  spanName.innerText = showObject.name;
  modalContentDiv.appendChild(spanName);
  spanName.className = "spanDetail";

  createSpanText(modalContentDiv, 'Comment');

  let spanComment = document.createElement('span');
  spanComment.innerText = showObject.comment;
  modalContentDiv.appendChild(spanComment);
  spanComment.className = "spanDetail";

  createSpanText(modalContentDiv, 'Category');

  let spanCategory = document.createElement('span');
  spanCategory.innerText = showObject.categoryName;
  modalContentDiv.appendChild(spanCategory);
  spanCategory.className = "spanDetail";

  createSpanText(modalContentDiv, 'Country');

  let spanCountry = document.createElement('span');
  spanCountry.innerText = showObject.countryName;
  modalContentDiv.appendChild(spanCountry);
  spanCountry.className = "spanDetail";

  createSpanText(modalContentDiv, 'Value');

  let spanValue = document.createElement('span');
  spanValue.innerText = showObject.value;
  modalContentDiv.appendChild(spanValue);
  spanValue.className = "spanDetail";
}

function closeButton(modalDiv, modalContentDiv) {
  let closeButton = document.createElement('button');
  modalContentDiv.appendChild(closeButton);
  closeButton.innerText = "X";
  closeButton.onclick = function() {
      modalDiv.style.display = "none";
  }


}
