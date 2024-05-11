Team:

- Jihanyu Miao - Sales
- Joshua Kahn - Service

## Design

## Service microservice

## First Steps

To start, please make sure you have Docker, Git, and at least Node.js version 18.2 or above.

1.  Fork this repository
2.  Clone the forked repository onto your computer by using the command 'git clone <<repository url>>
3.  Using Docker, we run three commands to get the application built and running:

    docker volume create beta-data
    docker-compose build
    docker-compose up

The first command will provide us with a place to store data, the second will actually build the relevant containers, and the third will not only start things but also attach to containers for the service. Once you've made sure all the containers are running, we can really get started!

4. Please visit http://localhost:3000/ to view the site. Welcome to CarCar, our approach to top tier vehicle management!

   We'll be focusing on just the Service portion of our microservices, but there is also Inventory and Sales which run in tandem to bring everything together.

## Diagram
![Diagram](image.png)

### Service API

Beginning with Inventory, we track automobile information if they're available for purchase. The Sales side gets this info from inventory using a poller, which collects the information regularly so that we have everything clean and current.

This is how the Inventory and Sales applications function alongside Service in order to provide a solid customer experience.

### URLs and Ports
 [Action] | (Method) | 'URL'

Relevant Endpoints

Technicians:
[List technicians]	(GET)	'http://localhost:8080/api/technicians/'
[Create a technician]	(POST)	'http://localhost:8080/api/technicians/'
[Delete a specific technician]	(DELETE)	'http://localhost:8080/api/technicians/:id/'

Appointments:
[List appointments]	(GET)	'http://localhost:8080/api/appointments/'
[Create an appointment]	(POST)	'http://localhost:8080/api/appointments/'
[Delete an appointment]	(DELETE)	'http://localhost:8080/api/appointments/:id/'
[Set appointment status to "canceled"]	(PUT)	'http://localhost:8080/api/appointments/:id/cancel/'
[Set appointment status to "finished"]	(PUT)	'http://localhost:8080/api/appointments/:id/finish/'

## Value Objects

 Here we'll go over some of our relevant objects and give brief explanations where needed.

 Technicians:

 This is the JSON body that will be returned when listing technicians.

{
	"technicians": [
		{
			"first_name": "James",
			"last_name": "TechGuy",
			"id": 17,
			"employee_id": "4321"
		},
		{
			"first_name": "Johnny",
			"last_name": "Rescue",
			"id": 18,
			"employee_id": "1234"
		},
		{
			"first_name": "Sue",
			"last_name": "Helper",
			"id": 19,
			"employee_id": "5821"
		},
		{
			"first_name": "Karla",
			"last_name": "Bubbles",
			"id": 20,
			"employee_id": "5086"
		}
	]
}

 As these technician objects will be nested inside of other objects, such as appointments where they are linked, please keep in mind that if you enter a body for an appointment you will want to put the id for the technician in the matching field so that it can reference the content inside of it.

 A single technician looks like this:

 {
	"id": 17,
	"first_name": "James",
	"employee_id": "4321",
	"last_name": "TechGuy"
}

Appointments:

For a list of appointments, it will end up looking like this.

{
	"appointments": [
		{
			"status": "pending",
			"set_time": "14:15:00",
			"reason": "Consultation",
			"is_vip": false,
			"vin": "3GNDA13D07S639993",
			"set_date": "2024-05-29",
			"technician": {
				"employee_id": "1234",
				"first_name": "Johnny",
				"last_name": "Rescue",
				"id": 18
			},
			"customer": "Sarah Grey"
		},
		{
			"status": "pending",
			"set_time": "14:45:00",
			"reason": "Paint Adjustment",
			"is_vip": false,
			"vin": "2C3CDZCB8CM154051",
			"set_date": "2024-06-04",
			"technician": {
				"employee_id": "5821",
				"first_name": "Sue",
				"last_name": "Helper",
				"id": 19
			},
			"customer": "Reggie Elwood"
		}
	]
}

The VIN field is unique, so trying to enter the same one twice will end up causing problems! The is_vip field is set automatically by using the poller information to cross reference vins that are already in our inventory. Its default is false unless we get that match.

A single appointment is structured below for reference.

{
	"technician": {
		"first_name": "Johnny",
		"id": 18,
		"last_name": "Rescue",
		"employee_id": "1234"
	},
	"reason": "Consultation",
	"set_time": "14:15:00",
	"is_vip": false,
	"status": "pending",
	"vin": "3GNDA13D07S639993",
	"set_date": "2024-05-29",
	"customer": "Sarah Grey"
}

Again, just a note that technicians are matched up to appointments by their generated ids!

We hope that you enjoy using CarCar and are thankful to have the chance to provide you with the Service application!

### Sales API
 - Put Sales API documentation here

## Value Objects
 - Identification of value objects for each service goes here

## Sales microservice

Explain your models and integration with the inventory
microservice, here.
