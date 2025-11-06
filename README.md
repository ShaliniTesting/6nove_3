# Node.js Express Tutorial Server

A simple tutorial project demonstrating a Node.js server using Express.js with two endpoints.

## Features

- Express.js web framework integration
- Two REST API endpoints:
  - GET `/` - Returns "Hello world"
  - GET `/evening` - Returns "Good evening"

## Prerequisites

- Node.js 18.0.0 or higher
- npm (comes with Node.js)

## Installation

1. Clone this repository
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

## Running the Server

Start the server with:

```bash
npm start
```

The server will start on port 3000 by default. You should see:
```
Server is running on http://localhost:3000
Try these endpoints:
  - http://localhost:3000/ (returns "Hello world")
  - http://localhost:3000/evening (returns "Good evening")
```

To use a different port, set the PORT environment variable:

```bash
PORT=8080 npm start
```

## Testing the Endpoints

### Using a Web Browser

- Open http://localhost:3000 to see "Hello world"
- Open http://localhost:3000/evening to see "Good evening"

### Using cURL

```bash
# Test the root endpoint
curl http://localhost:3000

# Test the evening endpoint
curl http://localhost:3000/evening
```

### Using Postman or Similar Tools

1. Create a new GET request
2. Set the URL to `http://localhost:3000` or `http://localhost:3000/evening`
3. Send the request and view the response

## API Endpoints Documentation

### GET /

Returns a simple greeting message.

**Response:**
- Status Code: 200 OK
- Content-Type: text/html; charset=utf-8
- Body: `Hello world`

**Example:**
```bash
curl http://localhost:3000
# Response: Hello world
```

### GET /evening

Returns an evening greeting message.

**Response:**
- Status Code: 200 OK
- Content-Type: text/html; charset=utf-8
- Body: `Good evening`

**Example:**
```bash
curl http://localhost:3000/evening
# Response: Good evening
```

## Project Structure

```
.
├── server.js          # Main application file with Express server
├── package.json       # Project metadata and dependencies
├── package-lock.json  # Dependency lock file
├── node_modules/      # Installed dependencies (auto-generated)
├── .gitignore        # Git ignore patterns
└── README.md         # This file
```

## Technologies Used

- **Node.js** (v18+) - JavaScript runtime environment
- **Express.js** (v5.1.0) - Fast, unopinionated, minimalist web framework for Node.js

## Learning Resources

- [Node.js Documentation](https://nodejs.org/docs/)
- [Express.js Documentation](https://expressjs.com/)
- [npm Documentation](https://docs.npmjs.com/)

## License

MIT