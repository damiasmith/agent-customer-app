# Agent Customer App
  An app for displaying, updating and deleting customoer and agent informtation

## Quick Start Guide
Install dependencies.
```bash
npm install
```

Navigate to the directory and run the server.
```bash
cd api
npm start
```

## Test in Postman
[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/0b9f29bedc1058c74859)

get all agents  GET http://localhost:4000/agents
get agent by id  GET http://localhost:4000/agents/1987
add agent  POST http://localhost:4000/agents
update agent  PUT http://localhost:4000/agents/167

get all customers  GET http://localhost:4000/customers
update customer  PUT http://localhost:4000/customers/5055
get customer by agent id  GET http://localhost:4000/customers/agent/1987
add customer  POST http://localhost:4000/customers
delete customer DELETE http://localhost:4000/customers/5055

Use a data object from the sample data or change it to use PUT and POST. The data should be entered in the Body as raw and JSON. Change the id in the url for DELETE, PUT, and GET to find a specific id.

## Requirements
Node.js
npm
express.js
Postman