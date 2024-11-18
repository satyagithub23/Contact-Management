# Contact-Management
Contact Management feature helps users of the system to keep a track of important contact information of customers / clients. It lets users add, view, update, and delete contact details all in one place.


---

## Features:
- Add new contacts with fields like first name, last name, email, phone, company, and job title.
- Form validation to ensure all required fields are filled.
- Snackbar notification that appears when a contact is successfully added.
- Responsive UI using Material-UI components.
- Integration with a backend (Node.js and MongoDB) to store and manage contacts.

---

## Tech Stack:
- **Frontend:** React, Material-UI
- **Backend:** Node.js, Express.js
- **Database:** MongoDB
- **State Management:** React `useState`
- **Routing:** React Router

---

## Setup Instructions

### 1. Clone the Repository

Clone this repository to your local machine:

```bash
git clone https://github.com/satyagithub23/Contact-Management.git
cd Contact-Management
```
### 2. Install Dependencies

You will need to install the required dependencies for both the backend (Node.js) and frontend (React).

```bash
cd client
npm install
cd server
npm install
```
### 3. Setup Database

You need a MongoDB instance to store the contact data. You can either set up a local MongoDB server

## Mongo DB Schema: 

```bash
const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phone: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  job: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('Contact', contactSchema);
```
### 4. Backend Configuration

Change the mongo instance URI in 'server/db.js'

### 5. Run The Application

## Run Frontend
```bash

cd client
npm run dev

```
## Run Backend
```bash

cd server
node index.js

```


