let table = document.querySelector('#transactions-table');
let totalDisplay = document.querySelector('#total');

let total = 0;

function addTransaction() {
  let descriptionInput = document.querySelector('#description');
  let amountInput = document.querySelector('#amount');

  if (descriptionInput.value.trim() === '' || amountInput.value.trim() === '') {
    alert('Por favor, preencha todos os campos');
    return;
  }

  let description = descriptionInput.value;
  let amount = parseFloat(amountInput.value);

  let row = table.insertRow();

  let descriptionCell = row.insertCell();
  descriptionCell.innerText = description;

  let amountCell = row.insertCell();
  amountCell.innerText = amount.toFixed(2);

  total += amount;

  totalDisplay.innerText = total.toFixed(2);

  descriptionInput.value = '';
  amountInput.value = '';
}

function clearTable() {
  let rows = table.rows.length;

  for (let i = rows - 1; i > 0; i--) {
    table.deleteRow(i);
  }

  total = 0;
  totalDisplay.innerText = total.toFixed(2);
}
