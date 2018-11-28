function depositProfit(deposit, rate, threshold) {
  let y = 0;
  let c = 0;
  while (c < threshold) {
    y += 1;
    c = deposit * Math.pow(1 + rate / 100, y);
  }
  return y;
}
// You have deposited a specific amount of money into your bank account. Each year your balance increases at the same growth rate. With the assumption that you don't make any additional deposits, find out how long it would take for your balance to pass a specific threshold. Of course you don't want to wait too long, so you know that the answer is not greater than 6

// For deposit = 100, rate = 20, and threshold = 170 => 3 
