## Amani Clothing Co 

A full-stack ecommerce web application that is built on ReactJS, MongoDB, Node, Express, and StripeJS

Create new products, view all products currently inside the catalog, update existing products, and delete products through the admin portal http://localhost:3000/admin

### Installation and Setup Instructions

Clone this repository. Node and npm must be installed globally on your machine

In the main project directory, run:

### `npm install`

### `npm start`

Runs the app in the development mode on [http://localhost:3000](http://localhost:3000)

Then `cd server` and run:

### `npm install`

### `nodemon`

Runs the server in the backend

To obtain a connection string, please follow the instructions here: https://gist.github.com/singhayushh/426f10353a8051593828e92c139ebdbc

In the server directory, create a .env file with your new connection string (connects to your MongoDB database):

```
ATLAS_URI=YOUR_NEW_CONNECTION_STRING
```