# 🧖‍♀️ Serenity Wellness & Spa - Online Booking System

Premium SPA center booking template with elegant design, therapist selection, and wellness features.

## ✨ Features

### Client-Facing
- **Elegant SPA Design** - Sage green, lavender & beige color scheme
- **Service Catalog** - Massages, facials, manicure/pedicure, body treatments
- **Therapist Selection** - Choose preferred therapist or "Без предпочитание"
- **Massage Preferences** - Select pressure level (soft/medium/firm)
- **Wellness Tips** - Post-booking aftercare recommendations
- **Real-time Availability** - Smart booking system with conflict prevention
- **Mobile-First Design** - Fully responsive for all devices

### Admin Panel (`/admin`)
- Dashboard with daily/weekly/monthly stats
- Booking management (approve/cancel/reschedule)
- Customer database with visit history
- Revenue tracking and analytics
- Email & Telegram notifications

### Notifications
- **Client:** Email + Telegram confirmation with wellness tips
- **Business:** Instant alerts for new bookings
- **Reminders:** Auto-reminders 24h before appointment

---

## 🚀 Quick Start

### 1. Install Dependencies
```bash
npm install
```

### 2. Configure Your SPA
Edit `config.json`:
```json
{
  "business": {
    "name": "Your SPA Name",
    "phone": "+359XXXXXXXXX",
    "email": "info@yourspa.bg",
    "address": { ... }
  },
  "services": [
    {
      "name": "Swedish Massage",
      "duration": 60,
      "price": 60,
      "description": "..."
    }
  ],
  "booking": {
    "therapists": ["Maria", "Elena", "Svetlana"],
    "massagePressure": ["Soft", "Medium", "Firm"]
  }
}
```

### 3. Set Up Notifications (Optional)

**Telegram:**
```bash
# Get bot token from @BotFather
export TELEGRAM_BOT_TOKEN="your_bot_token"
export TELEGRAM_CHAT_ID="your_chat_id"
```

**Email (Gmail):**
```bash
export EMAIL_USER="yourspa@gmail.com"
export EMAIL_PASS="your_app_password"  # Generate at myaccount.google.com/apppasswords
```

### 4. Run
```bash
npm start
# Visits: http://localhost:4000
```

---

## 📁 File Structure

```
wellness-spa/
├── config.json          # 🎨 Single source of truth - edit this only!
├── server.js            # Express backend with booking logic
├── scheduler.js         # Auto-reminder system
├── seed.js              # Database seeder (optional demo data)
├── public/
│   ├── index.html       # Client booking interface
│   ├── admin.html       # Admin dashboard
│   ├── style.css        # Spa theme styling
│   └── admin-style.css  # Admin panel styling
└── services/
    ├── telegram.js      # Telegram notification handler
    └── email.js         # Email notification handler
```

---

## 🎨 Customization

### Change Colors
Edit `config.json` → `theme`:
```json
{
  "theme": {
    "primaryColor": "#8BA888",       // Sage green
    "secondaryColor": "#C8B8DB",     // Lavender
    "accentColor": "#F5E6D3",        // Warm beige
    "heroImage": "your-image-url"
  }
}
```

### Add/Remove Services
Edit `config.json` → `services`:
```json
{
  "services": [
    {
      "name": "New Treatment",
      "duration": 90,
      "price": 100,
      "description": "...",
      "icon": "🌸",
      "featured": true
    }
  ]
}
```

### Adjust Work Hours
Edit `config.json` → `workHours`:
```json
{
  "workHours": {
    "slots": ["09:00", "09:30", ...],
    "display": [
      { "days": "Пон - Пет", "hours": "09:00 - 20:00" }
    ]
  }
}
```

---

## 📊 Database Schema

**SQLite** (`bookings.db`):

```sql
CREATE TABLE bookings (
  id INTEGER PRIMARY KEY,
  confirmation_code TEXT UNIQUE,
  service TEXT,
  date TEXT,
  time TEXT,
  name TEXT,
  phone TEXT,
  email TEXT,
  therapist TEXT,           -- NEW: Preferred therapist
  massage_pressure TEXT,    -- NEW: Pressure preference
  has_allergies INTEGER,    -- NEW: Allergy flag
  notes TEXT,
  status TEXT DEFAULT 'pending',
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

---

## 🔐 Admin Access

**Default credentials:**
- Username: `admin`
- Password: `spaadmin2026`

⚠️ **Change these in production!** Edit `server.js` line ~450.

---

## 🌍 Deployment

### Railway (Recommended)
```bash
# 1. Install Railway CLI
npm install -g @railway/cli

# 2. Login & init
railway login
railway init

# 3. Set environment variables
railway variables set TELEGRAM_BOT_TOKEN=xxx
railway variables set EMAIL_USER=xxx@gmail.com

# 4. Deploy
railway up
```

### Render
1. Create new Web Service
2. Connect GitHub repo
3. Build: `npm install`
4. Start: `npm start`
5. Add environment variables in dashboard

### VPS (Ubuntu)
```bash
# Install Node.js 18+
curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
sudo apt install -y nodejs

# Clone & setup
git clone https://github.com/yourusername/wellness-spa.git
cd wellness-spa
npm install

# Run with PM2
sudo npm install -g pm2
pm2 start server.js --name wellness-spa
pm2 save
pm2 startup
```

---

## 🛠️ Tech Stack

- **Backend:** Node.js + Express
- **Database:** SQLite (perfect for small-medium businesses)
- **Frontend:** Vanilla JS (no frameworks - fast & simple)
- **Styling:** Custom CSS with glassmorphism effects
- **Notifications:** Nodemailer (email) + Telegram Bot API

---

## 📞 Support & Questions

For setup help or customization requests:
- Email: info@serenityspa.bg
- Telegram: @serenityspa

---

## 📄 License

MIT License - Use freely for your SPA business!

---

**Made with 💚 for wellness professionals**
