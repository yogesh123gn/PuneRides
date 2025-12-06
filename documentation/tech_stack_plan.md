# Tech Stack Plan: Bike Rental MVP

To achieve the "Attractive" and "User-Friendly" goals while keeping the MVP simple, I propose a modern **Component-Based Stack**. This allows for smoother animations, instant filtering, and a premium feel compared to a basic static HTML site.

## 1. The Core Framework: **Vite + React**
*   **Why?**:
    *   **Speed**: Vite is instant server start.
    *   **Components**: We can build a reusable `<BikeCard />` component.
    *   **Scalability**: If you decide to add a real backend later (Node/Python), React handles the frontend state perfectly.
    *   **Type Safety**: TypeScript ensures we don't have buggy code.

## 2. Styling Engine: **Tailwind CSS**
*   **Why?**:
    *   **Premium Design**: Easy to implement "Glassmorphism", complex gradients, and dark mode.
    *   **Responsive**: Mobile-first design is built-in (critical for users on phones).
    *   **Consistency**: Ensures spacing and colors are uniform across the site.

## 3. "The Wow Factor" (Animations): **Framer Motion**
*   **Why?**:
    *   Standard CSS transitions are okay, but Framer Motion gives *physics-based* animations.
    *   **Use Cases**:
        *   Bike cards sliding in when the page loads.
        *   Smooth cross-fading when filtering between "Scooters" and "Motorcycles".
        *   Button hover effects that feel "bouncy" and alive.

## 4. Icons & Assets
*   **Icons**: `Lucide React` (Clean, modern, rounded SVG icons).
*   **Fonts**: `Inter` or `Plus Jakarta Sans` (Google Fonts) for that clean, tech-startup look.

## 5. Deployment
*   **Platform**: **Netlify** or **Vercel**.
*   **Cost**: ₹0 (Free Tier).
*   **Features**: Automatic HTTPS, Global CDN (fast for Pune users).

---

## Proposed Project Structure

```text
/src
  /components
    Navbar.tsx       # Glassmorphism header
    Hero.tsx         # Big impact landing integration
    BikeCard.tsx     # The product display
    FilterBar.tsx    # "Scooter | Bike | EV" toggle
    Footer.tsx       # Legal links & Address
  /data
    bikes.ts         # JSON array of your bike inventory
  /pages
    Home.tsx         # The main catalog wrapper
  App.tsx
  main.tsx
```

## Approval Required
Do you agree with using **React + Tailwind + Framer Motion**? 
*   **Option A (Recommended)**: Yes, let's build a modern, premium app.
*   **Option B (Simpler)**: No, stick to plain HTML/CSS (easier to edit if you don't know React, but less "wow").
