import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Add FontAwesome CSS
const fontAwesomeLink = document.createElement('link');
fontAwesomeLink.rel = 'stylesheet';
fontAwesomeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css';
document.head.appendChild(fontAwesomeLink);

// Add Inter font from Google Fonts
const interFontLink = document.createElement('link');
interFontLink.rel = 'stylesheet';
interFontLink.href = 'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap';
document.head.appendChild(interFontLink);

// Add title
const titleElement = document.createElement('title');
titleElement.textContent = 'Etsy SEO Tag Generator';
document.head.appendChild(titleElement);

// Add custom CSS for glassmorphism and animations
const styleElement = document.createElement('style');
styleElement.textContent = `
  .glass-card {
    background: rgba(255, 255, 255, 0.25);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.18);
    box-shadow: 0 8px 32px 0 rgba(31, 38, 135, 0.07);
  }
  
  .glass-card-dark {
    background: rgba(31, 41, 55, 0.25);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.08);
    box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.15);
  }
  
  .btn-gradient {
    background: linear-gradient(90deg, #6d28d9, #ec4899);
    transition: all 0.3s ease;
  }
  
  .btn-gradient:hover {
    background: linear-gradient(90deg, #5b21b6, #db2777);
    transform: translateY(-2px);
  }
  
  .tag-card {
    transition: all 0.2s ease;
  }
  
  .tag-card:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.1);
  }
  
  .gradient-bg {
    background: linear-gradient(135deg, #6d28d9 0%, #ec4899 100%);
  }
  
  .input-transition {
    transition: all 0.3s ease;
  }
  
  .input-transition:focus {
    transform: translateY(-2px);
  }
  
  .history-item {
    transition: all 0.2s ease;
  }
  
  .history-item:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
document.head.appendChild(styleElement);

createRoot(document.getElementById("root")!).render(<App />);
