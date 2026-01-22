# BookStreet

A modern book store web application built with React that allows users to browse, search, and explore books fetched from the Open Library API.

## Description

BookStreet is a responsive e-commerce style book catalog application. It provides users with a clean interface to discover fiction books, view book details including author, category, price, and ratings. The application features user authentication, theme toggling (light/dark mode), and real-time search functionality.

## Technologies Used

- **React 19** - Frontend JavaScript library
- **Bootstrap 5** - CSS framework for responsive design
- **Bootstrap Icons** - Icon library
- **Context API** - State management (Auth, Search, Theme, Notification)
- **Open Library API** - External API for fetching book data
- **Create React App** - Project bootstrapping and build tooling

## Project Structure

```
bookstreet/
├── public/
│   └── index.html
├── src/
│   ├── api/
│   │   └── bookService.js       # API calls to Open Library
│   ├── components/
│   │   ├── BookCard.jsx         # Individual book card component
│   │   ├── BookList.jsx         # Book grid/list container
│   │   └── Search.jsx           # Search input component
│   ├── context/
│   │   ├── AuthContext.jsx      # Authentication state management
│   │   ├── NotificationContext.jsx  # Notification handling
│   │   ├── SearchContext.jsx    # Search term state management
│   │   └── ThmeToggleContext.jsx    # Theme (light/dark) toggle
│   ├── data/
│   │   └── user.js              # Static user data for authentication
│   ├── layouts/
│   │   ├── Footer.jsx           # Footer component
│   │   └── Header.jsx           # Navigation header with auth
│   ├── page/
│   │   ├── Dashboard.jsx        # Main product listing page
│   │   └── Login.jsx            # Login modal/page
│   ├── utils/
│   │   └── composeProviders.jsx # Utility to compose context providers
│   ├── App.js                   # Main application component
│   ├── App.css                  # Global styles
│   ├── index.js                 # Application entry point
│   └── setupTests.js            # Test configuration
├── package.json
└── README.md
```

## Features

- Browse fiction books from Open Library
- Search books by title
- User authentication (login/logout)
- Light/Dark theme toggle
- Responsive design for all devices
- Book cards with cover images, author, price, and ratings


