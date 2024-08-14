# SWAPI Demo SPA

## Project Overview

This project is a Single Page Application (SPA) built with React that displays a product page for Star Wars starships using the [Star Wars API (SWAPI)](https://swapi.dev/documentation). The page features a responsive design, a custom-built pagination system, and a menu with a responsive hamburger layout.

### Key Features

1. **Responsive Design**: The page is fully responsive and adapts to different screen sizes, including mobile devices.
2. **Starship Product Component**: 
   - Displays the name of the starship in an H1 element.
   - Shows relevant attributes of the starship in the body text.
   - Includes a 'BUY' button with functionality to adjust the quantity of items via plus and minus buttons.
   - When the 'BUY' button is clicked, a notification confirms the item has been added to the basket.
3. **Responsive Hamburger Menu**: A collapsible menu for mobile devices, implemented using the Carbon Design System.
4. **Responsive Grid Layout**: The starship product cards are displayed in a responsive grid layout, ensuring optimal viewing across devices.
5. **Custom Pagination**: The app includes a custom-built pagination system that accurately calculates the total page count and allows navigation between pages.

### Bonus Features

- **Carbon Design System**: The project leverages the [Carbon Design System](https://carbondesignsystem.com/) slightly, for consistent and accessible UI components.
- **Test Coverage**: The project includes unit tests implemented with Jest to ensure functionality and reliability.
- **Responsive Menu**: The menu not only adapts to screen sizes but also includes options for other SWAPI categories (for demonstration purposes).

## Installation and Setup

1. **Clone the repository**:
   ```bash
   git clone https://github.com/justjcurtis/swapidemo.git
   cd swapidemo
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```
   or
   ```bash
   yarn install
   ```

3. **Start the development server**:
   ```bash
   npm run dev 
   ```
   or
   ```bash
   yarn dev
   ```
   The app will be running at `http://localhost:5173/swapidemo/`.

4. **Run tests**:
   ```bash
   npm run test
   ```
   or
   ```bash
   yarn test 
   ```

## Technologies Used

- **React**: JavaScript library for building user interfaces.
- **Jest**: Testing framework for JavaScript.
- **Carbon Design System**: A design system by IBM, used for consistent UI components.
- **SWAPI**: The Star Wars API, used to fetch starship data.

## Live Demo

You can view the live demo of the application [here](https://justjcurtis.dev/swapidemo/). 

## Project Structure

```
src/
├── components/          # Reusable React components
├── constants/           # Project constants 
├── contexts/            # Contexts and providers
├── testData/            # Test Data in JSON format
├── utils/               # Utility functions
├── App.css              # Main css file for the app
├── App.jsx              # Main app component
├── index.jsx            # Default css setup
└── Main.jsx             # Setup and wrappers for the app
```

## Future Enhancements

- Improve the basket functionality to allow viewing and managing items.
- Expand the menu to fully integrate other SWAPI categories.
- Add animations and transitions for a more dynamic user experience.

