# React Portfolio

A modern, responsive portfolio website built with React and Vite, featuring smooth scroll reveal animations.

## Features

- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, professional design with smooth animations
- **Scroll Reveal Animations**: Elements animate in beautifully as you scroll
- **React Components**: Modular component-based architecture
- **Fast Development**: Built with Vite for rapid development and hot reloading
- **Interactive Elements**: Hover effects and micro-interactions throughout

## Sections

- **Hero**: Introduction with profile image and call-to-action (fade-in animations)
- **About**: Personal information and what I do (staggered reveal animations)
- **Skills**: Technical skills displayed as interactive cards (grid animations with hover effects)
- **Projects**: Showcase of key projects with links (card lift animations)
- **Resume**: Education and work experience (slide-in animations)
- **Contact**: Multiple ways to get in touch (staggered card reveals)

## Technologies Used

- React 18 with Hooks
- Framer Motion for animations
- Vite for build tooling
- CSS3 with modern features (gradients, animations, flexbox, grid)
- Font Awesome icons
- Google Fonts (Inter)

## Animation Features

- **Scroll-triggered animations**: Elements animate when they come into view
- **Staggered reveals**: Multiple elements animate in sequence for visual flow
- **Hover interactions**: Cards and buttons respond to user interaction
- **Smooth transitions**: All animations use easing functions for natural movement
- **Performance optimized**: Animations only trigger once per scroll direction

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open [http://localhost:5173](http://localhost:5173) in your browser

## Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Navbar.jsx      # Animated navigation bar
│   ├── Hero.jsx        # Hero section with entrance animations
│   ├── About.jsx       # About section with scroll reveals
│   ├── Skills.jsx      # Skills grid with staggered animations
│   ├── Projects.jsx    # Projects cards with hover effects
│   ├── Resume.jsx      # Resume section with slide animations
│   ├── Contact.jsx     # Contact cards with reveal animations
│   └── Footer.jsx      # Simple footer
├── App.jsx
├── App.css
├── main.jsx
└── index.css
public/
├── myphoto.jpeg
└── Fathima Nuzrath.pdf.pdf
```

## Customization

- Update personal information in the respective components
- Modify animation timings and effects in the component files
- Add new sections by creating new components and importing them in `App.jsx`
- Replace assets in the `public/` folder
- Adjust animation variants in each component for different effects

## Animation Details

Each component uses Framer Motion's `useInView` hook to detect when elements enter the viewport, triggering beautiful animations:

- **Navbar**: Slides down from top on page load
- **Hero**: Content fades in with staggered timing
- **About**: Cards slide in from left and right with hover effects
- **Skills**: Grid items scale and fade in with hover scaling
- **Projects**: Cards lift on hover with smooth transitions
- **Resume**: Education and experience items slide in from sides
- **Contact**: Contact cards appear with scale and fade effects

## License

This project is open source and available under the [MIT License](LICENSE).