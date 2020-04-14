const html = `
<main>
  <ul>
    <li><button>item</button></li>
  </ul>
  <p>Hello, world</p>
</main>
`

function countChildren({ children }) {
    let count = 0
    if(!children.length) return 0
    for(let el of [...children]) {
      count++
      count += countChildren(el)
    }
    return count
}

// Should return the count of all descendants
function countDescendants(element) {
  return Array.from(element.children).reduce((total, child) => {
    if(!child.length) return total + 1;
        console.log('>>>')
    for(let el of [...child]) {
      total++
    //   total += countChildren(el)
    }
    return [...child].reduce((t, c) => {
        if(!c.length) return t + 1;
        return t + c
    });
  }, 0)
}

// Test code
const result = countDescendants(document.querySelector("main"))
if (result !== 4) {
  console.error(`fail: ${result}`)
} else {
  console.log("Pass!")
}