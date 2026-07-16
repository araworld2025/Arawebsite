# Ara - Interactive Landing Page

A responsive and interactive landing page for **ara**, an African heritage and language learning platform for children.

## Production deployment

Merges to `main` deploy automatically to `https://ara.kids` through
`.github/workflows/deploy-hostinger.yml`. GitHub Actions builds the Vite app and
uploads only the compiled site plus the PHP API to the FTP account rooted at
`public_html`.

The repository requires these GitHub Actions secrets:

- `HOSTINGER_FTP_SERVER`
- `HOSTINGER_FTP_USERNAME`
- `HOSTINGER_FTP_PASSWORD`

Reach and checkout credentials are not GitHub deployment secrets. The site can
be deployed without them; lead submissions return a temporary-unavailable
response until Reach is enabled. When enabling Reach, create
`/home/u589531741/domains/ara.kids/ara-config.php` through Hostinger File
Manager, outside `public_html`, using `api/config.example.php` as the template.
The PHP API loads that file at runtime. Never place the real file or its values
inside the repository or `public_html`.

## 🚀 Quick Start

```bash
# Install dependencies (if needed)
pnpm install

# Start development server
pnpm run dev

# Build for production
pnpm run build
```

## 📁 Project Structure

```
src/
├── app/
│   ├── components/
│   │   ├── EnhancedCarousel.tsx      # Feature-rich carousel
│   │   ├── InteractiveCard.tsx       # Reusable animated cards
│   │   ├── InteractiveLanding.tsx    # Main landing wrapper
│   │   ├── NewsletterForm.tsx        # Interactive email form
│   │   ├── ResponsiveWrapper.tsx     # Responsive breakpoints
│   │   ├── ScrollAnimations.tsx      # Scroll-based animations
│   │   └── index.ts                  # Component exports
│   └── App.tsx                       # Main application
├── imports/
│   ├── Frame13575.tsx                # Figma-imported design
│   └── svg-uuug8p9ru3.ts            # SVG path definitions
└── styles/
    ├── fonts.css                     # Font imports
    └── theme.css                     # Custom theme & animations
```

## ✨ Features

### Interactive Elements
- ✅ Smooth scroll animations with progress bar
- ✅ Parallax background effects
- ✅ Hover animations on cards and buttons
- ✅ Auto-scrolling country carousel (pauses on hover)
- ✅ Interactive newsletter subscription form
- ✅ Scroll-to-top button with smooth animations
- ✅ Loading states and success/error feedback

### Responsive Design
- ✅ Mobile-first approach (< 768px)
- ✅ Tablet optimization (768px - 1023px)
- ✅ Desktop experience (1024px+)
- ✅ Dynamic font sizing and spacing
- ✅ Touch-optimized UI elements
- ✅ Flexible layouts that adapt to screen size

### Accessibility
- ✅ Keyboard navigation support
- ✅ ARIA labels for screen readers
- ✅ Focus indicators on interactive elements
- ✅ Respects reduced motion preferences
- ✅ WCAG compliant color contrast

### Performance
- ✅ Spring physics for smooth animations
- ✅ Intersection Observer for scroll detection
- ✅ GPU-accelerated transforms
- ✅ Optimized re-renders with React hooks
- ✅ Lazy loading considerations

## 🎨 Design System

### Colors
- **Primary Teal**: `#00a193`
- **Orange Accent**: `#fd9e11`
- **Text Dark**: `#2d251d`, `#554739`
- **Text Medium**: `#7f694f`
- **Backgrounds**: `#f8f7f3`, `#ffffff`

### Typography
- **DM Sans**: Headlines and bold text
- **Nunito**: Body text
- **Inter**: UI elements and buttons
- **Montserrat**: Labels and tags

### Animation Timings
- **Fast**: 0.3s (hovers, clicks)
- **Medium**: 0.6-0.8s (scroll reveals)
- **Slow**: 2-4s (ambient animations)

## 🛠️ Key Components

### ResponsiveWrapper
Handles responsive breakpoints and scales content appropriately.

```tsx
import { ResponsiveWrapper } from "./components/ResponsiveWrapper";

<ResponsiveWrapper>
  <YourContent />
</ResponsiveWrapper>
```

### ScrollAnimations
Provides scroll progress bar and animation utilities.

```tsx
import { ScrollAnimations, ScrollReveal } from "./components/ScrollAnimations";

<ScrollAnimations />
<ScrollReveal animation="fade">
  <Content />
</ScrollReveal>
```

### InteractiveCard
Reusable card with hover effects and animations.

```tsx
import { InteractiveCard, TiltCard } from "./components/InteractiveCard";

<InteractiveCard hoverScale={1.05}>
  <CardContent />
</InteractiveCard>
```

### NewsletterForm
Interactive form with validation and feedback.

```tsx
import { NewsletterForm } from "./components/NewsletterForm";

<NewsletterForm />
```

## 🎭 Animation Types

The landing page includes various animation types:

1. **Scroll Reveals**: Elements fade in as you scroll
2. **Parallax**: Background elements move at different speeds
3. **Hover Effects**: Cards lift and glow on hover
4. **Floating**: Gentle up/down motion on decorative elements
5. **Pulse**: Rhythmic scaling for attention
6. **Rotate**: Continuous rotation for playful elements
7. **Spring Physics**: Natural, bouncy transitions

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
  - Single column layouts
  - Reduced font sizes (60% scale)
  - Touch-optimized buttons (44px min)
  - Simplified decorations

- **Tablet**: 768px - 1023px
  - Two-column grids where appropriate
  - Medium font sizes
  - Balanced spacing

- **Desktop**: 1024px+
  - Full multi-column layouts
  - Original font sizes
  - All animations and effects enabled
  - Max width: 1920px

## 🎯 Sections Overview

1. **Hero Section** (`Frame44`)
   - Animated hero image with decorative elements
   - Headline with African heritage messaging
   - CTA button with hover effects
   - Company logos/partners

2. **Country Carousel** (`CountryCourosel`)
   - Auto-scrolling flag display
   - Represents African countries/regions
   - Pause on hover interaction

3. **Mission Section** (`Frame45`)
   - Four value proposition cards
   - Icon-based design
   - Stagger animation on scroll

4. **Product Showcase** (`Frame66`)
   - "My first 500 yoruba Book" highlight
   - 3D-style book display
   - Buy button interaction

5. **Testimonial/Social Proof**
   - Customer quote
   - Circular image
   - Trust indicators

6. **Newsletter Signup** (`Frame50`)
   - Email input with validation
   - Subscribe button with states
   - Success/error messaging

7. **Footer**
   - Logo and branding
   - Navigation links
   - Social media icons

## 💡 Customization

### Modify Animation Speeds
In `/src/app/App.tsx`, adjust the `transition` properties:

```tsx
transition={{
  duration: 20, // Change this
  repeat: Infinity,
  ease: "easeInOut",
}}
```

### Change Colors
Update colors in `/src/styles/theme.css` or inline in components:

```tsx
className="bg-[#00a193]" // Change hex value
```

### Adjust Responsive Breakpoints
Modify `/src/app/components/ResponsiveWrapper.tsx`:

```tsx
setIsMobile(window.innerWidth < 768); // Change breakpoint
```

## 🐛 Troubleshooting

**Animations not working?**
- Check if Motion library is installed: `pnpm add motion`
- Verify browser supports CSS transforms
- Check console for JavaScript errors

**Fonts not loading?**
- Verify Google Fonts CDN is accessible
- Check `/src/styles/fonts.css` imports
- Clear browser cache

**Images not appearing?**
- Ensure Figma assets are properly imported
- Check `figma:asset` import scheme is used correctly
- Verify image paths in import statements

**Responsive layout issues?**
- Check browser developer tools for viewport size
- Verify ResponsiveWrapper is wrapping content
- Test at actual device widths, not just resized browser

## 📚 Technologies Used

- **React 18.3.1**: UI framework
- **Motion (Framer Motion)**: Animation library
- **Tailwind CSS v4**: Utility-first CSS
- **TypeScript**: Type-safe JavaScript
- **Vite 6**: Fast build tool
- **Google Fonts**: Typography

## 🔗 Useful Links

- [Motion Docs](https://motion.dev/)
- [Tailwind v4 Docs](https://tailwindcss.com/docs)
- [React Docs](https://react.dev/)
- [Vite Docs](https://vitejs.dev/)

## 📄 License

This project is part of Figma Make and follows the platform's licensing terms.

---

**Built with ❤️ for African heritage and language learning**

## Product lifecycle and email capture

The advertised product is controlled from `src/config/featuredProduct.ts`. Its `stage` can be `interest`, `preorder`, `available`, or `unavailable`. Both responsive layouts use this configuration. `interest` and `unavailable` open the lead form; `preorder` and `available` use `checkoutUrl`, falling back safely to the form while no checkout is configured.

### Hostinger Reach setup

The application submits to `POST /api/leads.php`. Deploy the `api` directory beside the built site on PHP-enabled Hostinger Web Hosting and configure the server variables in `.env.example`. Never use a `VITE_` prefix for secrets because Vite exposes those values to browsers.

In Hostinger Reach:

1. Connect and authenticate the sending domain, then enable double opt-in.
2. The current public Reach API only documents `email`, `name`, `surname`, `phone`, and `note` for contact creation. The adapter therefore stores lifecycle fields and proposed tags as structured JSON in `note` instead of sending unsupported properties.
3. Create Reach segments/forms for product interest and newsletter consent in the Reach dashboard. When Reach exposes tag/custom-field assignment through its public API, update only `reach_upsert()` to map the structured metadata into those native fields.
4. Test new and repeated submissions with the same address in your Reach account before launch. If your Reach profile requires the profile-scoped endpoint, set `REACH_CONTACTS_URL` accordingly.

The same normalized email is upserted as its intent advances. Newsletter consent is only added when explicitly selected or when the footer newsletter form is submitted.

### Payment webhook contract

Until a checkout provider is selected, `POST /api/payment-webhook.php` accepts an internal event. Sign the raw JSON with HMAC-SHA256 using `PAYMENT_WEBHOOK_SECRET` and send the lowercase hex result as `X-Ara-Signature`.

```json
{
  "eventId": "evt_123",
  "type": "order.paid",
  "order": {
    "orderId": "ARA-10024",
    "email": "parent@example.com",
    "productId": "yoruba-500"
  }
}
```

Supported types are `order.paid`, `order.cancelled`, and `order.refunded`. Once a checkout platform is selected, replace the generic verification and mapping with its official webhook SDK. Only this verified server endpoint may mark a contact as paid.

### Email journeys

- Product interest: double opt-in → product thank-you → development updates → paid-preorder launch.
- Paid preorder: payment confirmation → production/delivery updates → dispatch notification.
- Newsletter: separate welcome and editorial sequence for `newsletter:subscribed` contacts.
