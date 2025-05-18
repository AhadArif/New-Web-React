## 📝 Backend `backend/README.md`

```markdown
# Backend API - New Web React

This is the backend for the New Web React project. It handles all server-side logic, database operations, and API responses.

## 🔧 Tech Stack

- Node.js
- Express.js
- MySQL (via MySQL Workbench)
- Sequelize / MySQL2 (depending on setup)
- Dotenv for configuration

## ⚙️ Setup Instructions

1. Clone the repo
2. Navigate to the backend folder:

```bash
cd backend
npm install

## 3.Create a .env file:

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=yourdbname
PORT=5000

## To Run server
```bash
npm run dev 

## SQL Command for contact_messages Table in MySQLWorkbench

CREATE DATABASE IF NOT EXISTS contactdb;

USE contactdb;

CREATE TABLE IF NOT EXISTS contact_messages (
  id INT AUTO_INCREMENT PRIMARY KEY,
  name VARCHAR(100) NOT NULL,
  email VARCHAR(100) NOT NULL,
  message TEXT NOT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);


