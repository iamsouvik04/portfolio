# ⚡ Quick Start Guide

## Get Your Portfolio Live in 5 Minutes!

This is a simplified guide to get Souvik Majumder's portfolio website deployed quickly.

---

## 📁 What You Have

Your portfolio consists of:
```
portfolio/
├── index.html           # Main website file
├── css/
│   └── style.css       # All styling
├── js/
│   └── script.js       # Interactivity
├── README.md           # Full documentation
├── PREVIEW.md          # Visual guide
├── DEPLOYMENT.md       # Detailed deployment guide
└── QUICKSTART.md       # This file
```

---

## 🚀 Fastest Deployment Method

### GitHub Pages (5 Minutes)

**Step 1**: Create GitHub Account
- Go to [github.com](https://github.com)
- Sign up (if you don't have an account)

**Step 2**: Create New Repository
- Click "New" button
- Name it: `portfolio` or `iamsouvik04.github.io`
- Make it Public
- Click "Create repository"

**Step 3**: Upload Files
- Click "uploading an existing file"
- Drag and drop all your files:
  - index.html
  - css/ folder
  - js/ folder
  - README.md
- Click "Commit changes"

**Step 4**: Enable GitHub Pages
- Go to Settings → Pages
- Source: Select `main` branch
- Folder: `/` (root)
- Click Save

**Step 5**: Access Your Site
- Wait 2-3 minutes
- Your site is live at: `https://YOUR-USERNAME.github.io/portfolio/`
- If you named it `iamsouvik04.github.io`, it will be: `https://iamsouvik04.github.io/`

✅ **Done! Your portfolio is live!**

---

## 🔧 Quick Customization Guide

### Update Contact Information

**In `index.html`, find and update**:

1. **Email** (appears multiple times):
   ```html
   majumdersouvik2004@gmail.com
   ```

2. **Phone**:
   ```html
   +919366859093
   ```

3. **LinkedIn**:
   ```html
   https://www.linkedin.com/in/souvikmajumder11
   ```

4. **GitHub**:
   ```html
   https://github.com/iamsouvik04
   ```

5. **Profile Photo URL**:
   ```html
   https://www.genspark.ai/api/files/s/lmt61pIs
   ```
   (Replace with your actual photo URL if needed)

### Change Colors

**In `css/style.css`, find `:root` section**:
```css
:root {
    --primary-color: #6366f1;      /* Change this for different primary color */
    --secondary-color: #8b5cf6;    /* Change this for different secondary color */
    --accent-color: #ec4899;       /* Change this for different accent color */
}
```

Popular color schemes:
- **Blue Theme**: `#3b82f6, #2563eb, #1d4ed8`
- **Green Theme**: `#10b981, #059669, #047857`
- **Red Theme**: `#ef4444, #dc2626, #b91c1c`
- **Purple Theme**: `#8b5cf6, #7c3aed, #6d28d9`

---

## 📝 Quick Content Updates

### Add New Project

**In `index.html`, find Projects section and add**:
```html
<div class="project-card">
    <div class="project-icon">
        <i class="fas fa-YOUR-ICON"></i>
    </div>
    <div class="project-content">
        <h3>Your Project Name</h3>
        <span class="project-date">Month Year</span>
        <p>Project description here...</p>
        <div class="project-tags">
            <span class="tag">Tech 1</span>
            <span class="tag">Tech 2</span>
        </div>
        <div class="project-links">
            <a href="YOUR-GITHUB-LINK" target="_blank" class="project-link">
                <i class="fab fa-github"></i> View on GitHub
            </a>
        </div>
    </div>
</div>
```

### Add New Achievement

```html
<div class="achievement-card">
    <div class="achievement-icon">
        <i class="fas fa-trophy"></i>
    </div>
    <h3>Achievement Title</h3>
    <p class="achievement-org">Organization Name</p>
    <p class="achievement-date">Month Year</p>
    <p class="achievement-description">
        Description of your achievement...
    </p>
    <span class="achievement-badge">Category</span>
</div>
```

### Update Skills

**In `index.html`, find Skills section**:
```html
<div class="skill-item">
    <div class="skill-info">
        <span class="skill-name">New Skill</span>
        <span class="skill-percentage">85%</span>
    </div>
    <div class="skill-bar">
        <div class="skill-progress" style="width: 85%"></div>
    </div>
</div>
```

Also update in `js/script.js`:
```javascript
// Find skillsChart data and add your skill
labels: ['C/C++', 'Python', 'DSA', 'Your New Skill'],
data: [90, 75, 85, YOUR_PERCENTAGE],
```

---

## 🎨 Common Customizations

### Change Font

**In `index.html`, replace the Google Fonts link**:
```html
<!-- Current font -->
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">

<!-- Replace with your preferred font -->
<link href="https://fonts.googleapis.com/css2?family=YOUR-FONT:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
```

**In `css/style.css`, update**:
```css
body {
    font-family: 'YOUR-FONT', sans-serif;
}
```

### Change Profile Photo

Replace the image URL in two places in `index.html`:
```html
<!-- Hero section -->
<img src="YOUR-NEW-IMAGE-URL" alt="Souvik Majumder">
```

**Where to host images**:
- GitHub repository (upload to `images/` folder)
- Imgur.com (free)
- Cloudinary.com (free tier)

---

## 🧪 Test Your Site

### Before Deploying:
1. **Open `index.html` in browser**
   - Double-click the file
   - Or right-click → Open with → Browser

2. **Check**:
   - All sections visible
   - Navigation works
   - Links open correctly
   - Mobile menu works (resize browser)
   - Contact form opens email

3. **Test on Phone**:
   - Send yourself the file
   - Open in mobile browser
   - Check responsiveness

---

## 📱 Share Your Portfolio

Once deployed, share it:

### LinkedIn
1. Go to your profile
2. Click "Add profile section"
3. Add "Website"
4. Paste your portfolio URL
5. Make a post: "Excited to share my new portfolio! Check it out: [URL]"

### GitHub Profile
1. Go to your GitHub profile
2. Click "Edit profile"
3. Add website URL
4. Pin your portfolio repository

### Resume
Add under contact information:
```
Portfolio: https://your-portfolio-url.com
```

### Email Signature
```
Souvik Majumder
Computer Science Student | NIT Agartala
Portfolio: https://your-portfolio-url.com
LinkedIn: linkedin.com/in/souvikmajumder11
```

---

## 🔄 Update Your Portfolio

### Using GitHub Website:
1. Go to your repository
2. Click on file you want to edit
3. Click pencil icon (Edit)
4. Make changes
5. Scroll down, click "Commit changes"
6. Wait 2-3 minutes
7. Refresh your portfolio URL
8. Changes are live!

### Using Git Command Line:
```bash
# Make changes to your files locally
# Then:
git add .
git commit -m "Updated project section"
git push
```

---

## 🆘 Troubleshooting

### Site Not Loading
- Wait 5 minutes after enabling GitHub Pages
- Clear browser cache (Ctrl+Shift+Delete)
- Try incognito/private window
- Check if URL is correct

### Images Not Showing
- Make sure image URL is public
- Test URL in new browser tab
- Check for typos in URL

### Mobile Menu Not Working
- Check if JavaScript loaded (F12 → Console)
- Test in different browser
- Make sure js/script.js is uploaded

### Styling Looks Wrong
- Verify css/style.css is in correct folder
- Check browser console for errors
- Try hard refresh (Ctrl+F5)

---

## 🎯 Next Steps

### Week 1
- [ ] Deploy portfolio
- [ ] Test on multiple devices
- [ ] Share on LinkedIn
- [ ] Update resume with portfolio link

### Week 2
- [ ] Add Google Analytics
- [ ] Submit to Google Search Console
- [ ] Share with professors/mentors
- [ ] Get feedback

### Month 1
- [ ] Add 2-3 new projects
- [ ] Update achievements section
- [ ] Write a blog post (future feature)
- [ ] Optimize performance

### Ongoing
- [ ] Update every 2-3 months
- [ ] Add new skills as you learn
- [ ] Document new achievements
- [ ] Keep projects current

---

## 📞 Quick Reference Links

**Your Portfolio Files**:
- Main file: `index.html`
- Styling: `css/style.css`
- Scripts: `js/script.js`

**Documentation**:
- Full guide: `README.md`
- Visual preview: `PREVIEW.md`
- Deployment details: `DEPLOYMENT.md`

**Your Links**:
- Email: majumdersouvik2004@gmail.com
- Phone: +91 9366859093
- LinkedIn: linkedin.com/in/souvikmajumder11
- GitHub: github.com/iamsouvik04

**Helpful Resources**:
- GitHub Pages: pages.github.com
- Font Awesome Icons: fontawesome.com/icons
- Google Fonts: fonts.google.com
- Color Picker: coolors.co

---

## ✅ Checklist

**Before Deployment**:
- [ ] All files present
- [ ] Contact info correct
- [ ] Links working
- [ ] Tested locally

**After Deployment**:
- [ ] Site loads correctly
- [ ] Mobile responsive
- [ ] All sections visible
- [ ] No console errors

**Sharing**:
- [ ] Updated LinkedIn
- [ ] Updated GitHub profile
- [ ] Updated resume
- [ ] Shared with network

---

## 🎉 You're All Set!

Your portfolio is now:
- ✅ Professional
- ✅ Responsive
- ✅ Fast
- ✅ Modern
- ✅ Ready to impress!

**Remember**: Keep it updated and share it proudly! 

Your portfolio is your digital handshake with the world. Make it count! 💪

---

**Need more help?** Check the full documentation in `README.md` and `DEPLOYMENT.md`.

**Good luck with your portfolio! 🚀**