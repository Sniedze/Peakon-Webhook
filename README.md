# Peakon-Webhook

This webhook server allows clients to register urls they want to receive webhooks to, trigger webhooks which porceeds with server sending post request to all client`s registred urls.

## Technologies

### Server

Express web framework provides the HTTP methods, middlewares and API setup

### Database & Model layer

MySQL database is used, but you can connect with other relational databases, like Postgres, MSSQL, MariaDB, SQLite3, Oracle, and Amazon Redshift.

Knex.js SQL query builder is used to quickly create tables, migrate and seed tables with initial data.

Objection.js is an ORM, which provides an abstract layer connecting database with services. Objection.js is used to define tables and relationships between them.

## Structure of the server

The code structure is based on the assumption that this server would have more operations and endpoints.

### models

Each model represents a database table and its relationships with other tables.

### migrations

Creates, updates tables.

### seeds

Occupies tables with initial data..

### routes

Routes forward requests to appropriate controller.
client.js route is the client server side endpoint receiving post requests from this server. The fake url created (ngrok) uses this endpoint.

### controllers

Controllers are responsible for taking the inputs from the route and invoking the appropriate actions to execute.

### services

Services execute CRUD operations against data in the database.

### helpers

'middlewares.js' contains a custom middlawere that checks if token is provided.

'postToWebHooks.js' is the axios function that sends post requests client`s webhooks.

## Authentication, token, user

Due to the scope of this assignement there are some things ommited or simplified.

### Authentication

Normally, authentication credentials would be send in the request.headers or req.session, depending if JWT or session is used.

### Token in the request body

As said before, token would usually come from the headers.
In this task, I am using the token:

1. in the custom middleware to check if the token is provided. Normally, you would check it against some stored value.
2. to store it with the webhooks in the database and send it in the post request after the webbhooks are triggered. Client might use the token to check their validity in their server.

### user_id

Normally, user_id would be received in the request.headers or req.session, depending if JWT or session is used.
In this assignement, user_id is provided in the req.body for the testing sakes.

## How to Run an Test

### Installation

After cloning run

```
  $ npm install or yarn install

```

### Database

– Create a database in your preffered relational DBMS. Start database.

- Configure 'knexfile.js' by adding appropriate database credentials.
- run:

```
 $ knex migrate:latest
 $ knex seed:run
```

### Run Server

```
 $ yarn start
 or
 $ npm start
```

Nodemon automatically restarts the node application when file changes in the directory are detected.

### Endpoints and testing

Postman or other service can be used to test endpoints.

## POST request to register webhooks

endpoint: `http://localhost:9876/api/webhooks`

```

   {
    "user_id": "1",
    "url": "https://requestbin.fullcontact.com/rf385urf",
    "token": "foo"
}

```

To fully test this server, create a public HTTPS url for a website running locally. For example, ngrok or other service.

successful response:
"Webhook url https://requestbin.fullcontact.com/rf385urf registred"

## POST request to trigger webhooks

endpoint: `http://localhost:9876/api/webhooks/test`

```

 {
    "user_id": "1",
    "payload": ["any",    {   "valid":  "JSON"    }]
}

```

successful response:
{
"response": {
"payload": {
"message": "Updated info"
},
"token": "foo"
}
}
