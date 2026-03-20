# Gaurav Nayyar | Developer Portfolio

A sleek, premium, and minimal developer portfolio built with **Next.js** and **React**. Designed to showcase projects, skills, education, and awards with a focus on typography, smooth animations, and a rich dark-themed UI.

![Portfolio Preview](./public/window.svg) <!-- You can update this later with an actual screenshot -->

## 🚀 Key Features

- **Premium Dark UI**: A carefully crafted dark mode design with neon accents and clean, readable typography.
- **Smooth Animations**: Integrated `RevealOnScroll` animations and subtle hover transitions without bloat.
- **Dynamic Projects Showcase**: Instagram-style square cards with perfectly aligned image previews.
- **Interactive Contact Form**: Fully functional and secure contact page powered by **Web3Forms**—no backend SMTP required.
- **Secure File Serving**: Dedicated Next.js API routes used to securely serve resume downloads without exposing the asset directories.
- **Responsive Layouts**: Designed to look and function perfectly from ultra-wide 4K monitors down to mobile devices.

## 🛠 Tech Stack

- **Framework**: [Next.js](https://nextjs.org/) (App Router)
- **Library**: React 18
- **Styling**: Modern Vanilla CSS (with CSS Variables & Grid/Flexbox)
- **Forms**: [Web3Forms](https://web3forms.com/) API

## 📂 Project Structure

- `/app/components/` - Contains all reusable UI sections (`HeroSection`, `ProjectsSection`, `TechnicalArsenal`, `ExperienceSection`, `NavBar`, etc.)
- `/app/api/` - Next.js API Routes (handles secure resume downloads and web form APIs).
- `/app/contact/` - Dedicated standalone contact page layout.
- `/app/Assests/` - Images, certificates, and private static assets (like PDF resumes).
- `/app/globals.css` - The core design system and animation utility classes.

## ⚙️ Getting Started

First, clone the repository and install the dependencies:

```bash
git clone https://github.com/G4uravXDev/G4uravXPortfolio.git
cd G4uravXPortfolio
npm install
```

### Environment Setup
If you want the Contact Page to work, you will need a Web3Forms Access Key.
1. Create a `.env.local` file in the root directory.
2. Visit [Web3Forms](https://web3forms.com/), enter your email, and receive your free key.
3. Add the key to your environment variables:
```env
WEB3FORMS_ACCESS_KEY="your-access-key-here"
```

### Running Locally

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 📝 License

This project is open-source and available under the MIT License. Feel free to fork it, learn from it, and make it your own!
