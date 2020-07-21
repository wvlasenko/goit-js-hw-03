'use strict';
const account = {
  balance: 0,
  transactions: [],
  createTransaction(amount, type) {
    const transaction = {
      type,
      amount,
      id: this.transactions.length,
    };
    // console.log(transaction);
    return transaction;
  },

  deposit(amount) {
    this.balance += amount;
    const transaction = this.createTransaction(amount, 'deposit');
    this.transactions.push(transaction);
    const message = `На Ваш счет зачислено ${amount} грн.`;
    return message;
    // console.log(message);
  },
  withdraw(amount) {
    if (this.balance < amount) {
      const message = `Транзакция отклонена! На Вашем счету недостаточно средств. Ваш текущий баланс составляет ${this.balance} грн.`;
      return message;
    } else {
      this.balance -= amount;
      const transaction = this.createTransaction(amount, 'withdraw');
      this.transactions.push(transaction);
      const message = `С Вашего счета снято ${amount} грн.`;
      return message;
      // console.log(message);
    }
  },
  getBalance() {
    const message = `На Вашем счету ${this.balance} грн.`;
    return message;
    // return this.balance;
  },
  getTransactionDetails(id) {
    for (let i = 0; i < this.transactions.length; i += 1) {
      const idToFind = this.transactions[i];
      if (idToFind.id === id) {
        // console.log(idToFind);
        return idToFind;
      }
    }
    const message = `Не удалось найти транзакцию с таким идентификатором - ${id}`;
    return message;
  },
  getTransactionTotal(type) {
    let totalTransaction = 0;
    for (let i = 0; i < this.transactions.length; i += 1) {
      const typeToFind = this.transactions[i];
      // console.log(typeToFind);
      if (typeToFind.type === type) {
        totalTransaction += typeToFind.amount;
      }
    }
    const message = `Сумма средств транзакций типа : ${type} = ${totalTransaction}`;
    return message;
  },

  getTransactionHistory() {
    console.log(`История Ваших успешных транзакций :`);
    return this.transactions;
  },
};

console.log(account.deposit(500));
console.log(account.getBalance());
console.log(account.withdraw(100));
console.log(account.deposit(300));
console.log(account.deposit(120));
console.log(account.getBalance());
console.log(account.getTransactionTotal('withdraw'));
console.log(account.getTransactionTotal('deposit'));
console.log(account.getBalance());
console.log(account.withdraw(300));
console.log(account.getBalance());
console.log(account.withdraw(600));
console.log(account.getTransactionHistory());
console.log(account.getTransactionDetails(3));
console.log(account.getTransactionDetails(15));
