# Project Setup Guide

## 1️⃣ Clone the Repository
```sh
# Using HTTPS
git clone https://github.com/gokul8943/Exclusive.git



cd your-project
```

---

## 2️⃣ Install Dependencies
### Frontend
```sh
cd frontend  # Navigate to frontend folder
npm install  # OR yarn install
```

### Backend
```sh
cd backend  # Navigate to backend folder
npm install  # OR yarn install
```

---

## 3️⃣ Environment Variables Setup
Create a **.env** file in the `backend` and `frontend` directories.

### Backend (.env)
```env
PORT=5000
MONGO_URI=mongodb://localhost:27017/your-database
JWT_SECRET=your-secret-key
API_URL=http://localhost:5000
```

### Frontend (.env)
```env
VITE_API_URL=http://localhost:5000
```

---

## 4️⃣ Running the Application
### Start the Backend Server
```sh
cd backend
npm run dev  # OR yarn dev
```
**The backend will run on** `http://localhost:5000`

### Start the Frontend Server
```sh
cd frontend
npm run dev  # OR yarn dev
```
**The frontend will run on** `http://localhost:5173`

---

## 5️⃣ Build the Project (Optional for Deployment)
### Build Frontend
```sh
cd frontend
npm run build  # OR yarn build
```

### Build Backend (if applicable)
```sh
cd backend
npm run build  # OR yarn build
```

---

## 6️⃣ API Documentation (if applicable)
If you are using **Swagger** or **Postman**, provide instructions on how to test the API endpoints.

```sh
# Example: Running Swagger Docs
http://localhost:5000/api-docs
```

---

