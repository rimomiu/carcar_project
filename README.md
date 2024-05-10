# CarCar

Team:

* Jihanyu Miao - Sales
* Joshua Kahn - Service

## Design

## Service microservice

## First Steps
 To start, please make sure you have Docker, Git, and at least Node.js version 18.2 or above.

 1) Fork this repository
 2) Clone the forked repository onto your computer by using the command 'git clone <<repository url>>
 3) Using Docker, we run three commands to get the application built and running:

    docker volume create beta-data
    docker-compose build
    docker-compose up

The first command will provide us with a place to store data, the second will actually build the relevant containers, and the third will not only start things but also attach to containers for the service. Once you've made sure all the containers are running, we can really get started!

4) Please visit http://localhost:3000/ to view the site. Welcome to CarCar, our approach to top tier vehicle management!

    We'll be focusing on just the Service portion of our microservices, but there is also Inventory and Sales which run in tandem to bring everything together.

## Diagram
 - Put diagram here

## API Documentation

### URLs and Ports
 - Put URLs and ports for services here

### Inventory API (Optional)
 - Put Inventory API documentation here. This is optional if you have time, otherwise prioritize the other services.

### Service API
 - Put Service API documentation here

### Sales API
 - Put Sales API documentation here

## Value Objects
 - Identification of value objects for each service goes here

## Sales microservice

Explain your models and integration with the inventory
microservice, here.
