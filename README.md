# Resume Portfolio

A modern, responsive single-page resume and portfolio website for Vamshik Patel.

## Features

- Responsive layout (mobile-first)
- Sections: About, Experience, Projects, Skills, Contact
- Clean typography and accessible colors
- Easy to deploy via GitHub Pages
- Contact form integration with Formspree

## Tech Stack

- HTML5, CSS3, vanilla JavaScript
- Optional: add frameworks/libraries you prefer

## Local Development

- Clone the repo:
  - git clone https://github.com/VamshikPatel/resume-portfolio.git
  - cd resume-portfolio
- Open index.html in your browser, or use a simple server:
  - Python 3: python -m http.server 4000
  - Node (optional): npx serve .
- Edit index.html, styles.css, and script.js as needed.

## Contact Form Configuration (Formspree)

The contact form is set up to work with Formspree, a form handling service.

### Setup Instructions:

1. **Sign up for Formspree**:
   - Visit [https://formspree.io/](https://formspree.io/)
   - Create a free account

2. **Create a new form**:
   - After logging in, click "New Form"
   - Enter your email address where you want to receive submissions
   - Copy the form endpoint URL (it will look like `https://formspree.io/f/YOUR_FORM_ID`)

3. **Update the HTML**:
   - Open `index.html`
   - Find the contact form section
   - Replace `https://formspree.io/f/YOUR_FORM_ID` with your actual Formspree endpoint URL
   - Example: `<form action="https://formspree.io/f/xvgpkjbl" method="POST">`

4. **Test the form**:
   - Deploy your site or test locally
   - Submit a test message through the contact form
   - Check your email for the submission
   - Confirm the form in Formspree dashboard if required

### Form Features:
- **Spam Protection**: Formspree includes built-in spam filtering
- **Email Notifications**: Receive email notifications for new submissions
- **Dashboard**: View and manage submissions in the Formspree dashboard
- **Free Tier**: Supports up to 50 submissions per month on the free plan

## Deployment (GitHub Pages)

- Settings → Pages → Source: Deploy from a branch
- Branch: main, Folder: root
- Wait 1–2 minutes for the site to build
- Visit: https://vamshikpatel.github.io/resume-portfolio/

## License

- MIT License. See LICENSE for details.
