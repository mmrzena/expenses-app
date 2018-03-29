function showDetails(showObject) {
  const modalDiv = createModalDiv('modalDiv');
  const modalContentDiv = createModalContentDiv(modalDiv, 'modalContentDiv');
  detailSpans(modalContentDiv, showObject);
  closeButton(modalDiv, modalContentDiv);
  console.log(showObject);

}

function createModalDiv(identity) {
  let modalDiv = document.createElement('div');
  let bodyTag = document.getElementsByTagName("BODY")[0];
  modalDiv.className = identity;
  bodyTag.appendChild(modalDiv);
  return modalDiv;
}

function createModalContentDiv(modalDiv, identity) {
  let modalContentDiv = document.createElement('div');
  modalDiv.appendChild(modalContentDiv);
  modalContentDiv.className = identity;
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

  createSpanText(modalContentDiv, 'Date');

  let spanDate = document.createElement('span');
  let formattedDate = formatDate(showObject.date);
  spanDate.innerText = formattedDate;
  modalContentDiv.appendChild(spanDate);
  spanDate.className = "spanDetail";


    if(showObject.comment != "") {
      createSpanText(modalContentDiv, 'Comment');

      let spanComment = document.createElement('span');
      spanComment.innerText = showObject.comment;
      modalContentDiv.appendChild(spanComment);
      spanComment.className = "spanDetail";
    }


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

  let spanText = document.createElement('span');
  spanText.innerText = "Original Price in " + showObject.currencyCode.toUpperCase() ;
  modalContentDiv.appendChild(spanText);
  spanText.className = "spanText";

  let spanValue = document.createElement('span');
  spanValue.innerText = showObject.value;
  modalContentDiv.appendChild(spanValue);
  spanValue.className = "spanDetail";

  createSpanText(modalContentDiv, 'Price in CZK');
  let spanConvertedValue = document.createElement('span');
  spanConvertedValue.innerText = showObject.convertedExpense;
  modalContentDiv.appendChild(spanConvertedValue);
  spanConvertedValue.className = "spanDetail";
}

function closeButton(modalDiv, modalContentDiv) {
  let closeButton = document.createElement('button');
  modalContentDiv.appendChild(closeButton);
  closeButton.innerText = "X";
  closeButton.className = "closeButton";
  closeButton.onclick = function() {
      modalDiv.parentNode.removeChild(modalDiv);

  }


}
