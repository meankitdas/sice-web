# SICE Computer Institute Website

A modern, responsive website built with Next.js and Tailwind CSS for Shibam Institute of Computer Education (SICE), Rairangpur.

## Features

- ✨ Modern, clean UI/UX design
- 📱 Fully responsive across all devices
- 🎨 Beautiful gradient designs and animations
- 🖼️ Image carousel on homepage
- ⏱️ Countdown timer on enrollment page
- 🖼️ Interactive gallery with lightbox
- 📍 Integrated Google Maps
- 📝 Contact forms on multiple pages
- ♿ Accessibility focused
- 🚀 Fast performance with Next.js
- 🎯 SEO optimized

## Pages

1. **Home Page** (`/`)
   - Hero carousel with multiple images
   - Highlights section explaining why choose SICE
   - Vision statement
   - Statistics showcase
   - Call-to-action sections
   - Contact form

2. **Enrollment Page** (`/enroll`)
   - Special offer announcement
   - Live countdown timer (ends December 15, 2025)
   - Direct enrollment link
   - Location directions to both centers

3. **Gallery Page** (`/gallery`)
   - Grid layout of institute images
   - Click to view full-size images
   - Modal/lightbox functionality
   - Contact section

4. **About Page** (`/about`)
   - Detailed information about SICE
   - Facilities showcase
   - MD's message
   - Contact section

## Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or yarn package manager

### Installation

1. Clone the repository or navigate to the project directory:

```bash
cd SICE-nextjs/sice
```

2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Copy images to the public folder:

You need to copy the following images from the old website to `public/images/`:
- banner.jpg
- banner0.jpg
- banner1.jpg
- banner2.jpg
- banner3.jpg
- banner4.jpg
- banner5.jpg

### Running the Development Server

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the website.

### Building for Production

```bash
npm run build
# or
yarn build
```

### Starting Production Server

```bash
npm start
# or
yarn start
```

## Technology Stack

- **Framework**: Next.js 16.0.1 (App Router)
- **Styling**: Tailwind CSS 4
- **Icons**: React Icons
- **Language**: JavaScript
- **Font**: Inter (Google Fonts)

## Project Structure

```
SICE-nextjs/sice/
├── app/
│   ├── about/
│   │   └── page.js          # About/Facilities page
│   ├── enroll/
│   │   └── page.js          # Enrollment page with countdown
│   ├── gallery/
│   │   └── page.js          # Gallery page
│   ├── favicon.ico
│   ├── globals.css          # Global styles
│   ├── layout.js            # Root layout with Header/Footer
│   └── page.js              # Home page
├── components/
│   ├── Footer.js            # Site footer component
│   ├── Header.js            # Navigation header component
│   └── ImageCarousel.js     # Carousel component
├── public/
│   └── images/              # Image assets (to be added)
├── package.json
└── README.md
```

## Spelling Corrections Made

The following spelling errors from the original website have been corrected:

- "Galary" → "Gallery"
- "Madical Chowk" → "Medical Chowk"
- "progrmming" → "programming"
- Various grammar improvements

## Key Improvements

1. **Modern Design**: Clean, professional design with gradient backgrounds and smooth animations
2. **Better Navigation**: Improved header with dropdown menus and mobile responsiveness
3. **Accessibility**: Proper semantic HTML, ARIA labels, and keyboard navigation
4. **Performance**: Optimized images with Next.js Image component
5. **SEO**: Proper meta tags and structured content
6. **Mobile-First**: Fully responsive design that works on all screen sizes
7. **User Experience**: Smooth transitions, hover effects, and intuitive navigation

## Contact Information

**SICE Computer Institute**
- Address: 1st Floor, Medical Chowk, Rairangpur, Odisha - 757043, India
- Phone: 9776633572
- Facebook: [SICE Rairangpur](https://www.facebook.com/sice.rairangpur)

### Locations:
- [Bisoi Center](https://maps.app.goo.gl/Df4mJm67PqWr3vtP7?g_st=aw)
- [Rairangpur Center](https://www.google.com/maps/place/SICE+COMPUTER+INSTITUTE/@22.268122,86.1745553,17z)

## License

© 2025 Shibam Institute of Computer Education. All rights reserved.

## Support

For any issues or questions, please contact us through the website contact form or call us at 9776633572.
