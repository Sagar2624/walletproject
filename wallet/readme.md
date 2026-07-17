<<<<<<< HEAD
# Custody Service - Technical Documentation

## Overview

This project implements a simplified cryptocurrency custody backend on Ethereum Sepolia.

The objective is to demonstrate the complete custody lifecycle including:

- Deterministic wallet generation
- Blockchain balance tracking
- Transaction logging
- Withdrawal processing
- REST API exposure
- Request validation
- API documentation

---

# Architecture

The project follows a layered architecture.

```
Request

↓

Routes

↓

Controllers

↓

Services

↓

Blockchain / Storage
```

Each layer has a single responsibility.

---

# Tech Stack

Backend

- Node.js
- TypeScript
- Express

Blockchain

- Ethereum Sepolia
- Ethers.js v6

Validation

- Zod

Documentation

- Swagger OpenAPI

Persistence

- JSON Storage

---

# Features

## 1. Deterministic Wallet Generation

Wallets are derived using HD Wallet derivation.

Derivation Path

```
m/44'/60'/0'/0/index
```

This guarantees:

- Same mnemonic → same wallet
- Same index → same address
- Increasing wallet count preserves previous wallets
- Decreasing wallet count returns a subset

Supported wallet count:

```
1–20
```

---

## 2. Wallet Balance Tracking

Balances are fetched directly from Ethereum Sepolia using ethers.js.

```
provider.getBalance(address)
```

Balances are persisted in

```
data/balance.json
```

The service compares previous and latest balances to detect balance changes.

---

## 3. Balance Change Logging

Every detected movement is stored inside

```
data/balance-logs.json
```

Supported log types

### INFLOW

External wallet deposits ETH into custody wallet.

### OUTFLOW

Custody wallet successfully broadcasts a withdrawal transaction.

Each log contains

- Wallet Address
- Type
- Amount
- Transaction Hash
- Timestamp

---

## 4. Withdrawal

The withdrawal endpoint accepts

```json
{
  "from": "...",
  "destination": "...",
  "amount": "0.001"
}
```

Processing steps

1. Validate request
2. Verify custody wallet
3. Derive wallet
4. Check balance
5. Estimate gas
6. Build transaction
7. Sign transaction
8. Broadcast
9. Record logs

Both sender and receiver balances are updated.

---

## 5. APIs

### GET /api/wallets

Returns

- Wallet Index
- Address
- Balance
- Asset
- Network

---

### POST /api/withdraw

Creates and broadcasts an ETH withdrawal.

---

## Validation

Zod validates

- Ethereum address
- Amount
- Required fields

---

## Swagger

Available at

```
http://localhost:3000/docs
```

Swagger provides

- API testing
- Request schema
- Response schema

---

# Storage

Current implementation uses JSON files.

```
data/

balance.json

balance-logs.json
```

Reason

The assignment allows file persistence, making JSON sufficient while keeping the implementation simple.

---

# Design Decisions

## Why HD Wallet?

To satisfy deterministic wallet generation requirements.

## Why JSON?

Database setup wasn't required for the assignment.

## Why Polling?

Simpler implementation suitable for assignment scope.

---

# Production Improvements

The current implementation is intentionally lightweight.

A production custody system would include:

## Secure Key Management

Replace environment mnemonic with

- AWS KMS
- Hashicorp Vault
- HSM
- MPC Wallet Infrastructure

---

## Database

Replace JSON with

- PostgreSQL
- MongoDB

Store

- Wallet metadata
- Transactions
- Audit logs
- Users

---

## Blockchain Monitoring

Replace polling with

- WebSocket providers
- Event listeners
- Webhooks
- Blockchain indexers

Examples

- Alchemy Notify
- Tenderly
- The Graph

---

## Transaction Processing

Introduce

- Queue workers
- Retry mechanism
- Dead-letter queues

Technologies

- BullMQ
- RabbitMQ
- Kafka

---

## API Security

Add

- JWT Authentication
- API Keys
- Role Based Access Control
- Rate Limiting

---

## Monitoring

Production deployments should include

- Prometheus
- Grafana
- Alerting
- Centralized Logging

---

## High Availability

- Multiple RPC Providers
- Failover Logic
- Health Checks
- Auto Scaling

---

## Testing

Production should include

- Unit Tests
- Integration Tests
- End-to-End Tests
- Load Tests

---

# Trade-offs

| Area | Current | Production |
|------|----------|------------|
| Storage | JSON | PostgreSQL |
| Tracking | Polling | Events |
| Keys | Environment | HSM/MPC |
| Network | Sepolia | Multi-chain |
| Authentication | None | JWT |

---

# Conclusion

This project demonstrates the fundamental building blocks of a custody platform while maintaining a clean and modular architecture.

The implementation satisfies the assignment requirements and provides a solid foundation for evolving into a production-grade custody service.

---

# Author

Sagar Sharma

Blockchain Developer
=======
# walletproject
>>>>>>> 3cd5258cd62405a4046fba141383b65f4c448c71
