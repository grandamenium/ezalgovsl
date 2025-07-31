# EZAlgo Landing Page

A modern, responsive landing page for EZAlgo - Your Algorithm Learning Platform.

This project is built with Next.js and configured for static export deployment on Render.

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/YOUR_USERNAME/ezalgovsl.git
cd ezalgovsl
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Building for Production

This project is configured for static export. To build:

```bash
npm run build
```

This will generate static files in the `out` directory.

## Deployment on Render

This project is configured to deploy as a static site on Render. The static files are generated in the `out` directory.

### Render Configuration
- **Build Command**: `npm install && npm run build`
- **Publish Directory**: `out`

## Project Structure

```
ezalgo-landing/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   ├── page.tsx
│   └── page.module.css
├── out/                 # Generated static files
├── .gitignore
├── next.config.js       # Next.js configuration with static export
├── package.json
├── README.md
└── tsconfig.json
```

## Technologies Used

- **Next.js 15** - React framework with App Router
- **TypeScript** - Type safety
- **CSS Modules** - Scoped styling
- **Static Export** - For deployment on static hosting

## Features

- 📱 Responsive design
- 🎨 Modern gradient background
- 🚀 Optimized for performance
- 📦 Static export ready
- 🔧 TypeScript support

## License

This project is licensed under the MIT License. 