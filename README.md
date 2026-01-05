# Saira Portfolio - React Version

A modern, responsive portfolio website built with React, Tailwind CSS, and Framer Motion. This project is a conversion of the original HTML/CSS portfolio into a fully interactive React application with smooth animations and enhanced user experience.

## Features

- ✨ **Smooth Animations**: Powered by Framer Motion for fluid, natural animations
- 🎨 **Modern Design**: Clean, professional portfolio layout
- 📱 **Fully Responsive**: Optimized for all device sizes
- 🌙 **Dark Mode Support**: Toggle between light and dark themes
- ⚡ **Performance Optimized**: Built with React best practices
- 🎯 **Interactive Elements**: Hover effects, transitions, and micro-interactions

## Tech Stack

- **React 18** - Modern React with hooks
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Production-ready motion library
- **Material Icons** - Google Material Design icons
- **Font Awesome** - Icon library for social media and skills

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. Clone the repository or extract the project files
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
```

### Development

Start the development server:

```bash
npm start
```

The application will open in your browser at `http://localhost:3000`.

### Build for Production

Create a production build:

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Header.js          # Navigation header with mobile menu
│   ├── Hero.js            # Hero section with breadcrumb
│   ├── About.js           # About section with profile image
│   ├── Skills.js          # Skills showcase with progress bars
│   ├── Projects.js        # Project portfolio grid
│   ├── Testimonials.js    # Client testimonials
│   └── Footer.js          # Footer with contact info
├── App.js                 # Main application component
├── index.js              # React entry point
└── index.css             # Global styles and Tailwind imports
```

## Customization

### Colors
The color scheme is defined in `tailwind.config.js`:
- Primary: `#FF7A50` (Orange accent)
- Secondary: `#101018` (Dark background)
- Background Dark: `#050508` (Deepest dark)

### Content
Update the content in each component file:
- Personal information in `About.js`
- Skills and percentages in `Skills.js`
- Project details in `Projects.js`
- Testimonials in `Testimonials.js`

### Images
Replace the placeholder images with your own:
- Profile image in `About.js`
- Project images in `Projects.js`
- Testimonial avatars in `Testimonials.js`

## Animation Features

- **Scroll-triggered animations**: Elements animate as they come into view
- **Hover effects**: Interactive feedback on buttons and cards
- **Loading animations**: Smooth entrance animations for all sections
- **Progress bars**: Animated skill level indicators
- **Floating elements**: Subtle background animations

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is for educational and portfolio purposes. Please ensure you have the rights to use any images or content you include.