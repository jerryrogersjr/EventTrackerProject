# Event Tracker Project
## Expense Tracker

* Phase 1: Created RESTful api and tested form CRUD
* Phase 2: Implemented Javascript XMLHttpRequest CRUD
* Phase 3: TBD

## Overview

'Event Tracker' is a broad term for anything that keeps track of information over time.

Here, I chose a basic expense tracker. An expense can be created, read,
updated, or deleted.

* Follow On: Full CRUD with Javascript XMLHttpRequest implemented.

![Expense Tracker](ExpenseTracker/src/main/resources/static/images/iPad.png =250x)
![Expense Tracker2](ExpenseTracker/src/main/resources/static/images/ipad2.png =250x)

## Topics Covered/Learning Objectives

* Create a MySql DB table
* Create a JPA Project
* Create a Java entity class POJO that models your database table.
* Map a POJO using JPA.
* Configure a Spring Boot app to publish a REST API.
* Use Spring REST annotations.
* Use Spring Data JPA to perform all CRUD operations.
* Send and receive JSON

### Follow On with Javascript

* Adding scripts to a web application
* Send asynchronous requests to Java controllers with JavaScript's ```XMLHttpRequest```
* Consume and parse JSON responses with JavaScript
* Build HTML with JavaScript
* Send POST/PUT/DELETE requests with ```XMLHttpRequest```

## Project Requirements

### Phase 2

- [x] A new event object implements full CRUD.
- [x] All interactions with the database are done so RESTfully.
- [x] App uses Javascript to access data and manipulate the DOM.
- [x] App presents the aggregated data in some additional format.
  * currently, data aggregation is only displayed in the console
  * SUM & AVG of Expenses

### Phase 1

- [x] Create a new STS workspace for the project.
- [x] Initialize the workspace with git.
- [x] Associate the workspace with a Github repo named EventTrackerProject.
- [x] Use MySQL Workbench to create a database schema with a single table.
  * Create a appusername@localhost account with a password for your database.
  * Include some initial sample data.
- [x] Create a Gradle Project for the JPA entity and tests.
- [x] Create a Spring Boot project for the REST API controller(s), service, and Spring Data JPA repository.
- [x] Create controller logic to perform the basic CRUD operations of a REST API.
- [x] Test these routes using Postman
```java
public interface ExpenseRepository extends JpaRepository<Expense, Integer>```
```
```
| Return Type   | Route                  | Functionality               |
| ------------- | ---------------------- | --------------------------- |
| List<Expense> | GET api/expenses       | Gets all expenses           |
| Expense       | GET api/expenses/{id}  | Gets one expense by ID      |
| Expense       | POST api/expenses      | Creates new expense         |
| Expense       | POST api/expenses/{id} | Updates one expense by ID   |
| Boolean       | DELETE api/expenses/{id} | Deletes one expense by ID |
```
```json
    {
        "id": 1,
        "expenseDate": "2019-11-29T07:00:00.000+0000",
        "paidToName": "Home Depot",
        "expenseType": "Materials",
        "paymentType": "CC",
        "workorderNumber": 123456789,
        "description": "Batteries for lights",
        "expenseTotal": 12.76,
        "createdAt": "2019-11-29T07:00:00.000+0000",
        "updatedAt": "2019-11-29T07:00:00.000+0000"
    },
    {
        "id": 2,
        "expenseDate": "2019-11-29T07:00:00.000+0000",
        "paidToName": "Lowes",
        "expenseType": "Expendables",
        "paymentType": "Cash",
        "workorderNumber": 0,
        "description": "Stock Replacement: zip ties, tape, velcro",
        "expenseTotal": 37.98,
        "createdAt": "2019-11-29T07:00:00.000+0000",
        "updatedAt": "2019-11-29T07:00:00.000+0000"
    },
    {
        "id": 3,
        "expenseDate": "2019-11-29T07:00:00.000+0000",
        "paidToName": "Starbucks",
        "expenseType": "Customer Appreciation",
        "paymentType": "CC",
        "workorderNumber": 0,
        "description": "Coffee for Jon at Wazzo ",
        "expenseTotal": 3.78,
        "createdAt": "2019-11-29T07:00:00.000+0000",
        "updatedAt": "2019-11-29T07:00:00.000+0000"
    }
```
### Technologies Used

* Follow On: Javascript

* Java
* JPA
* Gradle
* Hibernate
* Tomcat
* Apache
* Spring Boot
* RESTful
* JSON
* MySQL Workbench
* Atom
* Postman

* MacBook Pro
* Ninja
* Spotify :)
