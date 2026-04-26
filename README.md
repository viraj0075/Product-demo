# 🚀 DataWise - Premium AI Analytics SaaS

DataWise is a high-performance, futuristic SaaS landing page designed for AI-driven analytics and automated business solutions. Built with cutting-edge technologies like **React 19**, **Tailwind CSS v4**, and **GSAP**, it delivers a premium user experience with smooth animations and a sophisticated dark-themed aesthetic.

![DataWise Preview](https://via.placeholder.com/1200x600/0f172a/6366f1?text=DataWise+Premium+SaaS+Platform)

## ✨ Key Features

- **🌀 Ultra-Smooth Scrolling**: Integrated with [Lenis](https://lenis.darkroom.engineering/) for a high-inertia, premium feel.
- **🎭 GSAP Powered Animations**: Sophisticated scroll-triggered animations and micro-interactions.
- **🧪 Modern Tech Stack**: Built with React 19 and the latest Tailwind CSS v4 for maximum performance.
- **📱 Fully Responsive**: Optimized for all devices with a mobile-first design approach.
- **⚡ Performance Optimized**: Lazy-loaded components and optimized assets for near-instant load times.
- **💎 Glassmorphism UI**: High-end visual design with backdrop blurs, gradients, and subtle glows.

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/)
- **Build Tool**: [Vite 8](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [GSAP](https://gsap.com/) & [Framer Motion](https://www.framer.com/motion/)
- **Smooth Scroll**: [Lenis](https://lenis.darkroom.engineering/)
- **Icons**: [React Icons](https://react-icons.github.io/react-icons/)
- **Routing**: [React Router 7](https://reactrouter.com/)

## 🚀 Getting Started

### Prerequisites

- Node.js (Latest LTS recommended)
- npm or yarn

### Installation

1. **Clone the repository**:
   ```bash
   git clone <your-repo-url>
   cd data-wise
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Install Smooth Scroll (Lenis)**:
   ```bash
   npm install lenis
   ```

4. **Run the development server**:
   ```bash
   npm run dev
   ```

## 📂 Project Structure

```text
src/
├── components/         # Reusable UI components
│   ├── SmoothScroll.jsx # Lenis scroll integration
│   ├── Hero.jsx        # Animated hero section
│   ├── Navbar.jsx      # Glassmorphic navigation
│   └── ...             # Other modular sections
├── assets/             # Images, videos, and icons
├── constants/          # Static content and config
├── App.jsx             # Main application & routing
└── main.jsx            # Entry point
```

## 🧪 Optimization Details

- **Suspense & Lazy Loading**: Critical components are loaded instantly, while others are fetched as needed.
- **GSAP Context**: Animations are scoped to components for clean memory management and easy cleanup.
- **High-Inertia Scroll**: Lenis handles the scroll thread separately for buttery-smooth performance even with heavy visuals.

## 📄 License

This project is licensed under the MIT License.

---

Built with ❤️ by the DataWise Team.
