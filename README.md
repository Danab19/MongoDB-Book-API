# Express MongoDB Book API

This is a simple RESTful API for managing books, built with Express.js and MongoDB (using Mongoose).

## Features

- Add a new book
- Get all books
- Get a book by ID
- Update a book by ID
- Delete a book by ID

## Project Structure

```
.
├── .env
├── .gitignore
├── index.js
├── package.json
├── Models/
│   └── bookModel.js
└── Routes/
    └── bookRoutes.js
```

## Getting Started

### Prerequisites

- Node.js
- MongoDB database (local or Atlas)

### Installation

1. Clone the repository.
2. Run `npm install` to install dependencies.
3. Create a `.env` file with your MongoDB URI and desired port:
    ```
    MONGODB_URI=your_mongodb_connection_string
    PORT=3000
    ```
4. Start the server:
    ```
    node index.js
    ```

## API Endpoints

- `POST /books` - Create a new book
- `GET /books` - Get all books
- `GET /books/:id` - Get a book by ID
- `PUT /books/:id` - Update a book by ID
- `DELETE /books/:id` - Delete a book by ID
