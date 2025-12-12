# TradeHax Hybrid Landing Page

A modern, fluid, and interactive landing page for TradeHax Hybrid services - combining device repairs, guitar lessons, and stock/crypto insights.

## ✨ Features

### 🎯 Services Showcased
1. **Hardware/Software Repairs** - 300+ devices serviced remotely via TeamViewer
2. **Guitar Lessons** - 25+ years teaching experience with video clips
3. **Stock/Crypto Plays** - Market watchlists and trading insights from ShamrockStocks
4. **Coding Skills** - Interactive demos and GitHub projects

### 🎨 Interactive Design
- **Fluid Animations**: GSAP-powered smooth transitions
- **Parallax Scrolling**: Hero section with depth effect
- **Dynamic Chart**: Interactive crypto/stock visualization with Chart.js
- **Live Calculator**: Real-time quote estimation with keyword matching
- **Hover Effects**: All buttons, links, and cards respond to interaction
- **Gradient Text**: Animated heading effects
- **Input Glow**: Focus effects on form fields

### 🔗 Integrated Links
**linktr.ee/tradehax.net** is prominently featured in:
- Hero section (large purple CTA)
- Skills section (with emojis)
- Footer

This provides access to:
- All affiliate programs
- GitHub profile
- Social media links
- Additional resources

### 🔒 Security
- ✅ SRI (Subresource Integrity) hashes on all CDN scripts
- ✅ CORS configured properly
- ✅ CodeQL security scan passed (0 vulnerabilities)
- ✅ No sensitive data in code

## 🚀 Quick Start

### Local Testing
```bash
# Start a local server
python3 -m http.server 8000

# Visit in browser
open http://localhost:8000/index.html
```

### Customization
See [CUSTOMIZATION.md](CUSTOMIZATION.md) for detailed setup instructions.

**Quick customization checklist:**
1. [ ] Update EmailJS credentials in `script.js`
2. [ ] Replace YouTube video IDs in `index.html`
3. [ ] Add your Coinbase referral code
4. [ ] Add your Patreon username
5. [ ] Update resume PDF URL

All placeholders are marked with `TODO` comments.

## 📁 File Structure

```
├── index.html              # Main landing page (249 lines)
├── script.js               # Interactive features (333 lines)
├── CUSTOMIZATION.md        # Setup guide
├── README_TRADEHAX.md      # This file
└── .gitignore             # Git ignore rules
```

## 🎯 Interactive Features

### Quote Calculator
- Type device or issue (e.g., "iPhone screen", "laptop battery")
- Instant price estimation
- 7 service categories with keyword matching

### Crypto/Stock Chart
- Animated line chart with 3 data series
- Hover for detailed tooltips
- Live data simulation on mouse hover
- Smooth transitions

### Contact Form
- EmailJS integration for submissions
- Validation on all fields
- Success/error feedback

### Navigation
- Smooth scroll to sections
- Sticky header
- Active state indicators
- Animated underlines

## 🎨 Customization Options

### Colors
Easily modify Tailwind classes:
- `bg-gray-900` - Main background
- `bg-blue-600` - Primary buttons
- `bg-green-600` - Secondary CTAs
- `bg-purple-600` - Linktree button

### Animations
Control in `<style>` section of `index.html`:
- `@keyframes float` - Floating CTAs
- `@keyframes pulse` - Button effects
- `@keyframes gradient` - Text animations
- Timing: Change `duration` values

### Chart Data
Update in `script.js` → `initCryptoChart()`:
```javascript
labels: ['Jan', 'Feb', ...],
data: [35000, 38000, ...]
```

## 🔧 Technical Details

### Dependencies (CDN)
- TailwindCSS 2.2.19 (with SRI)
- GSAP 3.12.2 (with SRI)
- Chart.js 4.4.1 (with SRI)
- EmailJS (latest)

### Browser Support
- Modern browsers (Chrome, Firefox, Safari, Edge)
- ES6+ JavaScript features
- CSS Grid & Flexbox

### Performance Optimizations
- requestAnimationFrame for scroll effects
- Intersection Observer for section animations
- Throttled event listeners
- Lazy iframe loading

## 📱 Responsive Design

- Mobile-first approach
- Grid layouts adjust to screen size
- Touch-friendly interactive elements
- Optimized for phones, tablets, and desktops

## 🎓 Learning Resources

This codebase demonstrates:
- Modern JavaScript (ES6+)
- Animation libraries (GSAP, Chart.js)
- API integration (EmailJS)
- Responsive CSS (Tailwind)
- Performance optimization
- Security best practices

## 📞 Support

For issues or questions:
1. Check [CUSTOMIZATION.md](CUSTOMIZATION.md)
2. Review TODO comments in code
3. Visit [linktr.ee/tradehax.net](https://linktr.ee/tradehax.net) for contact options

## 📄 License

© 2025 TradeHax | ShamrockStocks

---

**Ready to customize?** Start with [CUSTOMIZATION.md](CUSTOMIZATION.md) and replace the placeholder values!
