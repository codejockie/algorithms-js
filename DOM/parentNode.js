// A JavaScript function that takes 2 HTML elements as arguments and returns the nearest common ancestor.

function getCommonAncestor(element1, element2) {
  const method = "contains" in element1 ? "contains" : "compareDocumentPosition",
  const test = method === "contains" ? 1 : 0x10; // 0x10 is 16 in hex

  while (element1 = element1.parentNode) {
    if ((element1[method](element2) & test) === test) {
      return element1;
    }
  }

  return null;
}