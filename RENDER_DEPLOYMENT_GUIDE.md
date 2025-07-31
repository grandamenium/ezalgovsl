# Render Deployment Guide for EZAlgo Landing Page

This guide provides step-by-step instructions for deploying your Next.js static site on Render.

## Prerequisites

✅ **Completed Setup:**
- Next.js project configured for static export
- Static files generated in `/out` directory  
- Git repository initialized
- Code pushed to GitHub repository: `ezalgovsl`

## Step-by-Step Render Configuration

### 1. Create a New Static Site on Render

1. Go to [Render Dashboard](https://render.com/dashboard)
2. Click **"New +"** button
3. Select **"Static Site"**

### 2. Connect Your Repository

1. **Connect Git Repository:**
   - Choose **GitHub** as your Git provider
   - Authorize Render to access your repositories if prompted
   - Search and select **"ezalgovsl"** repository
   - Select the **"main"** branch

### 3. Configure Build Settings

Enter the following configuration settings:

| Setting | Value |
|---------|-------|
| **Name** | `ezalgo-landing` |
| **Build Command** | `npm install && npm run build` |
| **Publish Directory** | `out` |

### 4. Advanced Settings (Optional)

| Setting | Value | Description |
|---------|-------|-------------|
| **Environment** | Production | Standard for live sites |
| **Auto-Deploy** | ✅ Enabled | Automatically deploy on git push |
| **Node Version** | 18+ | Use Node.js 18 or higher |

### 5. Deploy Your Site

1. Click **"Create Static Site"**
2. Render will start the deployment process
3. Wait for the build to complete (typically 2-5 minutes)

## Expected Build Process

Your Render deployment will execute these steps:

```bash
# 1. Clone repository
git clone https://github.com/jamesgoldbach/ezalgovsl.git

# 2. Install dependencies  
npm install

# 3. Build static site
npm run build

# 4. Serve from /out directory
# Static files served via Render's CDN
```

## Build Output Verification

After successful deployment, verify these files are generated:

```
out/
├── _next/              # Next.js assets
├── 404/               # 404 page directory
├── 404.html           # Custom 404 page
├── index.html         # Main landing page
└── index.txt          # Site metadata
```

## Environment Variables (If Needed)

If your project requires environment variables:

1. Go to your site's **Environment** tab in Render
2. Add variables in the format:
   - Key: `NEXT_PUBLIC_API_URL`
   - Value: `https://api.example.com`

## Custom Domain Setup (Optional)

To use a custom domain:

1. Go to **Settings** tab in your Render dashboard
2. Click **"Add Custom Domain"**
3. Enter your domain (e.g., `ezalgo.com`)
4. Follow DNS configuration instructions

## Troubleshooting

### Common Issues:

1. **Build Fails:**
   - Check Node.js version compatibility
   - Verify `package.json` dependencies
   - Review build logs in Render dashboard

2. **404 Errors:**
   - Ensure `output: 'export'` in `next.config.js`
   - Verify static files in `/out` directory
   - Check trailing slash configuration

3. **CSS/JS Not Loading:**
   - Confirm `images.unoptimized: true` in config
   - Check asset paths in generated HTML

### Debug Commands:

Test your build locally:
```bash
# Build static site
npm run build

# Serve locally (requires serve package)
npx serve out
```

## Site URLs

After successful deployment:

- **Live Site:** `https://ezalgo-landing.onrender.com`
- **Admin Dashboard:** Available in Render dashboard
- **Build Logs:** Available under "Events" tab

## Updating Your Site

To update your deployed site:

1. Make changes to your code
2. Commit and push to the `main` branch:
   ```bash
   git add .
   git commit -m "Update landing page"
   git push origin main
   ```
3. Render will automatically rebuild and deploy

## Performance Optimizations

Your site includes:

- ✅ Static export for fast loading
- ✅ Next.js optimization (code splitting, etc.)
- ✅ CDN delivery via Render
- ✅ Gzip compression
- ✅ HTTP/2 support

## Support

- **Render Documentation:** [render.com/docs](https://render.com/docs)
- **Next.js Static Export:** [nextjs.org/docs/guides/static-exports](https://nextjs.org/docs/guides/static-exports)
- **Repository Issues:** Create an issue in the GitHub repository

---

**Last Updated:** $(date)
**Deployment Status:** Ready for deployment ✅ 