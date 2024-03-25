# GC_Webathon_2024

 ## Description
This web application serves as a comprehensive solution for managing various aspects of college administration, including student information, faculty management, academic records, and administrative tasks.

## Features 
- User Roles:
    - Admin: Manages overall system functionality, user roles, and permissions.
    - Student: Accesses academic records, course registrations, and communication tools.
    - Faculty: Manages courses, grades, and interacts with students.

- Dashboard: 
    - Personalized dashboard providing an overview of key academic and administrative metrics.

- Modules:
    - Student Management: Manage student information, registrations, and academic progress.
    - Faculty Management: Store faculty details, course assignments, and schedules.
    - Course Management: Create, modify, and manage courses offered by the college.
    - Academic Records: Maintain student grades, transcripts, and attendance records.
    - Communication: Facilitate communication between students, faculty, and administration.

## Technologies Used
MongoDB: Database to store item and user information
Express.js: Backend framework for handling HTTP requests and routing
React.js: Frontend library for building user interfaces
Node.js: JavaScript runtime for server-side logic

## Installation
The application includes two modules (client and server). For local developement, run npm install in client and server both directory which will install all dependencies accordingly. Before running this command please make sure your environment variables are setup accordingly.

## Project Setup
What you need to run this code
Node JS
NPM or Yarn
MongoDB

## How to run this code
Make sure MongoDB is running on your system.
Clone this repository.
Update config.env with your MongoDB URI and Secret Key along with that define the port .
Open command line in the cloned folder,
To install dependencies, run  npm install  , for client and server both directory.
To run the application , run  node app.js  or  nodemon app.js  , for server side.
And run  npm start  , for client side.
Open localhost:3001 in the browser

## Env Variables
Inside config.env

PORT = 3000
MONGO_URI = your mongodb uri


JWT_SECRET = ''


## Install Dependencies (frontend & backend)

### Open  client
``` npm install```
### Open  Server
``` npm install ```
### Run Client
``` npm start ```
### Run Server
``` node server.js ```
