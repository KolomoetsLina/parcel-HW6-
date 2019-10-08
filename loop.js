function loop(selector, fn) {
    const elements = document.querySelectorAll(selector);
    for (let i = 0; i < elements.length ; i = i + 1 ) {
      fn(elements[i]);
    }
}
 module.exports = loop;