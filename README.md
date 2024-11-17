# SIAS - Strategic International Accounting Services Website

A modern, responsive website for SIAS built with Next.js, TypeScript, and Tailwind CSS.

## Overview

SIAS website is a professional platform designed to showcase accounting, auditing, and advisory services. The website features a clean, modern design with comprehensive information about our services, client testimonials, and easy contact options.

## Features

- 🎨 Modern UI with Tailwind CSS
- 📱 Fully Responsive Design
- ⚡ Fast Performance with Next.js
- 🔍 SEO Optimized
- 📊 Interactive Service Cards
- 💬 Client Testimonials
- 📝 Contact Form

## Tech Stack

- Next.js 14
- TypeScript
- Tailwind CSS
- Lucide React Icons
- React Hooks

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

### Installation

1. Clone the repository

```bash
git clone https://github.com/Akshyakky/sias-website
```

2. Install dependencies

```bash
cd sias-website
npm install
# or
yarn install
```

3. Start the development server

```bash
npm run dev
# or
yarn dev
```

4. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Project Structure

```
sias-website/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── ContactForm.tsx
│   │   ├── HomePage.tsx
│   │   ├── Navbar.tsx
│   │   ├── ServiceCard.tsx
│   │   ├── StatCard.tsx
│   │   └── TestimonialCard.tsx
│   └── styles/
├── public/
├── package.json
└── tailwind.config.js
```

## Development

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

### Key Components

- `HomePage`: Main landing page component
- `ServiceCard`: Displays service information
- `TestimonialCard`: Shows client testimonials
- `ContactForm`: Handles user inquiries
- `Navbar`: Navigation component
- `StatCard`: Displays company statistics

## Building for Production

```bash
npm run build
# or
yarn build
```

## Deployment

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new).

1. Push your code to a Git repository
2. Import your project into Vercel
3. Vercel will detect Next.js automatically and enable the correct settings
4. Your application is deployed!

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3.

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
