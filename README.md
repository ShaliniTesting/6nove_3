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
curl http://localhost:3000
# Output: Hello world

curl http://localhost:3000/evening
# Output: Good evening
```

## Project Structure

```
.
├── server.js       # Main application file with Express server and endpoints
├── package.json    # Project dependencies and scripts
└── README.md       # This file
```

## License

MIT