# Event Tracker Project
## Expense Tracker
** NOTE: Currently no front end UI to view. This project was directed
to work on RESTful services. I will build out the front end to experience
the CRUD soon if we aren't using this project for follow on in class.

## Overview

'Event Tracker' is a broad term for anything that keeps track of information over time.

Here, I chose a basic expense tracker. An expense can be created, read,
updated, or deleted.

### Topics Covered/Learning Objectives

* Create a MySql DB table
* Create a JPA Project
* Create a Java entity class POJO that models your database table.
* Map a POJO using JPA.
* Configure a Spring Boot app to publish a REST API.
* Use Spring REST annotations.
* Use Spring Data JPA to perform all CRUD operations.
* Send and receive JSON.

### Project Requirements

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
