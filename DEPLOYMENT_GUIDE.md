# Deployment Guide

## Before Deploying

### Add Your Images

You need to add 5 images to the `stylist-images/` directory. Based on the images you shared:

1. **hero.jpg** - Choose your best hero image (suggested: outdoor fashion or winter fashion image)
2. **image1.jpg** - Outdoor fashion with jewelry
3. **image2.jpg** - Winter fashion with beanie
4. **image3.jpg** - Dining table elegance
5. **image4.jpg** - Desserts with rings
6. **image5.jpg** - Formal evening wear

### How to Add Images

```bash
# Navigate to the images directory
cd stylist-images/

# Copy your images here with the correct names
# Example if your images are in Downloads:
# cp ~/Downloads/your-image-1.jpg hero.jpg
# cp ~/Downloads/your-image-2.jpg image1.jpg
# ... and so on
```

## Deploy to Vercel

### Method 1: Vercel CLI (Recommended)

```bash
# 1. Install Vercel CLI
npm install -g vercel

# 2. Login to Vercel
vercel login

# 3. Deploy from project root
vercel

# 4. For production deployment
vercel --prod
```

### Method 2: GitHub + Vercel Dashboard

1. **Push to GitHub** (already done if using this repo)
   ```bash
   git add .
   git commit -m "Add images and deployment config"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to https://vercel.com/new
   - Click "Import Git Repository"
   - Select your `Fashion-Stylist` repository
   - Click "Deploy"

3. **Configure (if needed)**
   - Framework Preset: Other
   - Root Directory: ./
   - Build Command: (leave empty)
   - Output Directory: (leave empty)

### Method 3: Vercel GitHub App (Continuous Deployment)

1. Install Vercel GitHub App: https://github.com/apps/vercel
2. Grant access to your repository
3. Every push to main will auto-deploy

## Post-Deployment

After deployment, you'll receive a URL like:
- `https://fashion-stylist-xxx.vercel.app`

### Custom Domain (Optional)

1. Go to your project in Vercel dashboard
2. Settings → Domains
3. Add your custom domain
4. Follow DNS configuration instructions

## Troubleshooting

### Images Not Showing

1. Check that images are in `stylist-images/` directory
2. Verify file names match exactly: `hero.jpg`, `image1.jpg`, etc.
3. Ensure images are in JPG format
4. Check browser console for 404 errors

### Deployment Fails

1. Ensure all files are committed to git
2. Check that `vercel.json` is valid JSON
3. Try deploying with `vercel --debug` for more info

## Environment

- No build step required (static HTML/CSS/JS)
- No environment variables needed
- Works with any static hosting (Vercel, Netlify, GitHub Pages, etc.)
