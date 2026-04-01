# 💬 Real-Time Chat Application

A full-stack **Real-Time Chat Application** that enables users to communicate instantly with secure authentication (Login & Logout). Built using modern web technologies, this project demonstrates real-time communication, user management, and responsive UI design.

---

## 🚀 Features

* 🔐 User Authentication (Register, Login, Logout)
* 💬 Real-time messaging (instant chat updates)
* 🟢 Online/Offline user status
* 📡 WebSocket / Socket-based communication
* 📱 Responsive UI (mobile + desktop)
* 🔒 Secure password handling (encryption)
* 🧑‍🤝‍🧑 Multiple users chat support

---

## 🛠️ Tech Stack

### Frontend

* HTML, CSS, JavaScript
* React.js / Bootstrap (if used)

### Backend

* Node.js
* Express.js

### Database

* MongoDB (Mongoose)

### Real-Time Communication

* Socket.IO / WebSockets

---

## 📂 Project Structure

```
/client        → Frontend (UI)
/server        → Backend (API & Socket Server)
/models        → Database Models
/routes        → API Routes
/controllers   → Business Logic
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/real-time-chat-app.git
cd real-time-chat-app
```

### 2️⃣ Install Dependencies

```bash
# For backend
cd server
npm install

# For frontend
cd ../client
npm install
```

### 3️⃣ Configure Environment Variables

Create a `.env` file in the server folder:

```env
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

### 4️⃣ Run the Application

```bash
# Run backend
cd server
npm start

# Run frontend
cd client
npm start
```

---

## 🔑 Authentication Flow

1. User registers with email & password
2. Password is hashed before storing in database
3. User logs in and receives a token (JWT)
4. Token is used for secure communication
5. Logout clears session/token

---

## 💡 How It Works

* Users connect via frontend UI
* Backend establishes a Socket connection
* Messages are emitted and received in real-time
* Database stores chat history (optional)

---

## 📸 Screenshots (Optional)

*Add screenshots of your UI here*

---

## 🧪 Future Improvements

* 📁 File & Image Sharing
* 🔔 Push Notifications
* 👥 Group Chat Feature
* 🌐 Deployment (AWS / Vercel / Render)
* 🧠 AI Chatbot Integration

---

## 🤝 Contributing

Contributions are welcome!
Feel free to fork this repo and submit a pull request.

---

## 📜 License

This project is licensed under the **MIT License**.

---

## 👨‍💻 Author

**Your Name**
GitHub: https://github.com/dry-shy

---

⭐ If you like this project, don't forget to give it a star!
