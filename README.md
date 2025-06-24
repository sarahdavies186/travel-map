# Travel Map App

## Overview
This is a React-based travel map application built with Vite, allowing users to track cities they have visited by adding, viewing, and deleting them on an interactive map. It uses React Context and useReducer for state management and integrates the Leaflet library for map functionality.

## Features
- Add and remove cities on the map
- Interactive map with zoom and pan
- Global state management with Context API and useReducer
- Responsive design for desktop and mobile

## Technologies Used
- React (functional components, hooks)
- Vite (fast front-end build tool with Hot Module Replacement)
- React Context API + useReducer
- Leaflet for interactive maps
- CSS Modules for styling

## Getting Started

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn package manager

### Installation & Running

1. Clone the repository:
```bash
git clone https://github.com/sarahdavies186/travel-map.git
```
2. Navigate to the project directory:

```bash
cd travel-map
```

3. Install dependencies:
```bash
npm install
```

4. Open two terminal windows or tabs:

In the first terminal, start the front-end development server:

```bash
npm run dev
```

5. In the second terminal, start the fake backend server (simulating API calls):

```bash
npm run server
```

6. Open your browser and go to http://localhost:3000 to use the app.

## Project Structure

/src/components — React components

/src/context — Context and reducer files for state management

/src/styles — CSS Modules for styling

/src/utils — Utility functions

## Notes
- The backend server is a simple fake/mock server that stores data in a local file, simulating API calls.

- The app focuses on clean, modular front-end architecture.

- State management is centralized using Context API and useReducer to facilitate scalability.

- Leaflet was chosen for its easy-to-use map integration and interactive features.

## Future Improvements
- Add user authentication and persistent cloud data storage

- Implement filtering or categorizing of cities

- Enhance accessibility features and keyboard navigation
