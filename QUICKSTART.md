# Quick Start Guide

## Running the Project

1. **Navigate to the project directory:**
```bash
cd SICE-nextjs/sice
```

2. **Start the development server:**
```bash
npm run dev
```

3. **Open your browser:**
Visit [http://localhost:3000](http://localhost:3000)

## Available Pages

- **Home**: http://localhost:3000/
- **Enrollment**: http://localhost:3000/enroll
- **Gallery**: http://localhost:3000/gallery
- **About**: http://localhost:3000/about

## Building for Production

```bash
npm run build
npm start
```

## Key Features Implemented

✅ **Modern Design**
- Beautiful gradient backgrounds
- Smooth animations and transitions
- Professional typography with Inter font
- Responsive on all devices

✅ **All Pages Created**
- Home page with image carousel
- Enrollment page with live countdown timer
- Gallery page with lightbox functionality
- About/Facilities page with detailed information

✅ **Spelling Corrections**
- "Galary" → "Gallery"
- "Madical" → "Medical"
- Grammar improvements throughout

✅ **Components**
- Responsive Header with dropdown navigation
- Footer with contact information and social links
- Image Carousel with auto-rotation
- All components are reusable and maintainable

✅ **Technical Stack**
- Next.js 16 (App Router)
- Tailwind CSS 4
- React Icons
- Fully responsive design
- SEO optimized

## Navigation Structure

```
Home (/)
├── About Us (/about)
├── Gallery (/gallery)
├── Enroll Now (/enroll)
└── Contact Us (#contact)
    └── Available on all pages
```

## Troubleshooting

**Port already in use:**
```bash
# Kill the process using port 3000
npx kill-port 3000
# Then run again
npm run dev
```

**Module not found errors:**
```bash
# Reinstall dependencies
rm -rf node_modules package-lock.json
npm install
```

**Images not loading:**
- Ensure images are in `public/images/` directory
- Check browser console for 404 errors
- Images should be named: banner.jpg, banner0.jpg through banner5.jpg

## Next Steps

1. Test all pages and navigation
2. Customize colors in Tailwind configuration if needed
3. Add more content as required
4. Deploy to production (Vercel, Netlify, etc.)

## Support

For questions or issues:
- Check the main README.md
- Contact SICE at 9776633572