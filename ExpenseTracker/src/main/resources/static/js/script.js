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
	// document.listExpenseForm.list.addEventListener('load', function(event) {
	// event.preventDefault();
	// getExpenseList();
	// });
}

// ********** GET LIST of expenses **********

function getExpenses() {
	console.log('get list');

	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'http://localhost:8087/api/expenses', true);

	xhr.onreadystatechange = function() {

		console.log('in list on ready')
		if (xhr.readyState === 4 && xhr.status < 400) {
			var expenses = JSON.parse(xhr.response);
			displayExpenses(expenses);
			console.log(expenses);
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
		td.textContent = expense.expenseTotal;
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
	xhr.open('POST', 'http://localhost:8087/api/expenses', true);
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

	var xhr = new XMLHttpRequest();
	xhr.open('POST', 'http://localhost:8087/api/expenses/' + expenseId, true);
	xhr.setRequestHeader("Content-type", "application/json");

	xhr.onreadystatechange = function() {

		if (xhr.readyState === 4 && xhr.status < 400) {
			var expenseObject = JSON.parse(xhr.responseText);
			displayExpense(expenseObject);
		}

		if (xhr.readyState === 4 && xhr.status >= 400) {
			console.error(xhr.status + ': ' + xhr.responseText);
			var dataDiv = document.getElementById('expenseData');
			dataDiv.textContent = 'Error Updating Expense';
		}
	};

	xhr.send(expense);
}

// ********* UPDATE FORM **********

function showUpdateForm(expense) {

	var dataDiv = document.getElementById('expenseData');

	let updH1 = document.getElementById('h3');
	dataDiv.appendChild(updH1);
	updH1.textContent = "Make changes to Expense";

	let updForm = document.getElementById('form');

	let updDate = document.getElementById('input');
	updForm.appendChild(updDate);
	updDate.value = expense.expenseDate.value;
	updDate.type = "text";

	dataDiv.appendChild(updForm);

}

// ********** delete expense ***********

function deleteExpense(expenseId) {

	var xhr = new XMLHttpRequest();
	xhr.open('DELETE', 'http://localhost:8087/api/expenses/' + expenseId, true);
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
		alert('Are you sure you\'d like to delete this expense?');
		scrollOnClick();
		deleteExpense(expense.id);
	});

}

function countExpense(expenses) {

}

function averageExpense(expenses) {

}