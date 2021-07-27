function reconcileOrder(existingBook, incomingOrder) {
  // 1 - if existing book is empty - add to order book
  if (existingBook.length <= 0) {
    existingBook.push(incomingOrder)

    return existingBook
  }
}
module.exports = reconcileOrder