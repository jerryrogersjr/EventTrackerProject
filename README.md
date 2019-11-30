# Event Tracker Project
* Expense Tracker

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

![Image](ExpenseTracker/src/main/resources/public/images/Basic%20CRUD%20Interface.png)

### Project Requirements

1. Create a new STS workspace for your project.
2. Initialize your workspace with git.
3. Associate your workspace with a Github repo named EventTrackerProject.
4. Use MySQL Workbench to create a database schema with a single table.
- Be sure to create a appusername@localhost account with a password for your database.
- Include some initial sample data.
5. Create a Gradle Project for your JPA entity and tests.
6. Create a Spring Boot project for your REST API controller(s), service, and Spring Data JPA repository.
7. Create controller logic to perform the basic CRUD operations of a REST API.
8. Test these routes using Postman

### Technologies Used

* Java
* JPA
* Gradle
* Hibernate
* Tomcat/Apache
* Spring Boot
* RESTful
* JSON
* Postman
* MySQL Workbench
* Atom

```[
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
]```

* MacBook Pro
* Ninja
* Spotify :)
