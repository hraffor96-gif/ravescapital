# Raves Capital — ravescapital.com

Private investment holding company website built with Next.js 14, TypeScript, and Tailwind CSS.

---

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + inline styles
- **Email**: Resend
- **Hosting**: Vercel
- **Domain**: ravescapital.com (Namecheap)

---

## Local Development

### 1. Install dependencies

```bash
npm install
```

### 2. Set up environment variables

```bash
cp .env.local.example .env.local
```

Then edit `.env.local` and add your Resend API key:
```
RESEND_API_KEY=re_your_key_here
```

Get your key at: https://resend.com/api-keys

### 3. Run dev server

```bash
npm run dev
```

Open http://localhost:3000

---

## Deploy to Vercel

### Step 1 — Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit — Raves Capital website"
git remote add origin https://github.com/YOUR_USERNAME/ravescapital.git
git push -u origin main
```

### Step 2 — Import in Vercel

1. Go to https://vercel.com/new
2. Import your GitHub repo
3. In **Environment Variables**, add:
   - `RESEND_API_KEY` → your Resend key

### Step 3 — Connect domain (Namecheap → Vercel)

1. In Vercel: go to your project → Settings → Domains → Add `ravescapital.com`
2. Vercel will show you DNS records to add
3. In Namecheap: go to your domain → Advanced DNS → add the records Vercel shows:
   - Type `A`, Host `@`, Value `76.76.21.21`
   - Type `CNAME`, Host `www`, Value `cname.vercel-dns.com`
4. Wait 5–30 minutes for DNS propagation

---

## Contact Form Setup (Resend)

1. Create account at https://resend.com
2. Go to Domains → Add domain → `ravescapital.com`
3. Add the DNS records Resend shows in Namecheap
4. Get API key from https://resend.com/api-keys
5. Add to Vercel env vars: `RESEND_API_KEY`

The form sends emails to `hraffor96@gmail.com`. To change this, edit:
`app/api/contact/route.ts` → line with `to: ["hraffor96@gmail.com"]`

---

## Project Structure

```
ravescapital/
├── app/
│   ├── globals.css          # Global styles + CSS variables
│   ├── layout.tsx           # Root layout + SEO metadata
│   ├── page.tsx             # Main page (assembles all sections)
│   └── api/
│       └── contact/
│           └── route.ts     # Contact form API (Resend)
├── components/
│   ├── Navbar.tsx           # Fixed nav with mobile menu
│   ├── Hero.tsx             # Hero section
│   ├── About.tsx            # About + pillars
│   ├── Focus.tsx            # Investment focus 3x2 grid
│   ├── Philosophy.tsx       # Investment principles
│   ├── Contact.tsx          # Contact form
│   └── Footer.tsx           # Footer
├── .env.local.example       # Env vars template
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```
