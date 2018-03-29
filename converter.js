let currency = [{id: 1, name: 'Thai baht', code: 'thb', }, { id: 2, name: 'Cambodian riel', code: 'khr' }, { id: 3, name: 'Vietnamese dong',  code: 'vnd' },
 { id: 4, name: 'Lao kip', code: 'lak'}, {id: 5, name: 'Burmese kyat', code: 'mmk' }, { id: 6, name: 'Malaysian Ringgit', code: 'myr' },
 {id: 7, name: 'Singapore dollar', code: 'sgd' }, {id: 8, name: 'Indonesian rupiah', code: 'idr'},
  {id: 9, name: 'Philippine peso', code: 'php'},{ id: 10, name: 'Japanese yen', code: 'jpy'}];




let currencyRate = {
   thb: 0.657050,
   khr: 0.005138,
   vnd: 0.000903,
   lak: 0.002491,
   mmk: 0.015400,
   myr: 5.314,
   sgd: 15.700,
   idr: 0.315050,
   php: 0.392400,
   jpy: 0.193370,
}


let currencyDropdown = document.getElementById('currency');

function renderDropdownCurrency(){
  for (let i = 0; i < currency.length; i++){
    let option = document.createElement('option');
    option.innerHTML = currency[i].name;
    option.value = currency[i].code;
    currencyDropdown.appendChild(option);
  }
}

renderDropdownCurrency();
