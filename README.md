# 🌿 Verdent Vibe

**A Gardening Community & Resource Hub**

---

## 🔗 Live Links

* **Client Live Site:** [https://verbent-vibe.surge.sh/](https://verbent-vibe.surge.sh/)
* **Server Live URL:** [https://b11a10-server-side-iam-freak10.vercel.app](https://b11a10-server-side-iam-freak10.vercel.app)

---

## 🧑‍💻 Project Description

Verdent Vibe is a full-stack gardening community platform for enthusiasts to:

* Share and explore garden tips
* Discover active local gardeners
* Join plant-related events
* Engage in sustainable practices like composting, hydroponics, vertical gardens, and more.

---

## 🚀 Features

* 🔐 **Authentication:** Email/password and Google-based login & registration using Firebase
* 🌱 **CRUD:** Add, view, update, and delete garden tips (with public/private options)
* 📚 **Browse Tips:** Table view of tips with filtering based on difficulty
* 🧑‍🌾 **Explore Gardeners:** View all local gardeners and their shared tips
* 🌍 **Trending Tips:** Highlights top 6 liked gardening tips
* 💡 **Dark/Light Theme Toggle:** Switch themes from the navbar
* 🧠 **Like System:** Like individual tips and update count in the database
* 📸 **Dynamic Banner:** Event-based slider with images, CTA, and animations
* 🔎 **Private Routing:** Secure pages with reload persistence
* 📞 **Contact Info + Social Media:** Available in the footer section

---

## 📱 Responsiveness

* Mobile: ✅
* Desktop: ✅
* Tablet: ✅ (recommended layout supported)

---

## 📦 Tech Stack

* **Frontend:** React, React Router, Tailwind CSS, DaisyUI, React Icons
* **Backend:** Express.js, MongoDB, Firebase Auth, JWT
* **Animations:** React Awesome Reveal
* **Hosting:**

  * Client: Surge
  * Server: Vercel

---

## 🔐 Environment Variables

Please create a `.env` file in the root directory for the following variables (Do NOT push this file):

### Client `.env`

```env
VITE_API_URL=https://your-api-url.com
VITE_FIREBASE_API_KEY=xxxx
VITE_FIREBASE_AUTH_DOMAIN=xxxx
```

### Server `.env`

```env
MONGODB_URI=your_mongo_uri
JWT_SECRET=your_jwt_secret
```

---

## 💾 GitHub Commits Guidelines

### Client:

✅ At least 15 meaningful commits with descriptive messages.

### Server:

✅ Minimum 8 commits including route setup, CRUD operations, auth middleware, etc.

---

## 📋 Pages Overview

* **Home:** Slider, featured gardeners, trending tips, and extra sections
* **Browse Tips:** Public gardening tips in table layout with filtering
* **Tip Details (Private):** Complete view of a selected tip
* **My Tips (Private):** Manage your own garden tips with update/delete options
* **Update Tip (Private):** Pre-filled form to update selected tip
* **Share a Garden Tip (Private):** Submit a new garden tip to the platform
* **Explore Gardeners:** View dynamic gardener profile cards
* **Login/Register:** Firebase auth integrated forms with validation and error handling
* **404 Page:** Custom Not Found Page
* **Loading State:** Spinner displayed during API calls

---

## 📬 Contact Info

* 📧 Email: [support@verdentvibe.com](mailto:support@verdentvibe.com)
* 📱 WhatsApp: +1 (555) 901 2345
* ☎️ Phone: +1 (555) 123 4567
* 📞 Toll-Free: +1 (800) 765 4321
* 🌐 Website: [www.verdentvibe.com](http://www.verdentvibe.com)

---

## 📎 Extras & Challenges Implemented

* [x] Dark/Light Theme Toggle
* [x] Filtering Tips by Difficulty
* [x] Like Button Functionality with DB update
* [x] Private Routes with reload support
* [x] Responsive Design
* [x] Custom Error and Loading Pages
* [x] Dynamic Footer and Social Links

---

Thanks for checking out **Verdent Vibe 🌿**! Happy Gardening!
