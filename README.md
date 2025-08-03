# 📦 Subscription & Membership Management API

A secure REST API for managing **plans, subscriptions, and membership** with integration of a **dummy payment gateway** — built with Node.js, Express, and MongoDB.

---

## 🚀 Features

- 🔐 User authentication (JWT-based)
- 📦 Plan creation, updating, deletion
- 📋 Subscriptions linked to plans and users
- 💳 Dummy payment gateway simulation
- ✅ Protected routes for authorized access
- 🛡️ Secured with bcrypt, helmet, and CORS

---

## 📁 Tech Stack

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- bcrypt.js (password hashing)
- dotenv, helmet, cors, morgan

---

## 🔐 Authentication

All protected routes require a valid JWT in the `Authorization` header:

---

## 🧪 API Endpoints

### 🔹 Auth

| Method | Endpoint             | Description             |
| ------ | -------------------- | ----------------------- |
| POST   | `/api/auth/register` | Register new user       |
| POST   | `/api/auth/login`    | Login and receive token |

### 🔹 Plan Management

| Method | Endpoint         | Description        |
| ------ | ---------------- | ------------------ |
| POST   | `/api/plans`     | Create a new plan  |
| GET    | `/api/plans`     | Get all plans      |
| PUT    | `/api/plans/:id` | Update plan        |
| DELETE | `/api/plans/:id` | Delete/cancel plan |

### 🔹 Subscription Management

| Method | Endpoint                        | Description                         |
| ------ | ------------------------------- | ----------------------------------- |
| POST   | `/api/subscriptions/subscribe`  | Subscribe to a plan (dummy payment) |
| PUT    | `/api/subscriptions/:id/cancel` | Cancel a subscription               |
| GET    | `/api/subscriptions`            | Get all subscriptions               |

---

## 🧾 Dummy Payment Gateway

Path: `dummy-payment/payment.gateway.js`

Simulates a successful transaction:

```js
exports.processPayment = async (amount) => {
  return {
    success: true,
    transactionId: Math.random().toString(36).substring(2),
    amount,
    message: "Payment successful",
  };
};
```

---

## 🛠️ Setup Instructions

### 🔽 Clone the repository

```bash
git clone https://github.com/your-username/subscription-api.git
cd subscription-api
```

### 📦 Install dependencies

```
npm install
```

### 🌱 Set up environment variables

Create a `.env` file in the root directory and add the following:

```
PORT=3000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
```

### ▶️ Run the server

```bash
npm start
```

### 📜 API Documentation

Visit `http://localhost:3000/api-docs` to view the API documentation generated using Swagger.
