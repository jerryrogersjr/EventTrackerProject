window.addEventListener('load', function(e) {
	console.log('Loaded');
	init();
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
// document.deleteExpenseForm.deleteButton.addEventListener('click',
// function(event){
// event.preventDefault();
// deleteExpense();
// });
	
	// document.updateExpenseForm.update.addEventListener('click',
	// function(event) {
	// event.preventDefault();
	// updateExpense();
	// });
}

// ********** GET LIST of expenses **********

funtion listExpenses() {
	// iterate expenses by name and amount here.
}

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

	let form = document.updateExpenseForm;
	var newExpenseObject = {
		expenseDate : form.expenseDate.value,
		paidToName : form.paidToName.value,
		expenseType : form.expenseType.value,
		paymentType : form.paymentType.value,
		workorderNumber : form.workorderNumber.value,
		description : form.description.value,
		expenseTotal : form.expenseTotal.value
	};

	var newExpenseJsonString = JSON.stringify(newExpenseObject); // Convert
	// JS object
	// to
	// JSON string
	xhr.send(newExpenseJsonString);
}

// ********* UPDATE expense **********

// function updateExpense(expenseId) {
//	
// var xhr = new XMLHttpRequest();
// xhr.open('POST', 'http://localhost:8087/api/expenses/' + expenseId, true);
// xhr.setRequestHeader("Content-type", "application/json");
//	
// xhr.onreadystatechange = function() {
//		
// if (xhr.readyState === 4 && xhr.status < 400) {
// var expenseObject = JSON.parse(xhr.responseText);
// displayExpense(expenseObject);
// }
//		
// if (xhr.readyState === 4 && xhr.status >= 400) {
// console.error(xhr.status + ': ' + xhr.responseText);
// var dataDiv = document.getElementById('expenseData');
// dataDiv.textContent = '*** Error Updating Expense ***';
// }
// };
//	
// let form = document.updateExpenseForm;
// var updateExpenseObject = {
// expenseDate : form.expenseDate.value,
// paidToName : form.paidToName.value,
// expenseType : form.expenseType.value,
// paymentType : form.paymentType.value,
// workorderNumber : form.workorderNumber.value,
// description : form.description.value,
// expenseTotal : form.expenseTotal.value
// };
//	
// var updateExpenseJsonString = JSON.stringify(updateExpenseObject); // Convert
// JS object to
// // JSON string
// xhr.send(updateExpenseJsonString);
//	
// }

// ********** delete expense ***********

function deleteExpense(expenseId) {

	var xhr = new XMLHttpRequest();
	xhr.open('DELETE', 'http://localhost:8087/api/expenses/' + this.expenseId,
			true);
	xhr.setRequestHeader("Content-type", "application/json");

	xhr.onreadystatechange = function() {

		if (xhr.readyState === 4 && xhr.status < 400) {
			// var expenseObject = JSON.parse(xhr.responseText);
			// displayExpense(expenseObject);
			if (this.expenseId === null) {
				let deleted = this.expenseId;
				deleted.textContent = this.expenseId + ' successfully deleted';
			}
			console.log('delete success');

		}

		if (xhr.readyState === 4 && xhr.status >= 400) {
			console.error(xhr.status + ': ' + xhr.responseText);
			var dataDiv = document.getElementById('expenseData');
			dataDiv.textContent = 'Error Deleting Expense';
		}
	};
	xhr.send(null);
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

	let updateBtn = document.createElement('input');
	dataDiv.appendChild(updateBtn);
	updateBtn.type = 'submit';
	updateBtn.value = 'Update';
	updateBtn.name = 'updateButton';

	let deleteBtn = document.createElement('input');
	dataDiv.appendChild(deleteBtn);
	deleteBtn.type = 'submit';
	deleteBtn.value = 'Delete';
	deleteBtn.name = 'deleteButton';

	let hr = document.createElement('hr');
	dataDiv.appendChild(hr);

}