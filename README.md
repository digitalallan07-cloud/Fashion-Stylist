# Fashion Stylist Portfolio

A clean, modern portfolio website for fashion styling showcasing editorial work, luxury campaigns, and contemporary fashion.

## Setup

### 1. Add Your Images

Add your 5 fashion/jewelry images to the `stylist-images/` directory:
- `hero.jpg` - Main hero background image
- `image1.jpg` through `image5.jpg` - Portfolio gallery images

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
