function isPalindrome(string) {
  let _string = string.replace(/\s/g, '').toLowerCase()
  return reverse(_string) === _string
}

function reverse(string) {
  return string.split('').reverse().join('')
}