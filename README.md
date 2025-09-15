# Milking Website

A modern, responsive React web application for a dairy/milking service company built with Vite and Tailwind CSS.

## 🚀 Overview

This website serves as a comprehensive platform for a milking service business, featuring multiple pages to showcase services, company information, and customer engagement tools. The site is built with modern web technologies and focuses on clean design and user experience.

## 🛠️ Tech Stack

- **Frontend**: React 19.1.1
- **Build Tool**: Vite
- **Styling**: Tailwind CSS 4.1.13
- **Routing**: React Router DOM
- **Fonts**: Google Fonts (Poppins, Outfit, Caveat)

## 📁 Project Structure

```
milking-website/
├── assets/
│   ├── icons/
│   ├── images/
│   └── videos/
├── components/
│   ├── common/          # Reusable components
│   ├── company/         # Company-specific components
│   ├── explore/         # Explore page components
│   ├── home/           # Homepage components
│   ├── layout/         # Layout components (Navbar, Footer)
│   ├── products/       # Product-related components
│   └── ui/            # UI components (Buttons, etc.)
├── pages/              # Main page components
│   ├── Home.jsx
│   ├── AboutUs.jsx
│   ├── ContactUs.jsx
│   ├── Explore.jsx
│   ├── ProductDetails.jsx
│   └── VisitUs.jsx
└── App.jsx            # Main application component
```

## 🚦 Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd milking-website
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🏗️ Component Architecture

The project follows a modular component structure:

- **UI Components**: Reusable buttons and form elements
- **Layout Components**: Navigation and footer
- **Page Components**: Individual page implementations
- **Feature Components**: Grouped by functionality (home, company, products, etc.)

## 📱 Pages

- **Home**: Main landing page with hero, company info, and testimonials
- **About Us**: Company background, values, and team information
- **Explore**: Product exploration and timeline
- **Products**: Detailed product information and benefits
- **Contact Us**: Contact forms and company information
- **Visit Us**: Location and visit details

## 🤝 Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is private and proprietary.