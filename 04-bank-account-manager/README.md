# Bank Account Manager

A bank account class with deposit, withdraw, and transaction history methods.

## Methods

| Method | Description |
|--------|-------------|
| `deposit(amount)` | Adds funds and records the transaction |
| `withdraw(amount)` | Deducts funds if balance allows |
| `checkBalance()` | Returns current balance |
| `listAllDeposits()` | Returns all deposit amounts as a comma-separated string |
| `listAllWithdrawals()` | Returns all withdrawal amounts as a comma-separated string |

## Key concepts

- ES6 Classes with constructor, `this`, and methods
- Array `.filter()` and `.map()` chained together to pull specific transaction types
- Input validation with early returns before any state changes
