# GameVault

A small React web app to browse and explore video games, organized in horizontal lists by category. Each game is displayed as a card with its cover, title, year, genre and rating.

## Features

- Responsive header with navigation, search bar and sign-in button
- Horizontal scrollable lists of games
- Game cards with a hover effect that reveals more details
- Fallback cover for games without an image
- Footer with links and social media

## Game lists

All lists are generated from a single data source by filtering it:

- **2026 Games**: games released in 2026
- **RPG Games**: games of the RPG genre
- **Top Ratings**: games with a rating higher than 9
- **Games with two A's in the title**: games whose title contains exactly two letters "a"

## Tech stack

- [React](https://react.dev/)
- [Vite](https://vite.dev/)
- JavaScript (JSX)
- Plain CSS

## Getting started

Make sure you have [Node.js](https://nodejs.org/) installed, then:

```bash
# Install dependencies
npm install

# Start the development server
npm run dev
```

The app will be available at `http://localhost:5173`.

To create a production build:

```bash
npm run build
```

## Project structure

```
src/
├── assets/
│   ├── game-covers/      # Game cover images
│   └── logo.png
├── components/
│   ├── card.jsx / .css   # Single game card
│   ├── footer.jsx / .css # Page footer
│   ├── header.jsx / .css # Fixed top header
│   └── list.jsx / .css   # Horizontal list of cards
├── App.jsx / .css        # Main layout and list filters
└── data.jsx              # Games data
```

## Components

| Component  | Description                                                         |
| ---------- | ------------------------------------------------------------------- |
| `Header`   | Fixed top bar with logo, navigation, search and sign-in button      |
| `GameList` | Receives a `title` and an array of `games` and renders a list       |
| `Card`     | Receives `title`, `year`, `genre`, `rating` and `image` props       |
| `Footer`   | Brand info, link columns and copyright bar                          |

## Data format

Every game in `data.jsx` follows this structure:

```js
{
  id: 1,
  title: 'Game title',
  year: 2026,
  genre: 'RPG',
  rating: 9.2,
  image: coverImage
}
```

If `image` is empty, a default "no cover" image is shown.

## Possible improvements

- Working search bar to filter games by title
- Genre filters
- Game detail page
- Light/dark theme toggle