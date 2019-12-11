window.addEventListener('load', function(e) {
	console.log('Loaded');
	init();
	getExpenses();
});

function scrollOnClick() {
	var scrollToTop = window.setInterval(function() {
		var pos = window.pageYOffset;
		if (pos > 0) {
			window.scrollTo(0, pos - 20); // how far to scroll on each step
		} else {
			window.clearInterval(scrollToTop);
		}
	}, 27); // scroll speed
}

function init() {
	document.expenseForm.lookup.addEventListener('click', function(event) {
		event.preventDefault();
		var expenseId = document.expenseForm.expenseId.value;
		if (!isNaN(expenseId) && expenseId > 0) {
			getExpense(expenseId);
		}
	});
	document.addExpenseForm.create.addEventListener('click', function(event) {
		event.preventDefault();
		addNewExpense();
	});

}

// ********** GET LIST of expenses **********

function getExpenses() {

	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/expenses', true);

	xhr.onreadystatechange = function() {

		console.log('in list on ready')
		if (xhr.readyState === 4 && xhr.status < 400) {
			var expenses = JSON.parse(xhr.response);
			
			// *** data aggregation ***
			let sum = 0.00;
			let count = 0;
			for (let i = 0; i < expenses.length; i++){
				sum += expenses[i].expenseTotal;
				count++;
			}
			console.log('Total Expenses: $ ' + sum); // sum of expenses
			let avg;
			avg = sum / count;
			console.log('Expense Average: $ ' +avg); // avg of expenses
			
			// *********************************************************
			// *** NOTE:  Need to append the sum/avg in the display view
			// *** Current aggregation is in the console.
			// *********************************************************
			
			displayExpenses(expenses);

			
		}
		
		if (xhr.readyState === 4 && xhr.status >= 400) {
			console.error(xhr.status + ': ' + xhr.response);
			var dataDiv = document.getElementById('expenseData');
			dataDiv.textContent = '*** Expenses Not Found ***';
		}

	}
	xhr.send(null);
}

// ********** DISPLAY LIST ****************

function displayExpenses(expenses) {

	console.log('in displayExpenses')

	let dataDiv = document.getElementById('expenseData');
	dataDiv.textContent = '';

	let table = document.createElement('table');
	dataDiv.appendChild(table);
	table.className = 'table rounded table-light';

	let tr = document.createElement('tr');

	let th = document.createElement('th');
	th.textContent = 'Id';
	tr.appendChild(th);

	th = document.createElement('th');
	th.textContent = 'Name';
	tr.appendChild(th);

	th = document.createElement('th');
	th.textContent = 'Amount';
	tr.appendChild(th);

	table.appendChild(tr);

	expenses.forEach(function(expense, index) {

		let tr = document.createElement('tr');

		let td = document.createElement('td');
		td.textContent = expense.id;
		tr.appendChild(td);

		td = document.createElement('td');
		td.textContent = expense.paidToName;
		tr.appendChild(td);

		td = document.createElement('td');
		td.textContent = "$ " + expense.expenseTotal;
		tr.appendChild(td);

		table.appendChild(tr);

		tr.addEventListener('click', function(e) {
			getExpense(expense.id);
		});
	});
}

// ********** GET expense BY ID ************

function getExpense(expenseId) {

	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'api/expenses/' + expenseId, true);

	xhr.onreadystatechange = function() {

		if (xhr.readyState === 4 && xhr.status < 400) {
			var expenseObject = JSON.parse(xhr.responseText);
			displayExpense(expenseObject);

		}

		if (xhr.readyState === 4 && xhr.status >= 400) {
			console.error(xhr.status + ': ' + xhr.responseText);
			var dataDiv = document.getElementById('expenseData');
			dataDiv.textContent = 'Expense Not Found';
		}
	};

	xhr.send(null);
}

// ********** ADD expense *************

function addNewExpense() {

	var xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/expenses', true);
	xhr.setRequestHeader("Content-type", "application/json");

	xhr.onreadystatechange = function() {

		if (xhr.readyState === 4 && xhr.status < 400) {
			var expenseObject = JSON.parse(xhr.responseText);
			displayExpense(expenseObject);
		}

		if (xhr.readyState === 4 && xhr.status >= 400) {
			console.error(xhr.status + ': ' + xhr.responseText);
			var dataDiv = document.getElementById('expenseData');
			dataDiv.textContent = '*** Error Adding Expense ***';
		}
	};

	let form = document.addExpenseForm;
	var newExpenseObject = {
		expenseDate : form.expenseDate.value,
		paidToName : form.paidToName.value,
		expenseType : form.expenseType.value,
		paymentType : form.paymentType.value,
		workorderNumber : form.workorderNumber.value,
		description : form.description.value,
		expenseTotal : form.expenseTotal.value
	};

	var newExpenseJsonString = JSON.stringify(newExpenseObject);

	xhr.send(newExpenseJsonString);
}

// ********* UPDATE expense **********

function updateExpense(expense) {

	console.log('form' + expense);
	console.log('data' + expenseData);
	console.log('updatedExpense' + expense.expenseTotal);

	var xhr = new XMLHttpRequest();
	xhr.open('POST', 'api/expenses/' + expense.id, true);
	xhr.setRequestHeader("Content-type", "application/json");

	xhr.onreadystatechange = function() {

		if (xhr.readyState === 4 && xhr.status < 400) {
			var expenseObj = JSON.parse(xhr.responseText);
			displayExpense(expenseObj);

		}

		if (xhr.readyState === 4 && xhr.status >= 400) {
			console.error(xhr.status + ': ' + xhr.responseText);
			var dataDiv = document.getElementById('expenseData');
			dataDiv.textContent = 'Error Updating Expense';
			scrollOnClick();
		}
	};

	var updatedExpenseObject = {
		expenseDate : document.updateForm.expenseDate.value,
		paidToName : document.updateForm.paidToName.value,
		expenseType : document.updateForm.expenseType.value,
		paymentType : document.updateForm.paymentType.value,
		workorderNumber : document.updateForm.workorderNumber.value,
		description : document.updateForm.description.value,
		expenseTotal : document.updateForm.expenseTotal.value
	};

	var updatedExpenseJsonString = JSON.stringify(updatedExpenseObject);

	xhr.send(updatedExpenseJsonString);
}

// ********* UPDATE FORM **********

function showUpdateForm(expense) {

	console.log('expense' + expense);

	var dataDiv = document.getElementById('expenseData');
	dataDiv.textContent = '';

	console.log('edata' + expenseData);

	let h3 = document.createElement('h3');
	h3.textContent = ("Update Expense (" + expense.id + ") for " + expense.paidToName);
	h3.className = "font-weight-light";
	dataDiv.appendChild(h3);

	let updateForm = document.createElement('form');
	updateForm.name = 'updateForm';
	dataDiv.appendChild(updateForm);

	let br = document.createElement('br');
	updateForm.appendChild(br);

	let label = document.createElement('label');
	label.textContent = 'Date';
	updateForm.appendChild(label);

	let input = document.createElement('input');
	input.className = 'form-control';
	input.required = '';
	input.type = 'date';
	input.name = 'expenseDate';
	input.value = expense.expenseDate;
	updateForm.appendChild(input);

	br = document.createElement('br');
	updateForm.appendChild(br);

	label = document.createElement('label');
	label.textContent = 'Name';
	updateForm.appendChild(label);

	input = document.createElement('input');
	input.className = 'form-control';
	input.type = 'text';
	input.name = 'paidToName';
	input.value = expense.paidToName;
	updateForm.appendChild(input);

	br = document.createElement('br');
	updateForm.appendChild(br);

	label = document.createElement('label');
	label.textContent = 'Expense Type';
	updateForm.appendChild(label);

	input = document.createElement('input');
	input.className = 'form-control';
	input.type = 'text';
	input.name = 'expenseType';
	input.value = expense.expenseType;
	updateForm.appendChild(input);

	br = document.createElement('br');
	updateForm.appendChild(br);

	label = document.createElement('label');
	label.textContent = 'Payment Type';
	updateForm.appendChild(label);

	input = document.createElement('input');
	input.className = 'form-control';
	input.type = 'text';
	input.name = 'paymentType';
	input.value = expense.paymentType;
	updateForm.appendChild(input);

	br = document.createElement('br');
	updateForm.appendChild(br);

	label = document.createElement('label');
	label.textContent = 'Work Order or Receipt Number';
	updateForm.appendChild(label);

	input = document.createElement('input');
	input.className = 'form-control';
	input.type = 'number';
	input.name = 'workorderNumber';
	input.value = expense.workorderNumber;
	updateForm.appendChild(input);

	br = document.createElement('br');
	updateForm.appendChild(br);

	label = document.createElement('label');
	label.textContent = 'Description';
	updateForm.appendChild(label);

	input = document.createElement('input');
	input.className = 'form-control';
	input.type = 'text';
	input.name = 'description';
	input.value = expense.description;
	updateForm.appendChild(input);

	br = document.createElement('br');
	updateForm.appendChild(br);

	label = document.createElement('label');
	label.textContent = 'Expense Total';
	updateForm.appendChild(label);

	input = document.createElement('input');
	input.className = 'form-control';
	input.type = 'number';
	input.name = 'expenseTotal';
	input.value = expense.expenseTotal;
	updateForm.appendChild(input);

	br = document.createElement('br');
	updateForm.appendChild(br);

	let button = document.createElement('button');
	button.className = 'btn btn-outline-primary';
	button.textContent = "Update Expense";
	button.name = 'update';
	updateForm.appendChild(button);

	let cancelButton = document.createElement('button');
	cancelButton.className = 'btn btn-outline-secondary';
	cancelButton.textContent = "Cancel";
	cancelButton.name = 'cancel';
	updateForm.appendChild(cancelButton);

	button.addEventListener('click', function(event) {
		event.preventDefault();
		if (confirm('Are you sure you\'d like to update this expense?')) {
			scrollOnClick();
			updateExpense(expense);
		} else {
			// do nothing
			console.log('event aborted');
		}
	});

	cancelButton.addEventListener('click', function(event) {
		event.preventDefault();
		scrollOnClick();
		getExpenses();
	});

	dataDiv.appendChild(updateForm);

}
// ********** delete expense ***********

function deleteExpense(expenseId) {

	var xhr = new XMLHttpRequest();
	xhr.open('DELETE', 'api/expenses/' + expenseId, true);
	xhr.setRequestHeader("Content-type", "application/json");

	xhr.onreadystatechange = function() {

		if (xhr.readyState === 4 && xhr.status < 400) {

			let dataDiv = document.getElementById('expenseData');
			dataDiv.textContent = '';

			let delMsg = document.createElement('h3');
			delMsg.textContent = 'Expense Successfully Deleted';
			dataDiv.appendChild(delMsg);
			console.log('delete success');

		}

		if (xhr.readyState === 4 && xhr.status >= 400) {
			console.error(xhr.status + ': ' + xhr.responseText);
			var dataDiv = document.getElementById('expenseData');
			dataDiv.textContent = 'Error Deleting Expense';
		}
	};

	xhr.send();
}

// ******** DISPLAY expense ************

function displayExpense(expense) {

	var dataDiv = document.getElementById('expenseData');
	dataDiv.textContent = "";

	while (dataDiv.firstElementChild) {
		dataDiv.removeChild(dataDiv.firstElementChild);
	}

	let expH3 = document.createElement('h3');
	dataDiv.appendChild(expH3);
	expH3.textContent = expense.paidToName;

	let expUl = document.createElement('ul');
	dataDiv.appendChild(expUl);
	expUl.className = 'list-unstyled';

	let idLi = document.createElement('li');
	expUl.appendChild(idLi);
	idLi.textContent = "Expense Id: " + expense.id;

	let dateLi = document.createElement('li');
	expUl.appendChild(dateLi);
	dateLi.textContent = "Expense Date: " + expense.expenseDate;

	let paidLi = document.createElement('li');
	expUl.appendChild(paidLi);
	paidLi.textContent = "Paid To: " + expense.paidToName;

	let typLi = document.createElement('li');
	expUl.appendChild(typLi);
	typLi.textContent = "Expense Type: " + expense.expenseType;

	let payTypLi = document.createElement('li');
	expUl.appendChild(payTypLi);
	payTypLi.textContent = "Paid with: " + expense.paymentType;

	let woLi = document.createElement('li');
	expUl.appendChild(woLi);
	woLi.textContent = "Work Order # : " + expense.workorderNumber;

	let desc = document.createElement('li');
	expUl.appendChild(desc);
	desc.textContent = "Description: " + expense.description;

	let totalLi = document.createElement('li');
	expUl.appendChild(totalLi);
	totalLi.textContent = "Expense Total: $ " + expense.expenseTotal;

	let listButton = document.createElement('button');
	listButton.innerHTML = "Expense List";
	dataDiv.appendChild(listButton);
	listButton.className = 'btn btn-outline-primary';

	let editButton = document.createElement('button');
	editButton.innerHTML = "Update Expense";
	dataDiv.appendChild(editButton);
	editButton.className = 'btn btn-outline-primary';

	let delButton = document.createElement('button');
	delButton.innerHTML = "Delete Expense";
	dataDiv.appendChild(delButton);
	delButton.className = 'btn btn-outline-danger';

	listButton.addEventListener('click', function(e) {
		e.preventDefault();
		scrollOnClick();
		getExpenses();
	});

	editButton.addEventListener('click', function(e) {
		e.preventDefault();
		scrollOnClick();
		showUpdateForm(expense);
	});

	delButton.addEventListener('click', function(e) {
		e.preventDefault();
		if (confirm('Are you sure you\'d like to delete this expense?')) {
			scrollOnClick();
			deleteExpense(expense.id);
		} else {
			// do nothing
			console.log('event aborted');
		}

	});

}
