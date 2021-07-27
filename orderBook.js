function reconcileOrder(existingBook, incomingOrder) {
  // 1 - if existing book is empty - add to order book
  if (existingBook.length <= 0) {
    existingBook.push(incomingOrder)

    return existingBook
  }
  // 2 - if type == add to order book//
  for (let i = 0; i < existingBook.length; i++) {
    let matchingOrderType = (incomingOrder.type === existingBook[i].type)
    let matchingPrice = (incomingOrder.price === existingBook[i].price)
    let matchingQuantity = (incomingOrder.quantity === existingBook[i].quantity)

    if (matchingOrderType) {
      existingBook.push(incomingOrder)

      return existingBook
    }
  }
}
module.exports = reconcileOrder
