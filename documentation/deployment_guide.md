# Deployment Guide for PuneRides 🚀

Since **PuneRides** is built with **React** and **Vite**, it represents a static site that is incredibly easy to deploy. The best platforms for this are **Vercel** and **Netlify**, as they offer seamless integration with GitHub and automatic deployments.

## Option 1: Vercel (Recommended) &nbsp;⚡

Vercel is the creators of Next.js and provides first-class support for frontend frameworks.

1.  **Sign Up/Login**: Go to [vercel.com](https://vercel.com) and sign up using your **GitHub** account.
2.  **Add New Project**:
    *   Click on **"Add New..."** -> **"Project"**.
    *   Select your GitHub repository: `PuneRides`.
    *   Click **"Import"**.
3.  **Configure Project**:
    *   **Framework Preset**: It should automatically detect **Vite**.
    *   **Root Directory**: `.` (default)
    *   **Build Command**: `npm run build` (default)
    *   **Output Directory**: `dist` (default)
    *   **Install Command**: `npm install` (default)
4.  **Deploy**:
    *   Click **"Deploy"**.
    *   Wait about a minute, and your site will be live! 🎉

## Option 2: Netlify &nbsp;🌐

Netlify is another excellent choice for static site hosting.

1.  **Sign Up/Login**: Go to [netlify.com](https://netlify.com) and log in with **GitHub**.
2.  **Add New Site**:
    *   Click **"Add new site"** -> **"Import from existing project"**.
3.  **Connect to GitHub**:
    *   Choose **GitHub** as your specific provider.
    *   Authorize Netlify and select the `PuneRides` repository.
4.  **Build Settings**:
    *   **Base directory**: (leave empty)
    *   **Build command**: `npm run build`
    *   **Publish directory**: `dist`
5.  **Deploy**:
    *   Click **"Deploy Site"**.

## Option 3: GitHub Pages (Manual) &nbsp;🐙

If you prefer to host directly on GitHub:

1.  **Update `vite.config.ts`**:
    You must add your repository name as the base path.
    ```typescript
    export default defineConfig({
      plugins: [react()],
      base: '/PuneRides/', // Add this line matching your repo name
    })
    ```
2.  **Build**: Run `npm run build`.
3.  **Push**: You would need to push the `dist` folder to a `gh-pages` branch. (Using Vercel or Netlify is much easier as it automates this).

---

**After Deployment:**
Any time you push changes to your `main` branch on GitHub, Vercel/Netlify will automatically rebuild and verify your site!
