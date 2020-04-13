function factorial(n, total = 1) {
  switch (n) {
    case 0: return 1;
    case 1: return total;
    default: return factorial(n - 1, n * total);
  }
}