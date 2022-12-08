const balances = [10, 100, 20, 50, 30];
const requests = [
  "withdraw 2 10",
  "transfer 5 1 20",
  "deposit 5 20",
  "transfer 3 4 15",
];

function solution(balances, requests) {
  requests.forEach((req) => {
    const actions = req.split(" ");

    if (actions.length === 4) {
      const [action, acc1, acc2, amount] = actions;
      transfer(balances, parseInt(acc1), parseInt(acc2), parseInt(amount));
    } else {
      const [action, acc, amount] = actions;

      if (action === "deposit") {
        deposit(balances, parseInt(acc), parseInt(amount));
      } else {
        withdraw(balances, parseInt(acc), parseInt(amount));
      }
    }
  });

  return balances;
}

function withdraw(balances, acc1, amount) {
  const bal = balances[acc1];
  if (bal >= amount) {
    balances[acc1] = bal - amount;
  }
  console.log(balances);
}

function transfer(balances, acc1, acc2, amount) {
  if (!(acc1 < balances.length && acc2 < balances.length)) return;

  const bal1 = balances[acc1 - 1];
  const bal2 = balances[acc2 - 1];

  if (bal1 >= amount) {
    balances[acc1 - 1] = bal1 - amount;
    balances[acc2 - 1] = bal2 + amount;
  }
  console.log(balances);
}

function deposit(balances, acc, amount) {
  if (!(acc < balances.length)) return;

  const bal = balances[acc];
  balances[acc] = bal + amount;
}

console.log(solution(balances, requests));
