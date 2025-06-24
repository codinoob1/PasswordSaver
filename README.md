# 🔐 Password Manager

A secure, full-stack password management application built with React, Express.js, and MongoDB. Store and manage your passwords locally with database backup functionality.

## ✨ Features

- **🔒 Secure Password Storage** - Store passwords locally with MongoDB backup
- **👁️ Password Visibility Toggle** - Show/hide passwords with eye icon
- **📋 One-Click Copy** - Copy site names, usernames, and passwords to clipboard
- **✅ Form Validation** - Ensures all fields are filled before saving
- **🎨 Modern UI** - Beautiful gradient background with responsive design
- **🔄 Real-time Updates** - Instant display of saved passwords
- **💾 Dual Storage** - Local storage + MongoDB database for reliability

## 🛠️ Tech Stack

**Frontend:**
- React.js
- Tailwind CSS
- Lord Icons
- Clipboard API

**Backend:**
- Node.js
- Express.js
- MongoDB
- CORS enabled

## 🚀 Getting Started

### Prerequisites
- Node.js installed
- MongoDB running locally on port 27017

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/password-manager.git
   cd password-manager
   ```

2. **Install Frontend Dependencies**
   ```bash
   npm install
   ```

3. **Install Backend Dependencies**
   ```bash
   cd backend
   npm install express dotenv mongodb body-parser cors
   ```

4. **Start MongoDB**
   Make sure MongoDB is running on `mongodb://localhost:27017`

5. **Start Backend Server**
   ```bash
   cd backend
   node server.js
   ```

6. **Start Frontend**
   ```bash
   npm run dev
   ```

7. **Open your browser**
   Navigate to `http://localhost:5173`

## 💻 Usage

1. **Add Password**: Fill in website name, username, and password, then click "AddPassword"
2. **View Passwords**: All saved passwords appear in the table below
3. **Copy Data**: Click the copy icon next to any field to copy it to clipboard
4. **Toggle Password**: Click the eye icon to show/hide password while typing

## 📁 Project Structure

```
password-manager/
├── src/
│   ├── components/
│   │   └── Manager.jsx      # Main password manager component
│   └── ...
├── backend/
│   └── server.js           # Express server with MongoDB
├── public/
│   └── img/               # Eye icons for password toggle
└── README.md
```

## 🔧 API Endpoints

- `GET /` - Retrieve all saved passwords
- `POST /` - Save a new password entry  
- `DELETE /` - Delete a password entry

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## ⚠️ Security Note

This is a learning project. For production use, implement proper encryption, authentication, and security measures for password storage.

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

## 🎯 Future Enhancements

- [ ] Password encryption
- [ ] User authentication  
- [ ] Password strength checker
- [ ] Export/Import functionality
- [ ] Search and filter passwords
- [ ] Delete individual passwords

---

**Built with ❤️ using React, Express, and MongoDB**

*Don't forget to star ⭐ this repository if you found it helpful!*
