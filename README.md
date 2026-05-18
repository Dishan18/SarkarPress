# Sarkar Press — Web Application

**Sarkar Press** is a modern website for a printing company based in **Patashpur, West Bengal, India** — serving government bodies, institutions, and the public for over 25 years.

The site is fully multilingual **(English / हिन्दी / বাংলা)**, beautifully designed, and features a clean user interface that showcases their printing capabilities, equipment, and services. It provides customers with all the necessary details to engage with Sarkar Press, including service lists, payment instructions, and contact details.

### Features

| Feature | Details |
| --- | --- |
| 🖨️ **Services Showcase** | Beautiful presentation of printing services, heavy-duty equipment gallery, and prominent client logos. |
| 🌐 **Multilingual UI** | Built-in language switcher in the navbar supporting English, Hindi, and Bengali translations. |
| 📱 **Responsive Design** | Custom Vanilla CSS design system ensuring a perfect layout across all mobile, tablet, and desktop devices. |
| 💳 **Payments Page** | Clear UPI, bank transfer, and cash instructions to help customers complete their transactions easily. |
| 📞 **About & Contact** | Comprehensive company history, contact details, map location, and a rich photo gallery. |

---

## Tech Stack

| Layer | Technology |
| --- | --- |
| **Framework** | Next.js 14 (App Router) |
| **Language** | TypeScript |
| **Styling** | Vanilla CSS (Custom Design System & Utilities) |
| **Hosting** | Vercel |
| **Fonts** | Inter, Noto Sans Bengali, Noto Sans Devanagari, Archivo Black (Google Fonts) |

---

## Local Development

Follow these steps to run the website locally on your machine:

```bash
# 1. Clone the repository
git clone <your-repo-url>
cd sarkarpress-web

# 2. Install dependencies
npm install

# 3. Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

---

## Project Structure

A quick overview of the essential directories and files in this project:

```
sarkarpress-web/
├── public/                     # Static assets (images, logos, icons)
├── src/
│   ├── app/                    # Next.js App Router pages and layouts
│   │   ├── layout.tsx          # Root layout (Navbar + Footer wrapper)
│   │   ├── page.tsx            # Homepage
│   │   ├── about/page.tsx      # About page
│   │   ├── orders/page.tsx     # Order instruction page
│   │   └── payments/page.tsx   # Payment info page
│   ├── components/             # Reusable React components
│   │   ├── Navbar.tsx          # Sticky navbar with 3-language dropdown
│   │   ├── Footer.tsx          # Footer with map, links, contact
│   │   └── AnimatedStat.tsx    # Animated number counter component
│   ├── context/                # React Context providers
│   │   ├── TranslationContext.tsx  # Language state management (en/hi/bn)
│   │   └── ThemeContext.tsx    # Theme state management
│   ├── styles/                 # Global styles and design system
│   │   └── globals.css         # Full custom CSS design system
│   └── translations/           # Localization dictionaries
│       ├── en.ts               # English strings
│       ├── hi.ts               # Hindi strings
│       └── bn.ts               # Bengali strings
└── package.json                # Project dependencies and scripts
```

---

## Deployment

This project is optimized for deployment on **Vercel**. 

### Quick Deploy

1. Push your code to a GitHub repository.
2. Go to [Vercel](https://vercel.com/new).
3. Import your GitHub repository.
4. Vercel will automatically detect it as a **Next.js** project.
5. Click **Deploy**. Your site will be live in 1-2 minutes!

*(Note: There are no environment variables required to run this static application).*
