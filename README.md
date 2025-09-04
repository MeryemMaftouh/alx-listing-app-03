# ALX Listing App

The **ALX Listing App** is a property listing platform inspired by Airbnb.  
It provides a modern, responsive interface where users can browse available listings, view details such as price and location, and interact with reusable UI components.  

This project is built with **Next.js**, **TypeScript**, **TailwindCSS**, and **ESLint**, ensuring a scalable, maintainable, and production-ready codebase.

## ✨ Features
- **Modern stack**: Next.js with TypeScript for type safety and better developer experience.  
- **Responsive design**: TailwindCSS for fast and consistent styling across devices.  
- **Reusable components**: Foundational UI elements like `Card` and `Button`.  
- **Clean structure**: Organized folders for components, interfaces, constants, and assets.  
- **Asset management**: Centralized storage for images and icons under `public/assets`.  

## 📂 Project Structure

```bash
alx-listing-app/
├── pages/                   # Next.js pages (routes)
│   └── index.tsx            # Home page displaying listings
│
├── components/              # Reusable components
│   └── common/              # Shared UI building blocks
│       ├── Card.tsx         # Property card component
│       └── Button.tsx       # Button component
│
├── interfaces/              # TypeScript interfaces
│   └── index.ts             # CardProps, ButtonProps, and future types
│
├── constants/               # Project-wide constants
│   └── index.ts             # Reusable strings, config, or URLs
│
├── public/                  # Publicly served assets
│   └── assets/              # Images, icons, and other static files
│       └── placeholder.jpg
│
├── styles/                  # Global styles
│   └── globals.css          # TailwindCSS imports
│
├── tailwind.config.js       # TailwindCSS configuration
├── postcss.config.mjs       # PostCSS configuration
└── README.md                # Project documentation
```

- **`components/`** → UI building blocks reused across pages.  
- **`interfaces/`** → Centralized TypeScript type definitions for props and data.  
- **`constants/`** → Store reusable values like API endpoints or placeholder strings.  
- **`public/assets/`** → Images and static files accessible at `/assets/...`.  

## 🛠️ Getting Started

### 1. Clone the repository
- git clone https://github.com/MeryemMaftouh/alx-listing-app.git.
- cd alx-listing-app

### 2. Install dependencies
npm install

### 3. Run the development server
npm run dev

Open http://localhost:3000 in your browser to view the app.
