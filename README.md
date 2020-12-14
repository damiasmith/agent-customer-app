# agent-customer-app
An app for displaying, updating and deleting customer and agent informtation

## Quick Start Guide
Install Node.js
https://nodejs.org/en/download/

```bash
node -v
npm -v
```

Navigate to the directory and install dependencies.
```bash
cd api
npm install
```
Run the server.
```bash
npm start
```

## Requirements
<p>Node.js<br>
npm<br>
express.js<br>
Postman</p>


## Test API in Postman

### Get the Collection
[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com/run-collection/0b9f29bedc1058c74859)

Run the collection in the app not the browser.  
Use a data object from the sample data for PUT and POST. The data should be entered in the Body as raw and JSON. Change the id in the url for DELETE, PUT, and GET to find a specific id.

### get all agents  

#### Request

````
GET http://localhost:4000/agents
````

#### Response

````
[
  {
    "_id": 101,
    "name": "John Doe",
    "address": "123 Main Street #200",
    "city": "Seattle",
    "state": "WA",
    "zipCode": "98101",
    "tier": 2,
    "phone": {
      "primary": "206-221-2345",
      "mobile": "206-555-3211"
    }
  },
  ...
]
````


### get agent by id  

#### Request

````
GET http://localhost:4000/agents/1987
````

#### Response

````
{
  "_id": 1987,
  "name": "Bob Loblaw",
  "address": "123 Main Street #200",
  "city": "Laguna Beach",
  "state": "CA",
  "zipCode": "92677",
  "tier": 2,
  "phone": {
    "primary": "714-765-2349",
    "mobile": "714-496-3288"
  }
}
````


### add agent 

#### Request

````
POST http://localhost:4000/agents
````

#### Response

````
Agent Added
  or
Agent exists. Please update instead.
```` 


### update agent  

#### Request

````
PUT http://localhost:4000/agents/167
````

#### Response

````
Agent updated
  or
Agent does not exist. Please add instead.
````


### get all customers 

#### Request

````
GET http://localhost:4000/customers
````

#### Response

````
[
  {
    "_id": 5054,
    "agent_id": 1987,
    "guid": "54fc8606-0630-42f9-9e3c-716772df09bf",
    "isActive": true,
    "balance": "$1,578.40",
    "age": 57,
    "eyeColor": "blue",
    "name": {
      "first": "Neva",
      "last": "Calderon"
    },
    "company": "ISOTRONIC",
    "email": "neva.calderon@isotronic.info",
    "phone": "+1 (985) 502-2956",
    "address": "573 Turner Place, Yukon, Federated States Of Micronesia, 762",
    "registered": "Wednesday, January 31, 2018 12:40 PM",
    "latitude": "76.989498",
    "longitude": "26.410977",
    "tags": [
      "eiusmod",
      "reprehenderit",
      "labore",
      "ut",
      "dolor"
    ]
  },
  ...
]
```` 


### update customer 

#### Request

````
PUT http://localhost:4000/customers/5055
````

#### Response

````
Customer updated
  or
Customer does not exist. Please add instead.
```` 


### get customer by agent id  

#### Request

````
GET http://localhost:4000/agents/1987
````

#### Response

````
[
  {
    "name": {
      "first": "Neva",
      "last": "Calderon"
    },
    "address": "573 Turner Place, Yukon, Federated States Of Micronesia, 762"
  },
  {
    "name": {
      "first": "Ophelia",
      "last": "Wong"
    },
    "address": "870 Hanson Place, Calpine, North Carolina, 9068"
  },
  ...
]
````


### add customer  

#### Request

````
POST http://localhost:4000/customers
````

#### Response

````
Customer Added
  or
Customer exists. Please update instead.

````


### delete customer 

#### Request

````
DELETE http://localhost:4000/customers/5055
````

#### Response

````
Customer Deleted
  or
Customer does not exist.
````



