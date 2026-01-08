# 🚗 EngineX — Car Modification & Online Booking Platform (Full-Stack Flask)

![Python](https://img.shields.io/badge/Python-3.10-blue?style=for-the-badge)
![Flask](https://img.shields.io/badge/Flask-Framework-black?style=for-the-badge&logo=flask)
![SQLite](https://img.shields.io/badge/SQLite-Database-07405E?style=for-the-badge&logo=sqlite)
![Responsive](https://img.shields.io/badge/UI-Responsive-00c2de?style=for-the-badge)
![Status](https://img.shields.io/badge/Status-Active-green?style=for-the-badge)

EngineX is a full-stack web platform designed to connect **car owners** with **professional car modification workshops**. Users can explore modification services, apply filters, select their car, calculate pricing in real-time, and schedule installation online.  
The project includes **Flask APIs**, **SQLite database**, and **Telegram notifications** for new bookings.

---

## ✨ Key Features

- 🏎 Animated homepage with premium UI
- 🚘 Car selection interface
- 🛠 Modification filtering (by category, brand, search)
- 💰 Real-time total price calculation
- 📅 Online booking with scheduling
- 🔔 Telegram notifications for each new booking
- 🧾 SQLite database with SQLAlchemy ORM
- 🔐 Login / Register / Profile pages
- 📱 Full responsive design with Swiper.js & ScrollReveal

---

## 🏠 Home Page Screenshots

| | | |
|---|---|---|
| ![Home 1](screenshots/home1.png) | ![Home 2](screenshots/home2.png) | ![Home 3](screenshots/home3.png) |

---

## 🚘 Car Selection Page

| |
|---|
| ![Car Selection](screenshots/car-selection.png) |

---

## 🛠 Modification Services Page

| | | |
|---|---|---|
| ![Mod 1](screenshots/mod1.png) | ![Mod 2](screenshots/mod2.png) | ![Mod 3](screenshots/mod3.png) |

---

## 📅 Booking & Scheduling Page

| | | |
|---|---|---|
| ![Book 1](screenshots/book1.png) | ![Book 2](screenshots/book2.png) | ![Book 3](screenshots/book3.png) |

---

## 🧠 System Architecture

Frontend (HTML / CSS / JS)
            ↓
Flask Backend (main.py)
            ↓
REST API endpoints (/api/bookings POST /api/bookings GET)
            ↓
SQLite Database (enginex.db)
            ↓
Telegram Bot (Admin Notifications)

## 📂 Project Structure

EngineX/
│
├── env/                       # Python virtual environment
│   ├── Include/
│   ├── Lib/
│   ├── Scripts/
│   └── pyvenv.cfg
│
├── instance/
│   └── enginex.db             # SQLite Database for bookings storage
│
├── screenshots/               # Project UI screenshots used in README
│
├── static/                    # Static assets (Frontend resources)
│   ├── CSS/
│   ├── Img/
│   └── JS/
│
├── templates/                 # HTML templates for routing
│   ├── index.html
│   ├── car-selection.html
│   ├── modifications.html
│   ├── bookings.html
│
├── main.py                    # Backend app (Flask server file)
├── requirements.txt           # Python dependencies
├── sms_log.txt                # SMS logging file (if using OTP/SMS)
├── bookings_log.txt           # Service bookings log
└── README.md                  # Project documentation

---

## 📡 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| **POST** | `/api/bookings` | Create booking & send Telegram alert |
| **GET** | `/api/bookings` | Retrieve booking list |

### Example POST Body
```json
{
  "customer": {
    "name": " Singh",
    "phone": "9876543210",
    "email": "xyz@gmail.com",
    "date": "2025-01-20",
    "timeSlot": "11:00 AM – 1:00 PM",
    "location": "Delhi"
  },
  "booking": {
    "car": "BMW 3 Series",
    "total": 85000,
    "services": [
      {"name": "ECU Remap", "price": 25000},
      {"name": "Performance Exhaust", "price": 60000}
    ]
  }
}

