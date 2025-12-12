# TradeHax Hybrid - Customization Guide

This landing page is ready to use! Follow these steps to customize it with your own information.

## Required Customizations

### 1. EmailJS Setup (for contact form)
1. Sign up at [EmailJS](https://www.emailjs.com/)
2. Get your User ID, Service ID, and Template ID
3. In `script.js`, replace:
   - `YOUR_EMAILJS_USER_ID` with your EmailJS User ID
   - `YOUR_SERVICE_ID` with your EmailJS Service ID
   - `YOUR_TEMPLATE_ID` with your EmailJS Template ID

### 2. YouTube Video IDs (for guitar lessons)
In `index.html`, replace the three instances of `dQw4w9WgXcQ` with your actual YouTube video IDs:
```html
<iframe class="w-full h-64 rounded" src="https://www.youtube.com/embed/YOUR_VIDEO_ID" ...></iframe>
```

### 3. Affiliate Links
- **Coinbase**: Replace `YOUR_REFERRAL` in the Coinbase link with your actual referral code
- **Patreon**: Replace `YOUR_USER` with your Patreon username

### 4. Resume PDF
Update the iframe src to point to your resume:
```html
<iframe src="https://tradehax.net/resume.pdf" ...></iframe>
```
or use a local file:
```html
<iframe src="/MichaelSFlahertyResume.pdf" ...></iframe>
```

## Optional Customizations

### Background Image
The hero section uses a random Unsplash image. You can:
- Replace with your own image URL
- Use a local image: `url('/assets/hero-bg.jpg')`

### Market Data
The crypto chart in `script.js` uses sample data. Replace with:
- Real-time API data (CoinGecko, Alpha Vantage, etc.)
- Your own historical data

### Colors & Styling
The page uses Tailwind CSS utility classes. Customize:
- Colors: Change `bg-blue-600`, `bg-gray-900`, etc.
- Spacing: Adjust `py-16`, `px-8`, etc.
- Typography: Modify `text-5xl`, `font-bold`, etc.

## Testing Locally

Start a local server:
```bash
python3 -m http.server 8000
```

Then visit: `http://localhost:8000/index.html`

## External Dependencies

The page uses these CDN libraries:
- TailwindCSS 2.2.19
- GSAP 3.12.2
- Chart.js 4.4.1
- EmailJS

All are loaded via CDN, so no installation is needed.
