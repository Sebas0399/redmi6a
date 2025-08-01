# Redmi 6a Development Page

A modern website built with Astro framework for Redmi 6a custom development resources.

## Features

- **Custom ROMs**: Download and installation guides for AospExtended and Pixel Experience
- **GSI ROMs**: Generic System Images support
- **Root Guide**: Rooting instructions and tools
- **TWRP Recovery**: Custom recovery information
- **Responsive Design**: Mobile-first design with responsive navigation

## Technology Stack

- **[Astro](https://astro.build/)**: Modern static site generator
- **HTML/CSS/JavaScript**: Frontend technologies
- **Static hosting ready**: Pre-built static files

## Development

### Prerequisites

- Node.js 18+ 
- npm

### Getting Started

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## Project Structure

```
├── src/
│   ├── layouts/
│   │   └── Layout.astro     # Base layout component
│   ├── pages/
│   │   ├── index.astro      # Homepage
│   │   ├── roms.astro       # Custom ROMs page
│   │   ├── gsi.astro        # GSI ROMs page
│   │   ├── root.astro       # Root guide page
│   │   └── twrp.astro       # TWRP page
│   └── components/          # Reusable components
├── public/                  # Static assets (images, favicons)
├── dist/                    # Built site output
└── astro.config.mjs         # Astro configuration
```

## Features Implemented

- ✅ Converted from static HTML to Astro framework
- ✅ Component-based architecture with shared layout
- ✅ Preserved all original functionality and styling
- ✅ Interactive JavaScript features (Guide buttons, menu toggle)
- ✅ Responsive navigation
- ✅ Static site generation for optimal performance
- ✅ Modern development workflow

## Credits

Original development page creators and ROM developers mentioned in the credits sections.