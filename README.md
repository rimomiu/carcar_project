Team:

- Person 1 - Which microservice?
  Jihanyu Miao- Sales
- Person 2 - Which microservice?

## Design

## Service microservice

Explain your models and integration with the inventory
microservice, here.

## Sales microservice

The sales API enables the user to track and create sales person , customers, and sales data related.

Salesperson:
| Action | Method | URL
| ----------- | ----------- | ----------- |
| List salesperson | GET | http://localhost:8090/api/salespeople/
| Create a salesperson | POST | http://localhost:8090/api/salespeople/
| Show a specific salesperson | GET | http://localhost:8090/api/salespeople/id/

in LIST, it returns a list of customer like
{
"salespeople": [
{
"first_name": "Adam",
"last_name": "Band",
"employee_id": "1234",
"id": 1
}
]
}

by CREATE, it needs provide information in a json body, includes:
{
"first_name": "Adam",
"last_name": "Band",
"employee_id": "1234",
}

and it will return with id created form.
{
"first_name": "Adam",
"last_name": "Band",
"employee_id": "1234",
"id": 1
}

Customer
| Action | Method | URL
| ----------- | ----------- | ----------- |
| List customers | GET | http://localhost:8090/api/customers/
| Create a customer | POST | http://localhost:8090/api/customers/
| Show a specific customer | GET | http://localhost:8090/api/customers/id/

In list, it returns a list of customer like

{
"customers": [
{
"first_name": "Adam",
"last_name": "Bacd",
"address": "123 St",
"phone_number": 4321983032,
"id": 1
}
]
}

by CREATE, it needs provide information in a json body, includes:

{
"first_name": "Adam",
"last_name": "Bacd",
"address": "123 St",
"phone_number": 4321983032,
}
and it will return with id created form.

{
"first_name": "Adam",
"last_name": "Bacd",
"address": "123 St",
"phone_number": 4321983032,
"id": 1
}

Sale
| Action | Method | URL
| ----------- | ----------- | ----------- |
| List sales | GET | http://localhost:8090/api/customers/
| Create a sale | POST | http://localhost:8090/api/customers/
| Show a specific sale | GET | http://localhost:8090/api/customers/id/

list a sale records return like:
{
"sales": [
{
"id": 1,
"price": 45000,
"vin": {
"vin": "LWEONDVSW"
},
"salesperson": {
"id": 1,
"name": "Adm",
"employee_id": 2467
},
"customer": {
"name": "Amy Bcde",
"address": "222 St",
"phone_number": "201398468"
}
}
]
}

by CREATE, it needs provide information in a json body, includes:
{
"salesperson": "Adm",
"customer": "Amy",
"vin": "LWEONDVSW",
"price": 45000
}

<!-- for api,
it needs list_salesperson with get and post
show_salesperson with delete
list_customer with get and post
show_customer with delete
list_sales with get and post include customer, salesperson, autoVO
show_sales with delete

for front-end
it needs
Salespeople form and list
sales form and list
customer form and list
salesperson history list -->

Sales Front-end

Sales form: http://localhost:3000/sales/create
Sales List:http://localhost:3000/sales/list
Salespeople form: http://localhost:3000/salespeople/create
Salespeople list:http://localhost:3000/salespeople/list
Customer form:http://localhost:3000/customer/create
Customer list:http://localhost:3000/customer/list
Sales History:http://localhost:3000/history/salesperson
