# Contact App

Run the server with

```bash
yarn
yarn start
```

Or if you use npm

```bash
npm install
npm start
```

---


The server part of this system is already designed and exposes a set of REST endpoints via the `/api` route.


## How to Use

There are 6 endpoints and all are accessible from `/api/[endpoint]`

---

### /contacts (GET Request)
use the `/api/contacts` endpoint to view all the contacts at once


### /contact/:contactID (GET Requeest)
use the `/api/contact/:contactID` endpoint to view a single user at a time


### /contact/:contactID (POST Request)
use the `/api/contact/:contactID` endpoint to block a user


### /contact/:contactID (DELETE Request)
use the `/api/contact/:contactID` endpoint to delete a user


### /contacts (POST Request)
use the `/api/contacts` endpoint to view create a new user


### /contact/:contactID (PUT Request)
use the `/api/contact/:contactID` endpoint to update the details of a user

