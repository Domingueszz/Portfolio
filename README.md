# Juan's Portfolio

A modern, responsive React TypeScript portfolio website featuring an infinite scroll disciplines grid, smooth navigation, and beautiful design aesthetics.

## Features

- **Fixed Navigation**: Active section highlighting with IntersectionObserver
- **Hero Section**: Animated CSS blob background with highlighted text
- **About Section**: Stats cards with hover effects
- **Disciplines Grid**: Infinite scroll implementation loading 6 cards at a time
- **Responsive Design**: Works seamlessly from 320px to large desktop screens
- **Accessibility**: Semantic HTML5, ARIA labels, keyboard navigation, and AA+ color contrast
- **Smooth Animations**: Hover effects, transitions, and micro-interactions
- **CSS Modules**: Modular styling with global CSS variables

## Technology Stack

- **Frontend**: React 18 + TypeScript
- **Build Tool**: Vite
- **Styling**: CSS Modules + Vanilla CSS
- **Icons**: Custom SVG icons
- **Accessibility**: Full keyboard navigation and screen reader support

## Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be available in the `dist` directory.

## Project Structure

```
src/
├── components/
│   ├── Navbar/
│   │   ├── Navbar.tsx
│   │   └── Navbar.module.css
│   ├── Hero/
│   │   ├── Hero.tsx
│   │   └── Hero.module.css
│   ├── About/
│   │   ├── About.tsx
│   │   ├── About.module.css
│   │   ├── StatCard.tsx
│   │   └── StatCard.module.css
│   ├── Disciplines/
│   │   ├── Disciplines.tsx
│   │   ├── Disciplines.module.css
│   │   ├── DisciplineCard.tsx
│   │   ├── DisciplineCard.module.css
│   │   ├── LoadingSpinner.tsx
│   │   └── LoadingSpinner.module.css
│   └── Footer/
│       ├── Footer.tsx
│       └── Footer.module.css
├── styles/
│   └── globals.css
├── App.tsx
└── main.tsx
```

## Key Features Implementation

### Infinite Scroll
- Uses IntersectionObserver to detect when user reaches the bottom
- Loads 6 cards per batch with simulated API delay
- Stops at 36 total cards with end message
- Includes loading spinner feedback

### Active Navigation
- IntersectionObserver tracks which section is currently in view
- Smooth scroll behavior with offset for fixed navbar
- Visual active state with blue underline

### Responsive Grid
- CSS Grid with breakpoints:
  - Mobile: 1 column
  - Tablet: 2 columns  
  - Desktop: 3 columns

### Accessibility
- Semantic HTML5 structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Color contrast ratio AA+ compliance
- Screen reader friendly

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Performance

- Lazy loading images
- Optimized CSS with minimal bundle size
- Efficient re-renders with React hooks
- Smooth 60fps animations

## Customization

All design tokens are defined in `src/styles/globals.css` as CSS custom properties:
- Colors
- Spacing
- Typography
- Shadows
- Border radius
- Transitions

You can easily customize the entire theme by modifying these variables.

## License

This project is for portfolio purposes. All rights reserved."# Portfolio" 
