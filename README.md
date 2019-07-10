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

### /contacts
use the `/api/contacts` endpoint to view all the contacts at once


### /contact/:contactID
use the `/api/contact/:contactID` endpoint to view a single user at a time


### /block/:contactID
use the `/api/block/:contactID` endpoint to block a user


### /delete/:contactID
use the `/api/delete/:contactID` endpoint to delete a user


### /add-contact
use the `/api/add-contact` endpoint to view create a new user


### /edit/:contactID
use the `/api/edit/:contactID` endpoint to update the details of a user

