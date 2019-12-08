window.addEventListener('load', function(e) {
	console.log('Loaded');
	init();
	displayExpenseList();
});

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
//	document.listExpenseForm.list.addEventListener('click', function(event) {
//		event.preventDefault();
//		getExpenseList();
//	});
}

// ********** GET LIST of expenses **********

function getExpenseList() {
	console.log('get list');
	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'http://localhost:8087/api/expenses/', true);

	xhr.onreadystatechange = function() {

		
		if (xhr.readyState === 4 && xhr.status < 400) {
			var expenses = JSON.parse(xhr.responseText);
			displayExpenseList(expenses);
			console.log(expenses);
		}

		if (xhr.readyState === 4 && xhr.status >= 400) {
			console.error(xhr.status + ': ' + xhr.responseText);
			var dataDiv = document.getElementById('expenseData');
			dataDiv.textContent = 'Expenses Not Found';
		}

	}
	xhr.send(null);
}

// ********** DISPLAY LIST ****************

function displayExpenseList(expenses) {

	let dataDiv = document.getElementById('expenseData');
	dataDiv.textContent = '';
	
	let listH3 = document.createElement('h3');
	dataDiv.appendChild(listH3);
	listH3.textContent = 'List of Expenses';
	
	let table = document.createElement('table');
	
	for (let i = 0; i < expenses.length; i++){
		
		let tblRow = document.createElement('tr');
		table.appendChild(tblRow);
		
		let tblH1 = document.createElement('th');
		tblRow.appendChild(tblH1);
		tblH1.textContent = 'Expense Date';
				
		let tblH2 = document.createElement('th');
		tblRow.appendChild(tblH2);
		tblH2.textContent = 'Expended At';
		
		let tblH3 = document.createElement('th');
		tblRow.appendChild(tblH3);
		tblH3.textContent = 'Expense Amount';
		
		let tblRows = document.createElement('tr');
		table.appendChild(tblRows);
		
		let td1 = document.createElement('td');
		tblRows.appendChild(td1);
		td1.textContent = expenses[i].expenseDate;
		
		let td2 = document.createElement('td');
		tblRows.appendChild(td2);
		td2.textContent = expenses[i].paidToName;
		
		let td3 = document.createElement('td');
		tblRows.appendChild(td3);
		td3.textContent = expenses[i].expenseTotal;
		
		
		
	}
	dataDiv.appendChild(table);
}

//let table = document.createElement('table')
//for (i = 0; usStates.length; i++) {
//  let tableRow = document.createElement('tr');
//  document.body.appendChild(tableRow);

//  let tableData1 = document.createElement('td');
//  let tableData2 = document.createElement('td');
//  tableData1.textContent = usStates[i].name;
//  tableData2.textContent = usStates[i].abbr;
//document.body.appendChild(tableData1);
//  document.body.appendChild(tableData2);
//}
//document.body.appendChild(table);

// ********** GET expense BY ID ************

function getExpense(expenseId) {

	var xhr = new XMLHttpRequest();
	xhr.open('GET', 'http://localhost:8087/api/expenses/' + expenseId, true);

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
			dataDiv.textContent = 'Error Adding Expense';
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

function updateExpense(expenseId) {
	
	var xhr = new XMLHttpRequest();
	xhr.open('POST', 'http://localhost:8087/api/expenses/' + expenseId,
			true);
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
	
	let updForm = document.getElementById('form');
	dataDiv.appendChild(updForm);
	
	let updH1 = document.getElementById('h3');
	updForm.appendChild(updH1); 
	updH1.textContent = "Make changes to Expense";
	
	let updDate = document.getElementById('input');
	updForm.appendChild(updDate);
	updDate.value = expense.expenseDate.value;
	updDate.type = "text";
	
	
	
	
}

// ********** delete expense ***********

function deleteExpense(expenseId) {

	var xhr = new XMLHttpRequest();
	xhr.open('DELETE', 'http://localhost:8087/api/expenses/' + expenseId,
			true);
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

	let editButton = document.createElement('button');
	editButton.innerHTML = "Update Expense";
	dataDiv.appendChild(editButton);

	let delButton = document.createElement('button');
	delButton.innerHTML = "Delete Expense";
	dataDiv.appendChild(delButton);
	
	let hr = document.createElement('hr');
	dataDiv.appendChild(hr);
	
	editButton.addEventListener('click', function(e) {
		e.preventDefault();
		updateExpense(expense);
	});

	delButton.addEventListener('click', function(e) {
		e.preventDefault();
		deleteExpense(expense.id);
	});



}