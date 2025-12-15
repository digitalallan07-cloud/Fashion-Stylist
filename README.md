# Fashion Stylist Portfolio

A clean, modern portfolio website for fashion styling showcasing editorial work, luxury campaigns, and contemporary fashion.

## Setup

### 1. Images

This portfolio uses **Sirv CDN** for fast, optimized image delivery. All 24 portfolio images are hosted on Sirv, providing:
- Fast loading times with CDN
- Automatic image optimization
- No large files in the repository

The images are configured in `script.js` and `style.css`.

### 2. Deploy to Vercel

#### Option A: Using Vercel CLI
```bash
# Install Vercel CLI globally
npm install -g vercel

# Deploy from the project directory
vercel

# Follow the prompts to link/create your project
```

#### Option B: Using Vercel Dashboard
1. Go to [vercel.com](https://vercel.com)
2. Click "Add New Project"
3. Import your GitHub repository
4. Vercel will auto-detect the static site
5. Click "Deploy"

#### Option C: Using GitHub Integration
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Automatic deployments on every push to main branch

## Customization

- **Hero Text**: Edit `index.html` lines 20-21
- **About Section**: Edit `index.html` lines 36-40
- **Contact Info**: Edit `index.html` lines 46-47
- **Styling**: Modify `style.css`
- **Colors**: Update CSS variables in `style.css` lines 1-5

## Technologies

- HTML5
- CSS3 (Grid, Flexbox)
- Vanilla JavaScript
- Google Fonts (Playfair Display, Inter)

## License

MIT
