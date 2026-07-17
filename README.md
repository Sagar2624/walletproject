# 🚀 Wallet Service (Ethereum Sepolia)

A lightweight Wallet backend service built using **Node.js**, **TypeScript**, **Express.js**, and **Ethers.js v6**.

The project demonstrates the core components of a crypto custody platform, including deterministic wallet generation, blockchain balance tracking, withdrawal processing, and transaction logging on the Ethereum Sepolia testnet.

---

## ✨ Features

- Deterministic HD wallet generation
- Ethereum Sepolia integration
- Wallet balance tracking
- Balance change logging (Inflow & Outflow)
- ETH withdrawal support
- Zod request validation
- Swagger API documentation
- JSON-based persistence

---

## 🛠 Tech Stack

- Node.js
- TypeScript
- Express.js
- Ethers.js v6
- Zod
- Swagger
- Ethereum Sepolia

---

## 📂 Project Structure

```
src/
├── config/
├── controllers/
├── middleware/
├── routes/
├── services/
├── swagger.ts
├── app.ts
└── server.ts

data/
├── balance.json
└── balance-logs.json
```

---

## ⚙️ Environment Variables

Create a `.env` file:

```env
MNEMONIC=test test test test test test test test test test test junk

RPC_URL=https://sepolia.infura.io/v3/YOUR_INFURA_PROJECT_ID

WALLET_COUNT=5

PORT=3000
```

---

## ▶️ Installation

```bash
npm install
```

---

## ▶️ Run Project

```bash
npm run dev
```

---

## 📚 API Documentation

Swagger UI:

```
http://localhost:3000/docs
```

---

## 📖 Detailed Documentation

Complete implementation details, architecture decisions, production improvements, and design considerations are available in:

```
wallet/readme.md
```

---

## 👨‍💻 Author
Sagar Sharma

**Sagar Sharma**

Blockchain Developer
