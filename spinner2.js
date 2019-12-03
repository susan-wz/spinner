const spinSymbols = ['\r|   ', '\r/   ', '\r-   ', '\r\\  ', "\n"];
let delay = 100;

for (let symbol of spinSymbols) {
  setTimeout(() => {
    process.stdout.write(symbol);
  }, delay += 200)
}