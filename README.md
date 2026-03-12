# CookEasy 🍳

A modern, user-friendly recipe website that makes cooking simple and accessible for everyone. Whether you're a seasoned chef or a beginner in the kitchen, CookEasy provides easy-to-follow recipes organized by meal categories.

## Project Overview

CookEasy is a web application built for CSC 312 that showcases a collection of delicious recipes with a clean, intuitive interface. The site is designed to help users discover and explore various dishes across multiple meal categories.

## Features

- **Homepage**: Eye-catching hero section with featured dishes and quick access to browse recipes
- **Recipe Categories**: Browse recipes organized by meal type:
  - Breakfast
  - Lunch & Dinner
  - Desserts
  - Snacks
- **Individual Recipe Pages**: Detailed recipe cards with ingredients and cooking instructions
- **About Page**: Learn about CookEasy's mission and story
- **Contact Page**: Get in touch with form validation
- **Responsive Design**: Mobile-friendly navigation with hamburger menu
- **Interactive Navigation**: Smooth navigation between pages with dynamic menu toggle

## Project Structure

```
.
├── css/
│   └── style.css                 # Main stylesheet with responsive design
├── html/
│   ├── index.html               # Homepage
│   ├── about.html               # About page
│   ├── catgories.html           # Recipe categories page
│   ├── contact.html             # Contact page
│   └── dishes/                  # Recipe detail pages
│       ├── dish.html            # Recipe template
│       ├── Breakfast/           # Breakfast recipes
│       │   ├── bananaSmoothie.html
│       │   ├── pancakes.html
│       │   └── scrambledEggs.html
│       ├── LunchAndDinner/      # Lunch & dinner recipes
│       │   ├── grilledChicken.html
│       │   ├── honeyRice.html
│       │   └── spagBolognese.html
│       ├── Desserts/            # Dessert recipes
│       │   ├── chocoLavaCake.html
│       │   ├── strawberryCheesecake.html
│       │   └── tiramisu.html
│       └── Snacks/              # Snack recipes
│           ├── avocadoToast.html
│           ├── peanutButterEnergy.html
│           └── spicyChickpeas.html
├── js/
│   ├── navToggle.js             # Mobile navigation functionality
│   └── contact.js               # Contact form validation
├── images/                       # Project images and icons
│   └── icons/
└── README.md                     # Project documentation (this file)
```

## Technologies Used

- **HTML5**: Semantic markup and page structure
- **CSS3**: Responsive design with flexbox and grid layouts
- **JavaScript**: Interactive features including:
  - Mobile menu toggle
  - Form validation
  - User interaction handling

## Key Pages

### Home (`index.html`)
- Hero section with call-to-action
- Featured dishes grid showcasing popular recipes
- Quick navigation to browse all dishes

### Categories (`catgories.html`)
- Complete recipe catalog
- Organized by meal type
- Easy filtering and browsing

### About (`about.html`)
- Company mission and values
- Story and vision
- Why choose CookEasy

### Contact (`contact.html`)
- Contact form with validation
- Form validates:
  - Full name (required)
  - Email address (required, must contain @)
- Error messages with auto-dismiss after 3 seconds

## Features in Detail

### Responsive Design
- Hamburger menu for mobile devices
- Flexible grid layouts that adapt to different screen sizes
- Mobile-first approach

### Form Validation (`contact.js`)
- Full name validation
- Email validation with @ symbol check
- Real-time error feedback
- Form reset on successful submission

### Navigation Toggle (`navToggle.js`)
- Click hamburger icon to toggle mobile menu
- Smooth navigation between pages
- Accessible navigation structure

## Design System

- **Primary Color**: Green (#008000)
- **Accent Color**: Light green (#00800030)
- **Font Family**: Segoe UI, Tahoma, Geneva, Verdana, sans-serif
- **Layout**: Flexbox and CSS Grid for responsive layouts

## Getting Started

1. Open `html/index.html` in your web browser
2. Browse through different recipe categories
3. Click on any recipe card to view details
4. Use the navigation menu to explore different sections
5. Use the hamburger menu on mobile devices for navigation

## Recipe Categories

### Breakfast (3 recipes)
- Classic Pancakes
- Banana Smoothie
- Scrambled Eggs

### Lunch & Dinner (3 recipes)
- Grilled Chicken
- Honey Garlic Salmon with Rice
- Spaghetti Bolognese

### Desserts (3 recipes)
- Classic Tiramisu
- Chocolate Lava Cake
- Strawberry Cheesecake

### Snacks (3 recipes)
- Avocado Toast
- Peanut Butter Energy Balls
- Spicy Roasted Chickpeas

## Browser Compatibility

This website works best on:
- Chrome/Chromium
- Firefox
- Safari
- Edge
- Mobile browsers (iOS Safari, Chrome Mobile)

## Notes

- All images should be placed in the `images/` directory
- Recipe images referenced in the HTML files
- CSS file maintains all styling and responsive breakpoints

## Author

Created for CSC 312 Project

## License

This project is part of a school assignment.

---

**Enjoy cooking with CookEasy!** 🍽️

