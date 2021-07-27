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
    // 3 - type doesn't match but price and quantity don't match either
    if (!matchingOrderType &&
    !matchingPrice) {
      existingBook.push(incomingOrder)

      return existingBook
    }
    // 4 - perfect match buy/sell --> remove from book//
    if (!matchingOrderType &&
    matchingQuantity &&
    matchingPrice) {
      existingBook.splice([i], 1)

      return existingBook
    }
    // 5 - buy/sell same price/larger quantity --> save remainder quantity to book//
    if (!matchingOrderType &&
    incomingOrder.quantity < existingBook[i].quantity &&
    matchingPrice) {
      existingBook[i].quantity = existingBook[i].quantity -= incomingOrder.quantity

      existingBook.push(...existingBook.splice(i, 1))

      return existingBook
    }
    if (!matchingOrderType &&
      matchingPrice &&
      incomingOrder.quantity > existingBook[i].quantity) {
      existingBook[i].quantity = incomingOrder.quantity -= existingBook[i].quantity

      existingBook.splice(i, 1)

      return reconcileOrder(existingBook, incomingOrder)
    }
  }
}


module.exports = reconcileOrder
