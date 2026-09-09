# GameFlow

GameFlow is a web application for discovering, tracking and managing video games.

It was developed as the final project of a web development bootcamp and combines data from the IGDB API with a personal game library, progress tracking, ratings and user-managed game information.

The project was built collaboratively using Git, GitHub Projects and an agile workflow with sprint planning and daily stand-ups.

---

## Features

- Search for games using the IGDB API
- Browse game information and cover artwork
- Maintain a personal game library
- Add, edit and delete games
- Track game progress
- Rate games
- View individual game details
- Paginated search results
- Comment functionality
- Responsive layouts for mobile and desktop views

---

## Tech Stack

- Next.js
- React
- JavaScript
- Styled Components
- SWR
- IGDB API
- Local Storage
- Jest
- Git
- GitHub Projects

---

## Architecture

GameFlow is built with Next.js and React using reusable UI components and page-based routing.

The application separates externally retrieved IGDB data from the user's personal game library. API requests are handled through Next.js API routes, while client-side state and locally stored data are used for personal game information.

Core areas of the project include:

- reusable React components
- IGDB API integration
- client-side state management
- persistent local data
- dynamic game detail pages
- search and pagination
- responsive UI design

---

## My Contributions

My work on the project covered both core application functionality and later UI and usability improvements.

### Personal Game Library

I worked on several parts of the personal game management functionality, including:

- implementation and styling of the game list
- editing existing games
- deleting games
- updating game progress
- refactoring the game form for create and edit workflows
- improving rendering and list logic

### IGDB API Integration

I contributed to integrating the external IGDB API into the application.

This included work on:

- fetching and displaying game data
- displaying game cover images from IGDB
- separating API results from the personal game library
- pagination and navigation for API results
- integration of API results into existing application components

### Search

I implemented and refined parts of the game's search functionality, including:

- search result handling
- pagination of search results
- UI adjustments and refactoring following code review

### UI and Responsive Design

A significant part of my later work focused on adapting the application for different screen sizes and improving the overall user interface.

This included:

- implementation of the application header
- desktop layout for the personal game list
- responsive form and layout adjustments
- navigation and menu improvements
- accessibility fixes
- heading hierarchy and naming improvements
- multiple styling and layout refinements

### Collaboration

The application was developed as a team project using:

- Git feature branches
- pull requests
- code reviews
- GitHub Projects
- Kanban-based task management
- sprint planning
- daily stand-ups

---

## Project Workflow

Development was organized around short iterations.

Tasks were tracked using GitHub Projects and implemented on separate feature branches before being merged into the main branch through pull requests.

The workflow included:

1. Sprint Planning
2. Task assignment through the Kanban board
3. Development on feature branches
4. Pull requests and code review
5. Refactoring based on feedback
6. Integration into the main application

---

## Local Development

### Requirements

- Node.js
- npm
- valid IGDB API credentials

Clone the repository:

```bash
git clone https://github.com/DBr-git/game-flow.git
cd game-flow
