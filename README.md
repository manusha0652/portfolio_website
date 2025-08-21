# Manusha's Portfolio Website

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS featuring dynamic email functionality, smooth animations, and a professional design.

## 🚀 Features

- **Responsive Design**: Optimized for all device sizes
- **Dynamic Contact Form**: Emails sent directly to your inbox using EmailJS
- **Smooth Animations**: Modern CSS animations and transitions
- **Project Showcase**: Interactive project cards with image slideshows
- **Certificate Gallery**: Professional certificate display
- **Downloadable CV**: One-click CV download
- **Modern UI/UX**: Glass morphism effects, gradients, and hover animations
- **Fast Performance**: Built with Next.js for optimal loading speeds

## 🛠️ Technologies Used

- **Framework**: Next.js 14
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: Lucide React & React Icons
- **Email Service**: EmailJS
- **Deployment**: Ready for Vercel/Netlify

## 📧 Email Setup Instructions

1. **Create EmailJS Account**:
   - Go to [EmailJS](https://www.emailjs.com/)
   - Sign up for a free account

2. **Configure Email Service**:
   - Add your email service (Gmail, Outlook, etc.)
   - Create an email template with these variables:
     - `{{from_name}}` - Sender's name
     - `{{from_email}}` - Sender's email
     - `{{to_email}}` - Your email (kawshanmanusha7@gmail.com)
     - `{{message}}` - Message content

3. **Get Your Keys**:
   - Service ID from EmailJS dashboard
   - Template ID from your created template
   - Public Key from EmailJS account settings

4. **Update Environment Variables**:
   - Open `.env.local`
   - Replace the placeholder values with your actual keys:
   ```env
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_actual_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_actual_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_actual_public_key
   ```

## 📄 CV Setup

1. **Add Your CV**:
   - Place your CV file in `public/cv/`
   - Name it `Manusha_Ranaweera_CV.pdf`
   - Or update the filename in the download functions

## 🎨 Customization

### Personal Information
- Update personal details in `app/page.tsx`
- Replace profile image in `public/profile.jpg`
- Modify social media links

### Skills & Technologies
- Update skill list in `app/page.tsx`
- Add/replace technology logos in `public/images/`
- Ensure all skill images are uniform size (48x48px recommended)

### Projects
- Modify project data in `app/projects/page.tsx`
- Add project images to `public/images/`
- Update GitHub and live demo URLs

### Certificates
- Update certificate data in `app/certificates/page.tsx`
- Add certificate images to `public/`
- Update credential URLs

## 🚀 Getting Started

1. **Install Dependencies**:
   ```bash
   npm install
   ```

2. **Configure Environment**:
   - Set up EmailJS (see Email Setup above)
   - Add your CV file

3. **Run Development Server**:
   ```bash
   npm run dev
   ```

4. **Open Browser**:
   - Navigate to `http://localhost:3000`

## 📱 Responsive Design

The portfolio is fully responsive with breakpoints for:
- Mobile: 320px+
- Tablet: 768px+
- Desktop: 1024px+
- Large screens: 1280px+

## 🎭 Animations & Effects

- **Fade-in animations** on scroll
- **Hover effects** on all interactive elements
- **Glass morphism** design elements
- **Gradient backgrounds** and text effects
- **Smooth transitions** throughout

## 🔧 Build & Deployment

1. **Build for Production**:
   ```bash
   npm run build
   ```

2. **Deploy to Vercel** (Recommended):
   - Connect your GitHub repository to Vercel
   - Add environment variables in Vercel dashboard
   - Deploy automatically on push

3. **Alternative Deployment**:
   - Netlify, GitHub Pages, or any static hosting service

## 📞 Support

For questions or issues:
- Email: kawshanmanusha7@gmail.com
- GitHub: [manusha0652](https://github.com/manusha0652)

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ by Manusha Ranaweera**
