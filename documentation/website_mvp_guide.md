# Step-by-Step Guide: Bike Rental Website MVP
**Goal**: Build a simple, high-performance catalog website for "Pune Bike Rentals" (Placeholder Name) where users can view available bikes and book via WhatsApp.

## Phase 1: Preparation & Setup
**Objective**: Set up the project structure and prepare assets.

1.  **Project Initialization**:
    *   Create a project folder: `bike-rental-pune`
    *   Create the file structure:
        ```text
        /bike-rental-pune
        ├── /assets
        │   ├── /images         # Bike photos, logos
        │   └── /icons          # Favicons, UI icons
        ├── /css
        │   └── style.css       # Main stylesheet (Vanilla CSS)
        ├── /js
        │   └── script.js       # Dynamic logic (filtering, WhatsApp link gen)
        ├── index.html          # Homepage
        ├── catalog.html        # Bike Listing Page
        └── contact.html        # Contact/Location Page
        ```

2.  **Asset Gathering**:
    *   **Photos**: Get high-quality images of the 5 required bikes (Activa, Shine, Royal Enfield, etc.).
    *   **Content**: Write descriptions, rental rates (Hourly/Daily), and terms (Deposit amount, ID requirements).

## Phase 2: Design & Development
**Objective**: Build the user interface using HTML5 and modern Vanilla CSS.

### Step 1: Shared Components (Header/Footer)
*   **Header**: Logo, Navigation (Home, Our Fleet, Requirements, Contact).
*   **Footer**: Quick links, Address, Social Media, "Rent a Bike License No." (Important for regulations).

### Step 2: The Homepage (`index.html`)
*   **Hero Section**: High-impact background image with a headline "Explore Pune on Two Wheels" and a "View Bikes" CTA button.
*   **Why Choose Us**: 3 icons showing "Verified Bikes", "Instant Booking", "Affordable Rates".
*   **How it Works**: Simple 3-step visual: Select Bike -> Submit KYC -> Ride.

### Step 3: The Catalog Page (`catalog.html`) - *The Core Feature*
*   **Grid Layout**: Display bikes in a responsive grid card layout.
*   **Bike Card Details**:
    *   Image
    *   Model Name (e.g., "Honda Activa 6G")
    *   Price Badge (e.g., "₹400 / day")
    *   **"Book on WhatsApp" Button**: This is critical.

### Step 4: WhatsApp Integration Logic (`script.js`)
*   Instead of a complex backend, use the WhatsApp API URL Scheme.
*   **Logic**: When a user clicks "Book Now" on a specific bike:
    ```javascript
    function openWhatsApp(bikeName) {
        const phone = "919876543210"; // Your business number
        const text = `Hi, I am interested in renting the *${bikeName}*. Is it available?`;
        const url = `https://wa.me/${phone}?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank');
    }
    ```

### Step 5: The "Legal/Requirements" Section
*   Create a dedicated section or page listing the documents required (part of your legal compliance).
    *   "Bring Original Driving License"
    *   "Aadhaar Card Copy"
    *   "Security Deposit Details"

## Phase 3: Deployment (Free & Fast)
**Objective**: Make the site live for free.

1.  **Netlify / Vercel**:
    *   Create an account on Netlify.com.
    *   Drag and drop your `bike-rental-pune` folder onto their dashboard.
    *   **Result**: You get a live URL (e.g., `pune-bike-rentals.netlify.app`) instantly.

2.  **Google Maps**:
    *   Embed your shop location on the Contact page so users can find you for pickup.

## Phase 4: Marketing Start
*   Share your new link on Instagram/Facebook specific groups (e.g., "Pune Trekkers", "Pune Students").
*   The WhatsApp link ensures you engage with every potential lead personally, allowing you to vet them (KYC) before confirming.

