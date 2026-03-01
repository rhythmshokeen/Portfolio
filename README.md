# Rhythm Shokeen — Portfolio

A modern, responsive personal portfolio website showcasing my skills, projects, experience, and education as an AI Engineer & Computer Vision Developer.

🔗 **Live:** [rhythmshokeen.github.io/Portfolio](https://rhythmshokeen.github.io/Portfolio)

---

## ✨ Features

- **Typing Animation** — Auto-cycling role titles in the hero section (AI Engineer, CV Developer, ML Engineer, Full-Stack Developer, AI Systems Developer)
- **Scroll Reveal Animations** — Sections and cards animate into view using Intersection Observer
- **Animated Stats Counter** — Numbers count up when scrolled into view
- **Working Contact Form** — Messages are delivered to email via Formspree integration
- **Responsive Design** — Fully optimized for desktop, tablet, and mobile
- **Glassmorphism UI** — Dark theme with blur effects, glowing gradients, and floating particles
- **Smooth Navigation** — Sticky navbar with active section highlighting and hamburger menu on mobile

---

## 🛠️ Tech Stack

| Technology             | Purpose                                                                                                                                                 |
| ---------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **HTML5**              | Semantic page structure with SEO meta tags, accessibility attributes, and organized sections                                                            |
| **CSS3**               | Custom properties (design tokens), CSS Grid & Flexbox layouts, keyframe animations, glassmorphism effects, and full responsive design via media queries |
| **Vanilla JavaScript** | Typing animation, Intersection Observer for scroll reveals and skill bars, stat counter, navbar scroll behavior, contact form submission                |
| **Google Fonts**       | `Inter` for body text (clean readability) and `Space Grotesk` for headings (modern geometric feel)                                                      |
| **Font Awesome 6**     | Icon library for navigation, section headers, skill categories, social links, and buttons                                                               |
| **Formspree**          | Backend-free form handling — contact form submissions are sent directly to email via their API                                                          |

---

## 📁 Project Structure

```
Portfolio/
├── index.html          # Main HTML — all sections (Hero, About, Skills, Projects, Experience, Education, Contact, Footer)
├── styles.css          # Complete styling — design system, component styles, animations, responsive breakpoints
├── script.js           # Interactive features — typing animation, scroll reveals, stat counter, form handling
├── assets/
│   └── images/         # Project screenshots, profile photo, resume PDF
└── README.md
```

---

## 📌 Sections

| Section        | Description                                                                                          |
| -------------- | ---------------------------------------------------------------------------------------------------- |
| **Hero**       | Animated greeting with typing role titles, CTA buttons, and live stats                               |
| **About**      | Profile photo, bio in first person, and highlight cards (Computer Vision, Automation, Deep Learning) |
| **Skills**     | 6 categories — Languages, Frameworks & Libraries, AI & ML, Databases, Cloud & DevOps, Tools          |
| **Projects**   | Featured work with descriptions, tech tags, and links to GitHub/demos                                |
| **Experience** | Timeline of professional roles with dates, companies, and skill tags                                 |
| **Education**  | B.Tech CSE (AI&ML) at Manipal University Jaipur                                                      |
| **Contact**    | Working contact form (Formspree) + email, location, and social links                                 |

---

## 🚀 Getting Started

1. **Clone the repository**

   ```bash
   git clone https://github.com/rhythmshokeen/Portfolio.git
   ```

2. **Open locally**

   ```bash
   open index.html
   ```

   No build tools or dependencies required — it's a pure HTML/CSS/JS site.

3. **Contact form setup** (if forking)
   - Create a free form at [formspree.io](https://formspree.io)
   - Replace the form ID in `index.html` line 820:
     ```html
     action="https://formspree.io/f/YOUR_FORM_ID"
     ```

---

## 🎨 Design Decisions

- **Dark Theme** — Professional, easy on the eyes, and aligns with the tech/AI aesthetic
- **CSS Custom Properties** — All colors, spacing, fonts, and shadows are tokenized in `:root` for easy theming
- **No Frameworks** — Built with vanilla HTML, CSS, and JS for maximum performance, zero dependencies, and full control
- **Intersection Observer** — Used instead of scroll event listeners for performant, battery-friendly scroll animations
- **Formspree over mailto** — Provides a seamless in-page experience without opening the user's email client

---

## 📄 License

This project is open source and available for personal use and reference.

---

Built with ❤️ by **Rhythm Shokeen**
