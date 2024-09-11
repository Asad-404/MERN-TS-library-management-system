# MERN Library Management System

## Description
This project is a library management system built using the MERN stack (MongoDB, Express.js, React, Node.js) with TypeScript. It includes features for managing library data and provides a backend API for performing CRUD operations. The system handles user authentication and authorization efficiently, with different user types having specific roles and permissions.

## Features
- **User Authentication**: Secure authentication with JWT.
- **Library Management**: Manage books, authors, and borrowers.
- **User Roles**: Different access levels for Guests, Patrons, Employees, and Admins.
- **CRUD Operations**: Create, Read, Update, and Delete library records.
- **TypeScript**: Strongly typed code for better maintainability and safety.

## Technologies Used
- **Node.js** - Server-side JavaScript runtime
- **Express.js** - Web framework for Node.js
- **MongoDB** - NoSQL database
- **Mongoose** - ODM library for MongoDB
- **TypeScript** - Superset of JavaScript for static typing
- **bcrypt** - For hashing passwords
- **joi** - For data validation
- **cors** - For handling cross-origin requests

## User Types

The system supports the following user types:

- **Guests**: Non-registered users with limited access.
- **Patrons**: Registered users who can borrow books and manage their profiles.
- **Employees**: Staff members with access to manage library operations and patron interactions.
- **Admins**: Users with full access to all system functionalities, including user management.

### User Attributes

Each user has the following attributes:

- **id**: Unique identifier for the user.
- **type**: User type (PATRON, EMPLOYEE, ADMIN).
- **firstName**: User's first name.
- **lastName**: User's last name.
- **email**: User's email address.
- **password**: User's password (hashed).

## User Capabilities

### All Users
All users should be able to:
- View the homepage
- View the catalog overview
- View the catalog search results

### Patrons
Patrons should be able to:
- Register a new account
- Log into their account
- Register for a library card
- Have books loaned to them
- Return books loaned to them
- View their profile
- Update their profile
- View the loan records on their account

### Employees
Employees should be able to:
- Log into their work account
- Check books out to patrons
- Check books in from patrons
- View books loan history
- View patrons' profiles and loan history

## Main Entity and attributes

### Books
Each book should have the following attributes:
- **id**: Unique identifier for the book.
- **barcode**: Barcode for tracking.
- **records**: Record details.
- **cover**: Cover image URL or data.
- **title**: Title of the book.
- **author(s)**: Author(s) of the book.
- **subjects**: Subjects or categories the book belongs to.
- **publicationDate**: Date of publication.
- **publisher**: Publisher of the book.
- **pages**: Number of pages.
- **genre**: Genre of the book.

### Loan Record
Each loan record should have the following attributes:
- **id**: Unique identifier for the loan record.
- **status**: Current status of the loan (e.g., pending, completed).
- **loanDate**: Date when the book was loaned out.
- **dueDate**: Due date for the book return.
- **returnDate**: Actual return date of the book.
- **patron**: The patron who borrowed the book.
- **employeeOut**: The employee who checked out the book.
- **employeeIn**: The employee who checked in the book (if applicable).
- **item**: The book or item that was loaned.

### Library Card
Each library card should have the following attributes:
- **id**: Unique identifier for the library card.
- **patron**: The patron associated with the library card.

## Installation

To run this project locally, follow these steps:

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/MERN-TS-library-management-system.git
