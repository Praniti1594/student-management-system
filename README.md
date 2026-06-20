# 🎓 Student Management System

A full-stack Student Management System built using **React**, **Node.js (Express.js)**, and **PostgreSQL**.

The application allows administrators to manage student records, upload student photos, perform CRUD operations, search and filter students, view analytics, and maintain activity logs.

---

# 🚀 Features

## Student Management

* Add Student
* View Student List
* Edit Student Details
* Delete Student
* Upload Student Photo
* Responsive UI

## Student Details

Each student record contains:

* Admission Number (Auto Generated)
* Name
* Course
* Year
* Date of Birth
* Email
* Mobile Number
* Gender
* Address
* Student Photo

---

# 🔒 Unique Admission Number

* Automatically generated
* Unique for every student
* Stored in PostgreSQL database

Example:

ADM1781615879793

---

# 🔍 Search & Filters

Students can be filtered by:

* Name Search
* Course
* Year
* Gender

---

# 📊 Analytics Dashboard

Analytics page includes:

* Total Students
* Male Students
* Female Students
* Other Students
* Gender Distribution Pie Chart
* Students Per Course Bar Chart

---

# 📄 Activity Logging

System records:

* Student Created
* Student Updated
* Student Deleted

Activity logs are stored in the database.

---

# 📑 Pagination

Server-side pagination implemented.

Features:

* Page-wise data loading
* Reduced database load
* Faster performance

---

# 🛠️ Technology Stack

## Frontend

* React
* React Router DOM
* Bootstrap
* Axios
* Chart.js
* React ChartJS 2

## Backend

* Node.js
* Express.js
* Multer
* Sequelize ORM

## Database

* PostgreSQL

---

# 📂 Project Structure

student-management-system/

├── frontend/

│ ├── src/

│ ├── components/

│ ├── pages/

│ └── api/

│

├── backend/

│ ├── src/

│ ├── controllers/

│ ├── models/

│ ├── routes/

│ ├── middleware/

│ └── utils/

│

└── README.md

---

# 🔌 API Endpoints

## Get All Students

GET /students

## Get Student By ID

GET /students/:id

## Create Student

POST /students

## Update Student

PUT /students/:id

## Delete Student

DELETE /students/:id

---

# ⚙️ Environment Variables

Create a `.env` file inside backend directory.

Example:

PORT=5000

DB_NAME=studentdb

DB_USER=postgres

DB_PASSWORD=yourpassword

DB_HOST=localhost

DB_PORT=5432

---

# 💻 Installation

## Clone Repository

git clone https://github.com/Praniti1594/student-management-system.git

---

## Backend Setup

cd backend

npm install

npm start

---

## Frontend Setup

cd frontend

npm install

npm run dev

---

# 📸 Screenshots

Add screenshots here:

* Home Page
* Add Student Page
* Student List Page
* Edit Student Page
* Analytics Dashboard

---

# ✨ Bonus Features Implemented

✅ Search Functionality

✅ Filtering

✅ Analytics Dashboard

✅ Activity Logging

✅ Server-Side Pagination

✅ Environment Variables

✅ Responsive Design

---

# 👩‍💻 Developed By

Praniti Kubal

Junior Full Stack Developer Assessment Project
